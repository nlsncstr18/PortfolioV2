import React, { useState } from "react";
import "../pages/Home/Home.css";
function For({ handleForState }) {
  const [isFor, setIsFor] = useState(false);
  const hoverFor = (isHovering) => {
    setIsFor(isHovering);
    handleForState("isFor", isHovering);
  };

  return (
    <>
      {isFor ? (
        <h1
          onMouseEnter={() => hoverFor(true)}
          onMouseLeave={() => hoverFor(false)}
          onClick={() => {
            window.location.href = "/PortfolioV2/About";
          }}
          className="for"
        >
          <span className="about">ABOUT ME </span>
        </h1>
      ) : (
        <h1
          onMouseEnter={() => hoverFor(true)}
          onMouseLeave={() => hoverFor(false)}
          className="for"
        >
          FOR
        </h1>
      )}
    </>
  );
}

export default For;
