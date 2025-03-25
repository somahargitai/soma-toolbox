import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <nav
          style={{
            borderRadius: "4px",
            width: "calc(100% - 193px)",
            maxWidth: "800px",
            background: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow:
              "0 7px 23px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.04)",
            padding: "0 6px",
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
            <div className="text-3xl">🧰</div>
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
            <button className="bg-white text-black px-3 py-1 rounded-md text-md font-medium">
              Get Updates
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
