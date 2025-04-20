import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import ToolboxHome from "./pages/ToolboxHome";
import About from "./pages/About";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToolboxHome />} />
        <Route path="/about" element={<About />} />

        {/* Fallback */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
