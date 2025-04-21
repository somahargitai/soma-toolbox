import React from "react";

export interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, children }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white"
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
};

export default SocialIcon; 