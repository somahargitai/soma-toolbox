#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tools } from '../src/data/tools';
import { generateImagePath } from './utils';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script to fix inconsistent image paths in the tools.ts file
 * This ensures all tools use the same image naming convention
 */
const fixImagePaths = () => {
  try {
    console.log('Starting image path consistency check...');
    
    const toolsFilePath = path.resolve(__dirname, '../src/data/tools.ts');
    console.log(`Tools file path: ${toolsFilePath}`);
    
    if (!fs.existsSync(toolsFilePath)) {
      console.error(`Tools file not found at: ${toolsFilePath}`);
      return false;
    }
    
    let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');
    console.log(`Read tools file, length: ${toolsContent.length} characters`);
    
    // Check each tool for inconsistent paths
    let changesCount = 0;
    let noChangeCount = 0;
    
    for (const tool of tools) {
      const correctImagePath = generateImagePath(tool.name, tool.id);
      
      if (tool.image !== correctImagePath) {
        console.log(`Inconsistent path found for tool ${tool.id} (${tool.name}):`);
        console.log(`  Current: ${tool.image}`);
        console.log(`  Should be: ${correctImagePath}`);
        
        // Replace the inconsistent path in the file
        const patternStart = `id: "${tool.id}"`;
        const imagePathPattern = new RegExp(`(${patternStart}[\\s\\S]*?image: ["'])(.*?)(["'])`, 'g');
        
        const updatedContent = toolsContent.replace(imagePathPattern, `$1${correctImagePath}$3`);
        
        if (updatedContent === toolsContent) {
          // Try with single quotes
          const patternStartAlt = `id: '${tool.id}'`;
          const imagePathPatternAlt = new RegExp(`(${patternStartAlt}[\\s\\S]*?image: ["'])(.*?)(["'])`, 'g');
          
          toolsContent = toolsContent.replace(imagePathPatternAlt, `$1${correctImagePath}$3`);
          
          if (toolsContent === updatedContent) {
            console.log(`⚠️ Couldn't update path for tool ID ${tool.id}`);
            noChangeCount++;
          } else {
            console.log(`✅ Fixed path for tool ID ${tool.id}`);
            changesCount++;
          }
        } else {
          toolsContent = updatedContent;
          console.log(`✅ Fixed path for tool ID ${tool.id}`);
          changesCount++;
        }
      } else {
        // Path is already consistent
        noChangeCount++;
      }
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(toolsFilePath, toolsContent, 'utf8');
    
    console.log(`\nImage path consistency check complete!`);
    console.log(`Fixed paths: ${changesCount}`);
    console.log(`Already consistent paths: ${noChangeCount}`);
    console.log(`Total tools checked: ${tools.length}`);
    
    return true;
  } catch (error) {
    console.error('Error updating image paths:', error);
    return false;
  }
};

// Run the fixer function
fixImagePaths(); 