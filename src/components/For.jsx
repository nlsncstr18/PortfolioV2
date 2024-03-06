import React, { useState } from "react";
import "../pages/Home/Home.css";
import { Link } from "react-router-dom";
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
          className="for"
        >
          <Link to={"/PortfolioV2/About"} className="about">
            ABOUT ME
          </Link>
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
