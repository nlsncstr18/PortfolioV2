import React, { useState } from "react";

import AnimatedRoutes from "./components/AnimatedRoutes";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor innerSize={16} outerStyle={32} color="255,255,255" />
      <AnimatedRoutes />
    </>
  );
}

export default App;
