#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { tools } from '../src/data/tools';
import { testTools } from './test';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate a screenshot using Puppeteer
const generateScreenshot = async (url: string, outputPath: string, toolName: string, maxRetries = 3): Promise<boolean> => {
  let retryCount = 0;
  let browser;
  
  while (retryCount <= maxRetries) {
    try {
      console.log(`Generating screenshot for: ${toolName} (${url}) - attempt ${retryCount + 1}/${maxRetries + 1}`);
      
      // Launch a headless browser
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      });
      
      // Create a new page
      const page = await browser.newPage();
      
      // Set viewport to mobile dimensions
      await page.setViewport({
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
      });
      
      // Set user agent to mobile
      await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
      
      // Navigate to the URL with a timeout
      await page.goto(url, {
        waitUntil: retryCount === 0 ? 'networkidle2' : 'domcontentloaded',
        timeout: 30000
      });
      
      // Wait a bit for any delayed content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Attempt to dismiss common popups and cookie banners
      await dismissPopups(page);
      
      // Wait a moment for popups to disappear
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Take a screenshot of the top portion (square)
      await page.screenshot({
        path: outputPath,
        clip: {
          x: 0,
          y: 0,
          width: 375,
          height: 375
        },
        fullPage: false,
        type: 'png',
        omitBackground: false
      });
      
      console.log(`Successfully saved screenshot to: ${outputPath}`);
      
      // Close the browser
      await browser.close();
      browser = undefined;
      
      return true;
    } catch (error) {
      console.error(`Error generating screenshot for ${url}:`, error instanceof Error ? error.message : error);
      
      // Close the browser if it's open
      if (browser) {
        await browser.close();
        browser = undefined;
      }
      
      // If we have retries left, try again
      if (retryCount < maxRetries) {
        retryCount++;
        console.log(`Retrying (${retryCount}/${maxRetries})...`);
        
        // Wait before retrying
        const delay = Math.pow(2, retryCount) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error(`Failed after ${maxRetries + 1} attempts to generate screenshot for ${url}`);
        return false;
      }
    }
  }
  
  return false;
};

