# Website Thumbnail Generator

This tool generates screenshots of websites using Puppeteer and updates the tools.ts file with the new image paths.

## Features

- **Automated Screenshots**: Uses Puppeteer (headless Chrome) to generate screenshots
- **Popup Dismissal**: Automatically attempts to dismiss cookie banners and popups
- **Mobile Optimized**: Captures mobile-friendly screenshots
- **Smart Naming**: Creates descriptive filenames based on tool names
- **Automatic Updates**: Updates tools.ts file with new image paths
- **Consistent Naming**: Uses a dedicated utility for filename generation to ensure consistency

## Why Puppeteer?

After trying multiple screenshot API services that failed with various errors, this tool now uses Puppeteer to generate screenshots locally. This approach is:

- More reliable (no dependency on external services)
- No API rate limits
- Higher quality screenshots
- Full control over the rendering process

## Setup

1. Navigate to the thumbnail-gen directory:

```bash
cd thumbnail-gen
```

2. Install dependencies:

```bash
npm install
```

Puppeteer will download a compatible version of Chromium during installation.

3. Alternatively, you can use the setup-and-test script which will both install dependencies and run a test:

```bash
./setup-and-test.sh
```

This script will:

- Install all required dependencies
- Run a test with sample websites
- Generate example screenshots for:
  - Refactoring Guru (ID: 28)
  - Google (ID: 101)
  - GitHub (ID: 102)
- Provide instructions for generating more screenshots

## Usage

### Testing with sample websites

To test the generator with sample websites from test.ts:

```bash
npm run test
```

### Generate screenshots for specific tools

To generate screenshots for specific tools, pass the tool IDs as arguments:

```bash
npm run generate 28 31 45
```

This will generate screenshots for tools with IDs 28, 31, and 45.

### Generate screenshots for all tools

To generate screenshots for all tools:

```bash
npm run generate
```

### Fix inconsistent image paths

If you find inconsistencies in image paths in the tools.ts file (such as different naming formats), you can run:

```bash
npm run fix-paths
```

This will scan all tools and ensure their image paths use the consistent naming convention from the utils.ts file.

## How It Works

The script uses Puppeteer, a headless Chrome browser API, to render and screenshot websites:

1. Launches a headless Chrome browser
2. Configures a mobile viewport (375x667px)
3. Attempts to dismiss cookie consent popups and banners
4. Takes a screenshot of the top 500x500px portion
5. Saves images with descriptive filenames to public/images/tools folder
6. Updates the tools.ts file with the new image paths

## Popup Handling

The tool includes logic to automatically dismiss common popups including:

- Cookie consent banners
- GDPR notices
- Newsletter popups
- Modal dialogs

It uses a comprehensive list of common selectors and text patterns to find and click on buttons that would dismiss these interruptions.

## File Naming

Files follow a naming convention: they are named using a sanitized version of the tool name followed by the ID:

```bash
refactoring-guru-28.png
```

This makes files more descriptive while ensuring uniqueness.

The naming convention is implemented in the `utils.ts` file with the `generateImageFilename` and `generateImagePath` functions. These functions ensure consistent naming across the entire application.

## Troubleshooting

If screenshots are failing:

- Make sure you have enough RAM available (Chromium uses significant memory)
- Some websites may block automated browsers - you can try changing the user agent
- Adjust the timeout settings if websites are slow to load
- For websites requiring authentication, you'll need to add login capabilities

## Customization

You can modify the screenshot parameters in generatenow.ts to adjust:

- Viewport dimensions (mobile vs desktop)
- Screenshot dimensions (width, height)
- Capture area (top, full page, etc.)
- Wait conditions for page loading
- Popup selectors to dismiss
