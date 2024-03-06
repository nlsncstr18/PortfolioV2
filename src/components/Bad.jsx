import React, { useState } from "react";
import "../pages/Home/Home.css";
function Bad({ handleBadState }) {
  const [isBad, setIsBad] = useState(false);

  const hoverBad = (isHovering) => {
    setIsBad(isHovering);
    handleBadState("isBad", isHovering);
  };
  return (
    <>
      {isBad ? (
        <a href="/PortfolioV2/skills">
          <h1
            className="bad"
            onMouseEnter={() => hoverBad(true)}
            onMouseLeave={() => hoverBad(false)}
          >
            <span className="skills">SKILLS</span>
          </h1>
        </a>
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