// Function to dismiss common popups and cookie banners
const dismissPopups = async (page: any): Promise<void> => {
  try {
    console.log("Attempting to dismiss popups and cookie banners...");
    
    // Priority selectors - try these first with more targeted attempts
    const prioritySelectors = [
      // Accept cookies buttons (high priority)
      'button[id*="accept"]', '.accept-cookies', '.accept-button', '.accept', 
      '[aria-label="Accept cookies"]', '[aria-label="Accept all cookies"]',
      '[data-testid="cookie-accept"]', '[data-purpose="cookie-accept"]',
      'a[href*="#accept-cookies"]', '#accept-cookies', '#acceptAllCookies',
      '[class*="accept"][class*="cookie"]', '[class*="cookie"][class*="accept"]',
      '#onetrust-accept-btn-handler', '.cc-accept', '.cc-accept-all',
      
      // Close (X) buttons (high priority)
      'button.modal-close', 'button.close-button', 'button.close-modal', 'button.closeButton',
      'button[aria-label="Close"]', 'button[title="Close"]', '.modal-header button.close',
      'button[class*="close-icon"]', 'button[class*="closeIcon"]', 'button[data-testid="close"]',
      '.cookie-banner button.close', '.cookie-notice button.close', '.cookie-banner__close button',
      'button.close', 'a.close[role="button"]', 'button.popup-close', 'button.banner-close',
      
      // GitHub specific selectors (since it has special popups)
      '.js-cookie-consent-dismiss', '.js-consent-banner-dismiss',
      'button[data-action="consent-banner#dismiss"]', 
      '[data-view-component="true"][aria-label="Dismiss"]',
      '[data-view-component="true"].close-button'
    ];
    
    // Common popup selectors as fallbacks
    const commonSelectors = [
      // Cookie consent buttons
      '[id*="cookie"] button', '.cookie-banner button', '.cookie-consent button',
      '[id*="cookie-banner"] button', '[id*="cookie-consent"] button',
      '[id*="cookie"] .accept', '[id*="cookie"] .close', '[id*="cookie"] [aria-label*="Accept"]',
      '[id*="cookie"] [aria-label*="accept"]', '[id*="cookie"] [aria-label*="Close"]',
      
      // Generic consent buttons (avoid "Learn More" or "Manage" buttons)
      'button[aria-label="OK"]', 'button[aria-label="Got it"]', 'button[aria-label="I accept"]',
      'button[aria-label="I agree"]', 'button[aria-label="Allow"]', 'button[aria-label="Allow all"]',
      
      // GDPR/EU specific
      '.agree-button', '.agree', 'button[id*="agree"]', '[aria-label*="agree"]',
      '.gdpr-button', '[id*="gdpr"] button',
      
      // Overlay click targets
      '.cookie-overlay', '.overlay', '.modal-backdrop'
    ];
    
    // Try priority selectors first with more careful approach
    for (const selector of prioritySelectors) {
      try {
        // Check if elements exist
        const elements = await page.$$(selector);
        
        if (elements.length > 0) {
          console.log(`Found ${elements.length} priority elements with selector: ${selector}`);
          
          for (const element of elements) {
            // Get element text to avoid clicking "Learn More" buttons
            const elementText = await page.evaluate((el: any) => {
              return el.innerText || el.textContent || '';
            }, element);
            
            const lowerText = (elementText || '').toLowerCase();
            
            // Skip buttons with suspicious text
            if (
              lowerText.includes('learn more') || 
              lowerText.includes('manage') || 
              lowerText.includes('settings') || 
              lowerText.includes('preferences')
            ) {
              console.log(`Skipping suspicious button with text: "${elementText}"`);
              continue;
            }
            
            // Get element position to check visibility
            const isVisible = await page.evaluate((el: any) => {
              const style = window.getComputedStyle(el);
              return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
            }, element);
            
            if (isVisible) {
              // Try to scroll element into view
              await page.evaluate((el: any) => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), element);
              await new Promise(resolve => setTimeout(resolve, 500));
              
              // Click the element
              await element.click().catch(() => console.log(`Couldn't click priority element: ${selector}`));
              console.log(`Clicked priority element: ${selector} with text: "${elementText}"`);
              await new Promise(resolve => setTimeout(resolve, 500));
              
              // Check if popup/banner disappeared
              const stillVisible = await page.evaluate((el: any) => {
                return document.body.contains(el) && window.getComputedStyle(el).display !== 'none';
              }, element);
              
              if (!stillVisible) {
                console.log(`Priority element ${selector} was successfully dismissed`);
                return; // Exit early if we successfully dismissed something
              }
            }
          }
        }
      } catch (e) {
        console.log(`Error with priority selector ${selector}:`, e instanceof Error ? e.message : e);
        // Continue to next selector
      }
    }
    
    // Try executing a script for sites with buttons that have text matching our criteria
    // This is an alternative to the :contains() selector which doesn't work in pure CSS
    try {
      await page.evaluate(() => {
        const buttonTextsToClick = [
          'accept all cookies', 'accept cookies', 'accept all', 'accept',
          'agree', 'agree to all', 'i agree', 'ok', 'got it', 'dismiss',
          'close', 'continue', 'proceed', 'allow cookies', 'allow all'
        ];
        
        const textsToAvoid = [
          'learn more', 'manage', 'settings', 'preferences', 'customize', 'options'
        ];
        
        // Find all buttons, links and clickable elements
        const allElements = Array.from(document.querySelectorAll(
          'button, [role="button"], a[href="#"], input[type="button"], input[type="submit"]'
        ));
        
        // Filter for elements that match our button text criteria
        for (const el of allElements) {
          const elText = (el.textContent || '').toLowerCase().trim();
          
          // Check if the element text matches any of our target texts
          const shouldClick = buttonTextsToClick.some(text => elText.includes(text));
          const shouldAvoid = textsToAvoid.some(text => elText.includes(text));
          
          if (shouldClick && !shouldAvoid) {
            // Check if the element is visible
            const rect = el.getBoundingClientRect();
            const style = window.getComputedStyle(el);
            const isVisible = rect.width > 0 && rect.height > 0 && 
              style.display !== 'none' && 
              style.visibility !== 'hidden' && 
              style.opacity !== '0';
            
            if (isVisible) {
              console.log(`Clicking element with text: ${elText}`);
              (el as HTMLElement).click();
            }
          }
        }
      });
      
      console.log("Executed button text search and click script");
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (e) {
      console.log("Error running button text script:", e);
    }
    
    // For GitHub specifically, try their special dialog dismissal code
    try {
      if (page.url().includes('github.com')) {
        console.log("Detected GitHub, trying special dismissal code");
        await page.evaluate(() => {
          // GitHub specific - find and click the actual dismiss buttons
          const dismissButtons = [
            // Close buttons by aria-label
            ...Array.from(document.querySelectorAll('button[aria-label="Dismiss"]')),
            ...Array.from(document.querySelectorAll('button[aria-label="Close"]')),
            // Close buttons by class
            ...Array.from(document.querySelectorAll('.js-consent-banner-dismiss')),
            ...Array.from(document.querySelectorAll('.js-cookie-consent-dismiss')),
            // Close buttons by dataset attributes
            ...Array.from(document.querySelectorAll('[data-action="consent-banner#dismiss"]'))
          ];
          
          for (const button of dismissButtons) {
            const rect = button.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              console.log("Clicking GitHub dismiss button");
              (button as HTMLElement).click();
            }
          }
        });
        
        console.log("Executed GitHub-specific dismissal code");
      }
    } catch (e) {
      console.log("Error with GitHub-specific code:", e);
    }
    
    console.log("Popup dismissal completed");
  } catch (error) {
    console.log("Error while trying to dismiss popups:", error);
    // Continue even if popup dismissal fails
  }
};

