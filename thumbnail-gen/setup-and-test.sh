#!/bin/bash

echo "🚀 Setting up Website Thumbnail Generator..."

# Install dependencies and run test
echo "  ├── Installing dependencies..."
echo "  └── Running test with sample websites..."
npm install
npm run test

# Check results
echo ""
echo "✅ Test complete. Check the public/images/tools directory for the generated screenshots."

# Check if the output directory exists
if [ -d "../public/images/tools" ]; then
  echo "📁 Output directory exists"
  # Count PNG files in the directory
  png_count=$(find ../public/images/tools -name "*.png" | wc -l)
  echo "🖼️  Found $png_count PNG files in output directory"
else
  echo "❌ Output directory not found. Something went wrong with the test."
  exit 1
fi


echo ""
echo "The following files should have been created:"
echo "- public/images/tools/refactoring-guru-1001.png"
if [ -f "../public/images/tools/refactoring-guru-1001.png" ]; then
  echo "  ✅ Found Refactoring Guru screenshot"
else
  echo "  ❌ Missing Refactoring Guru screenshot"
fi

echo "- public/images/tools/google-1002.png"
if [ -f "../public/images/tools/google-1002.png" ]; then
  echo "  ✅ Found Google screenshot"
else
  echo "  ❌ Missing Google screenshot"
fi

echo "- public/images/tools/github-1003.png"
if [ -f "../public/images/tools/github-1003.png" ]; then
  echo "  ✅ Found GitHub screenshot"
else
  echo "  ❌ Missing GitHub screenshot"
fi

echo "- public/images/tools/cnn-1004.png"
if [ -f "../public/images/tools/cnn-1004.png" ]; then
  echo "  ✅ Found CNN screenshot"
else
  echo "  ❌ Missing CNN screenshot"
fi

# Instructions for generating more screenshots
echo ""
echo "--------------------------------------------"
echo "Instructions for generating more screenshots"
echo "--------------------------------------------"
echo ""
echo "🔥 To generate screenshots for specific tools, run:"
echo "npm run generate <tool_id> <tool_id> ..."
echo ""
echo "For example: npm run generate 28 31 45" 
# Instructions for generating all screenshots
echo ""
echo "🔥 To generate all screenshots, run:"
echo "npm run generate"
echo ""
