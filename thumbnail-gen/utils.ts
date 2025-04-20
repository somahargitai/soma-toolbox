/**
 * Utility functions for the thumbnail generator
 */

/**
 * Creates a consistent filename for a tool based on its name and ID
 * This function should be used whenever generating or referencing image filenames
 * to ensure consistency across the application
 * 
 * @param toolName - The name of the tool
 * @param toolId - The unique ID of the tool
 * @returns A sanitized filename (without extension) for the tool
 */
export const generateImageFilename = (toolName: string, toolId: string): string => {
  // Replace non-alphanumeric characters with hyphens and convert to lowercase
  const sanitized = toolName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  // Trim leading/trailing hyphens and add tool ID for uniqueness
  return `${sanitized.replace(/^-+|-+$/g, '')}-${toolId}`;
};

/**
 * Generates the complete image path for a tool
 * 
 * @param toolName - The name of the tool
 * @param toolId - The unique ID of the tool
 * @returns The full image path to be used in the tools.ts file
 */
export const generateImagePath = (toolName: string, toolId: string): string => {
  const filename = generateImageFilename(toolName, toolId);
  return `/images/tools/${filename}.png`;
}; 