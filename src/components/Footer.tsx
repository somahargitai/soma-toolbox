import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-40 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Soma Toolbox</h3>
            <p className="text-gray-400 mb-4">A curated collection of the best tools for creatives, developers, and productivity enthusiasts.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Submit a Tool</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Soma Toolbox. Inspired by <a href="https://thetoolbox.art/" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">TheToolbox.art</a></p>
          <p className="mt-2 text-sm">Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 