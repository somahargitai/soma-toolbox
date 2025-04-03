/**
 * Utility to get the correct base path for assets
 * Handles both development and production environments
 */

// Get base path from Vite configuration
const getBasePath = (): string => {
  const isProduction = import.meta.env.PROD && window.location.pathname.includes('/toolbox');
  return isProduction ? '/toolbox' : '';
};

/**
 * Prepends the correct base path to asset URLs
 * @param path - The asset path (should start with '/')
 * @returns The full path including the base path
 */
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  
  // Ensure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}; 