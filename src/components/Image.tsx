import React from 'react';
import { getAssetPath } from '../utils/path';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

/**
 * Image component that automatically handles base path resolution
 * Use this component instead of the native <img> tag for consistent path handling
 */
const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const resolvedSrc = getAssetPath(src);
  
  return <img src={resolvedSrc} {...props} />;
};

export default Image; 