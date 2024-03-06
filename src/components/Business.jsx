import React, { useState } from "react";
import "../pages/Home/Home.css";
import { TypeAnimation } from "react-type-animation";

function Business({ handleBusinessState }) {
  // const [isBusiness, setIsBusiness] = useState(false);

  // const hoverBusiness = (isHovering) => {
  //   setIsBusiness(isHovering);
  //   handleBusinessState("isBusiness", isHovering);
  // };
  return (
    <>
      {/* {isBusiness ? (
        <h1
          onMouseEnter={() => hoverBusiness(true)}
          onMouseLeave={() => hoverBusiness(false)}
          className="business"
        >
          <span className="contact">LET'S TALK</span>
        </h1>
      ) : ( */}
      <h1
        className="business"
        onMouseEnter={() => hoverBusiness(true)}
        onMouseLeave={() => hoverBusiness(false)}
      >
        <TypeAnimation
          sequence={["BUSINESS", 7000, "CAT", 2000]}
          repeat={Infinity}
          deletionSpeed={90}
          speed={1}
        />
      </h1>
      {/* )} */}
    </>
  );
}

export default Business;
