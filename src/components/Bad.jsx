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
        <h1
          className="bad"
          onMouseEnter={() => hoverBad(true)}
          onMouseLeave={() => hoverBad(false)}
          onClick={() => {
            window.location.href = "/skills";
          }}
        >
          <span className="skills">SKILLS</span>
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
