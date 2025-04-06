#!/bin/bash

echo "Setting up Website Thumbnail Generator..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run test
echo "Running test with sample websites..."
npm run test

# Check results
echo "Test complete. Check the public/images/tools directory for the generated screenshots."
echo "The following files should have been created:"
echo "- public/images/tools/28_screenshot.png (Refactoring Guru)"
echo "- public/images/tools/101_screenshot.png (Google)"
echo "- public/images/tools/102_screenshot.png (GitHub)"

# Instructions for generating more screenshots
echo ""
echo "To generate screenshots for specific tools, run:"
echo "npm run generate <tool_id> <tool_id> ..."
echo ""
echo "For example: npm run generate 28 31 45" 