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
        <Route index element={<Home />} />
        <Route path="/Projects/" element={<Projects />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Skills/" element={<Skills />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
