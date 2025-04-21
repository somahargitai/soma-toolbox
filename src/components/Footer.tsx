import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-40 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Social Links Section */}
        <SocialLinks />

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Soma Toolbox. Inspired by{" "}
            <a
              href="https://thetoolbox.art/"
              className="underline hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheToolbox.art
            </a>
          </p>
          <p className="mt-2 text-sm">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
