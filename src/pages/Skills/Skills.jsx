import React from "react";

import "./Skills.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3,
  faLaravel,
  faJs,
  faPhp,
  faVuejs,
  faAngular,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Skills() {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
        className="slide"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="title">SKILLS</div>
        <div className="containerSkills">
          <div className="boxS">
            <h1>HTML/CSS</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="rating">Very Good</div>
          </div>

          <div className="boxS">
            <h1>Javascript</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="rating">Very Good</div>
          </div>
          <div className="boxS">
            <h1>Php</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faPhp} />
            </div>
            <div className="rating">Good</div>
          </div>
          <div className="boxS">
            <h1>react</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="rating">Very Good</div>
          </div>
          <div className="boxS">
            <h1>vue</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faVuejs} />
            </div>
            <div className="rating">Good</div>
          </div>
          <div className="boxS">
            <h1>angular</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faAngular} />
            </div>
            <div className="rating">Good</div>
          </div>
          <div className="boxS">
            <h1>laravel</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faLaravel} />
            </div>
            <div className="rating">Very Good</div>
          </div>
          <div className="boxS">
            <h1>git</h1>
            <div className="iconS">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="rating">Very Good</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
