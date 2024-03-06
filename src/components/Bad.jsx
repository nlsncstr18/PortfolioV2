import React, { useState } from "react";
import "../pages/Home/Home.css";
import { Link } from "react-router-dom";
function Bad({ handleBadState }) {
  const [isBad, setIsBad] = useState(false);

  const hoverBad = (isHovering) => {
    setIsBad(isHovering);
    handleBadState("isBad", isHovering);
  };
  return (
    <>
      {isBad ? (
        <h1
          className="bad"
          onMouseEnter={() => hoverBad(true)}
          onMouseLeave={() => hoverBad(false)}
        >
          <Link to={"/PortfolioV2/Skills"} className="skills">
            SKILLS
          </Link>
        </h1>
      ) : (
        <h1
          className="bad"
          onMouseEnter={() => hoverBad(true)}
          onMouseLeave={() => hoverBad(false)}
        >
          IS BAD
        </h1>
      )}
    </>
  );
}

export default Bad;
