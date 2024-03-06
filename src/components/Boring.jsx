import React, { useState } from "react";
import "../pages/Home/Home.css";
import { Link } from "react-router-dom";
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
          className="boring"
        >
          <Link to={"/PortfolioV2/Projects"} className="proj">
            PROJECTS
          </Link>
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
