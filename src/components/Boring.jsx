import React, { useState } from "react";
import "../pages/Home/Home.css";

function Boring({ handleBoringState }) {
  const [isBoring, setIsBoring] = useState(false);

  const hoverBoring = (isHovering) => {
    setIsBoring(isHovering);
    handleBoringState("isBoring", isHovering);
  };

  return (
    <>
      {isBoring ? (
        <h1
          onMouseEnter={() => hoverBoring(true)}
          onMouseLeave={() => hoverBoring(false)}
          onClick={() => {
            window.location.href = "/PortfolioV2/projects";
          }}
          className="boring"
        >
          <span className="proj">PROJECTS </span>
        </h1>
      ) : (
        <h1
          onMouseEnter={() => hoverBoring(true)}
          onMouseLeave={() => hoverBoring(false)}
          className="boring"
        >
          BORING
        </h1>
      )}
    </>
  );
}

export default Boring;
