import "./Home.css";
import React, { useState } from "react";

import Boring from "../../components/Boring";
import Bad from "../../components/Bad";
import For from "../../components/For";
import Business from "../../components/Business";

function Home() {
  const [componentState, setComponentState] = useState({
    isBoring: false,
    isBad: false,
    isFor: false,
    isBusiness: false,
  });
  const handleComponentState = (stateName, value) => {
    setComponentState((prevState) => ({
      ...prevState,
      [stateName]: value,
    }));
  };

  return (
    <>
      <div
        className={
          componentState.isBoring ||
          componentState.isBad ||
          componentState.isFor ||
          componentState.isBusiness
            ? "black quote playfair-display-regular"
            : "quote playfair-display-regular "
        }
      >
        <div className="rightQ">
          <div className="rightQdiv ">
            <Boring handleBoringState={handleComponentState} />
            <Bad handleBadState={handleComponentState} />
          </div>
        </div>
        <div className="leftQ">
          <div className="leftQdiv">
            <For handleForState={handleComponentState} />
            <Business />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