// Helper to create a valid filename from a tool name
const createValidFilename = (toolName: string, toolId: string): string => {
  // Replace non-alphanumeric characters with hyphens and convert to lowercase
  const sanitized = toolName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  // Trim leading/trailing hyphens and add tool ID for uniqueness
  return `${sanitized.replace(/^-+|-+$/g, '')}-${toolId}`;
};

// Function to update the tools.ts file with the new image path
const updateToolsFile = (toolId: string, newImagePath: string): boolean => {
  try {
    const toolsFilePath = path.resolve(__dirname, '../src/data/tools.ts');
    console.log(`Looking for tools file at: ${toolsFilePath}`);
    
    if (!fs.existsSync(toolsFilePath)) {
      console.error(`Tools file not found at: ${toolsFilePath}`);
      return false;
    }
    
    let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');
    console.log(`Read tools file, length: ${toolsContent.length} characters`);
    
    // Create a regex pattern to find and replace the image path for the specific tool ID
    const patternStart = `id: '${toolId}'`;
    console.log(`Looking for pattern: ${patternStart}`);
    
    // Check if the ID exists in the file
    if (!toolsContent.includes(patternStart)) {
      console.error(`Tool ID '${toolId}' not found in the tools file`);
      
      // For test IDs (101 and 102), don't treat as error since they're just for testing
      if (toolId === '101' || toolId === '102') {
        console.log(`This is a test ID (${toolId}), skipping update`);
        return true;
      }
      
      return false;
    }
    
    const imagePathPattern = new RegExp(`(${patternStart}[\\s\\S]*?image: ['"])(.*?)(['"])`, 'g');
    
    const updatedContent = toolsContent.replace(imagePathPattern, `$1${newImagePath}$3`);
    
    if (updatedContent === toolsContent) {
      console.warn(`Found tool ID '${toolId}' but couldn't update the image path`);
      return false;
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(toolsFilePath, updatedContent, 'utf8');
    console.log(`Updated tools.ts file for tool ID: ${toolId}`);
    
    return true;
  } catch (error) {
    console.error(`Error updating tools file for tool ID ${toolId}:`, error);
    return false;
  }
};

// Main function to process tools and generate screenshots
const processTools = async (toolIds: string[]): Promise<void> => {
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;
  
  // Get the full list of tools to work with
  const allTools = process.env.NODE_ENV === 'test' ? testTools : tools;
  
  // Filter tools to process based on provided IDs
  const toolsToProcess = toolIds.length > 0
    ? allTools.filter(tool => toolIds.includes(tool.id))
    : allTools;
    
  if (toolsToProcess.length === 0) {
    console.error('No tools found to process. Check your tool IDs.');
    process.exit(1);
  }
  
  // Get the target directory path
  const targetDir = path.resolve(__dirname, '../public/images/tools');
  
  // Check if target directory exists, create if it doesn't
  if (!fs.existsSync(targetDir)) {
    console.log(`Creating target directory: ${targetDir}`);
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Get list of existing image files
  const existingFiles = fs.readdirSync(targetDir)
    .filter(file => file.endsWith('.png'));

  console.log('\n=== Initial Analysis ===');
  console.log(`Found ${toolsToProcess.length} tools in tools.ts list`);
  console.log(`Found ${existingFiles.length} existing image files\n`);

  // Create a map of existing files for quick lookup
  const existingFileMap = new Map(
    existingFiles.map(file => {
      const baseName = file.replace('.png', '');
      return [baseName, file];
    })
  );

  // Filter tools that need processing (in list but no image)
  const toolsNeedingScreenshots = toolsToProcess.filter(tool => {
    const expectedFileName = createValidFilename(tool.name, tool.id);
    const hasImage = existingFileMap.has(expectedFileName);
    
    if (hasImage) {
      console.log(`✅ ${tool.name} (ID: ${tool.id}) - Image exists, will skip`);
      skipCount++;
      return false;
    } else {
      console.log(`🔥 ${tool.name} (ID: ${tool.id}) - Image missing, will process`);
      return true;
    }
  });

  // Log files that exist but aren't in tools list
  existingFiles.forEach(file => {
    const baseName = file.replace('.png', '');
    const isInToolsList = toolsToProcess.some(tool => 
      createValidFilename(tool.name, tool.id) === baseName
    );
    if (!isInToolsList) {
      console.log(`❌ ${file} - File exists but tool not in tools.ts list`);
    }
  });

  console.log(`\nFound ${toolsNeedingScreenshots.length} tools that need screenshots...\n`);
  
  // Process each tool that needs a screenshot
  for (const tool of toolsNeedingScreenshots) {
    try {
      console.log(`\nProcessing: ${tool.name} (ID: ${tool.id})`);
      
      const fileBaseName = createValidFilename(tool.name, tool.id);
      const outputFileName = `${fileBaseName}.png`;
      const outputPath = path.resolve(targetDir, outputFileName);
      
      // Generate the screenshot
      const success = await generateScreenshot(tool.url, outputPath, tool.name);
      
      if (success) {
        // Update the tools.ts file with the new image path
        const newImagePath = `/images/tools/${outputFileName}`;
        const updateSuccess = updateToolsFile(tool.id, newImagePath);
        
        if (updateSuccess) {
          successCount++;
          console.log(`✅ Successfully processed ${tool.name}`);
        } else {
          failCount++;
          console.error(`❌ Failed to update tools.ts for ${tool.name}`);
        }
      } else {
        failCount++;
        console.error(`❌ Failed to generate screenshot for ${tool.name}`);
      }
    } catch (error) {
      failCount++;
      console.error(`❌ Error processing ${tool.name}:`, error);
    }
  }
  
  console.log(`\n===== Summary =====`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Skipped (already exists): ${skipCount}`);
  console.log(`Total tools in list: ${toolsToProcess.length}`);
  console.log(`Total files in directory: ${existingFiles.length}`);
};

// Get tool IDs from command line arguments
const args = process.argv.slice(2);
let toolIds: string[] = [];

if (args.length > 0) {
  toolIds = args;
} else {
  // If no IDs provided and we're in test mode, use the test tools
  if (process.env.NODE_ENV === 'test') {
    toolIds = testTools.map(tool => tool.id);
  }
}

// Run the main function
processTools(toolIds)
  .then(() => console.log('Processing complete!'))
  .catch(error => console.error('Error in main process:', error)); 