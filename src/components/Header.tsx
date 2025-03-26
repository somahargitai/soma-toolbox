import React, { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="py-4 px-16 sticky top-0 z-50 bg-transparent">
      <div className="px-4 w-full flex justify-between items-center">
        {/* Logo for mobile */}
        <div className="flex items-center md:hidden">
          <div
            className="text-4xl mr-3 bg-black bg-opacity-10 w-10 h-10 rounded-md flex items-center justify-center"
            style={{ backdropFilter: "blur(8px)" }}
          >
            🧰
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center p-2 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
              mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40 transition-transform duration-300 md:hidden ${
            mobileMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8 text-xl">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Submit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className="mt-8">
                <button
                  className="bg-white text-black px-5 py-2 rounded-md text-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Updates
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            borderRadius: "4px",
            width: "100%",
            height: "88px",
            background: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow:
              "0 7px 23px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.04)",
            padding: "0 16px",
          }}
          className="hidden md:block"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              padding: "0 8px",
            }}
            className="super-navbar__content"
          >
            <div className="text-5xl flex items-center">🧰</div>
            <div style={{ flex: 1 }} />
            <div
              style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <ul className="flex justify-center py-3">
                <li className="mx-5">
                  <a
                    href="#"
                    className="hover:text-gray-300 font-medium text-md"
                  >
                    Home
                  </a>
                </li>
                <li className="mx-5">
                  <a
                    href="#"
                    className="hover:text-gray-300 font-medium text-md"
                  >
                    Submit
                  </a>
                </li>
                <li className="mx-5">
                  <a
                    href="#"
                    className="hover:text-gray-300 font-medium text-md"
                  >
                    About
                  </a>
                </li>
              </ul>
              
              <button className="px-3 py-1 rounded-md text-md font-medium mr-3">
                Get Updates
              </button>
              
              {/* Custom Search Component */}
              <div className="flex items-center ml-4">
                {searchOpen ? (
                  <div className="flex items-center">
                    <div className="relative flex items-center">
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-black bg-opacity-20 text-white px-4 py-1 rounded-l-md w-0 focus:outline-none transition-all duration-300 ease-in-out"
                        style={{
                          width: searchOpen ? '200px' : '0',
                          padding: searchOpen ? '0.25rem 1rem' : '0',
                          border: searchOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                          backdropFilter: 'blur(4px)'
                        }}
                        autoFocus={searchOpen}
                      />
                      <button className="bg-white text-black px-3 py-1 rounded-r-md flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Go
                      </button>
                    </div>
                    <button 
                      onClick={toggleSearch}
                      className="ml-2 px-3 py-1 rounded-md text-md font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                      </svg>
                      Back
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={toggleSearch}
                    className="px-3 py-1 rounded-md text-md font-medium flex items-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Custom Search
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
