import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About Me/About";
import Skills from "../pages/Skills/Skills";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/PortfolioV2" element={<Home />} />
        <Route path="/PortfolioV2/projects" element={<Projects />} />
        <Route path="/PortfolioV2/about" element={<About />} />
        <Route path="/PortfolioV2/skills" element={<Skills />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
