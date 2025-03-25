import React from 'react';

interface DottedBackgroundProps {
  children: React.ReactNode;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
}

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  children,
  dotColor = 'rgba(255, 255, 255, 0.1)',
  dotSize = 1,
  spacing = 15,
}) => {
  const backgroundStyle = {
    backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    backgroundPosition: '0 0',
    backgroundColor: '#151618',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="min-h-screen text-white" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default DottedBackground; 