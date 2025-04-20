import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-4 px-2 md:px-16 sticky top-0 z-50 bg-transparent">
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
                  href="https://hargitaisoma.hu"
                  className="hover:text-gray-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={isAboutPage ? "/" : "/about"}
                  className="hover:text-gray-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isAboutPage ? "Back to Toolbox" : "About"}
                </a>
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
                    href="https://hargitaisoma.hu"
                    className="hover:text-gray-300 font-medium text-md"
                  >
                    Home
                  </a>
                </li>
                <li className="mx-5">
                  <a
                    href={isAboutPage ? "/" : "/about"}
                    className="hover:text-gray-300 font-medium text-md"
                  >
                    {isAboutPage ? "Back to Toolbox" : "About"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
