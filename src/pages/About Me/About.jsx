import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import profile from "/profile.jpg";

import { experiences, education } from "../../details";

import "./About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowUp,
  faCodeBranch,
  faBookSkull,
  faBicycle,
  faGamepad,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    const number = "09453208711";
    navigator.clipboard.writeText(number);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const downloadResume = () => {
    // Construct the URL to your resume file
    const resumeUrl = "/PortfolioV2/Castro_Nelson_Resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Castro_Nelson_Resume.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the document body after download
    document.body.removeChild(link);
  };
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
        <div className="title">ABOUT ME</div>
        <div className="containerAbout">
          <div className="info">
            <div className="leftSide">
              <img className="image" src={profile} alt="" />
              <div className="contactAbout">
                <div>
                  <a href="mailto:nlsncstr18@gmail.com">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2xl"
                      color="#757575"
                      style={{
                        cursor: "pointer",
                      }}
                      className="emailIcon"
                    />
                  </a>
                </div>
                <div className="number">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2xl"
                    color="#757575"
                    style={{ cursor: "pointer" }}
                    className="phoneIcon"
                    onClick={handleCopyNumber}
                  />
                  {copied && <p className="clipboard">Copied</p>}
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/nlsncstr18/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      color="#757575"
                      style={{ cursor: "pointer" }}
                      className="linkedinIcon"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/nlsncstr18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      color="#757575"
                      style={{ cursor: "pointer" }}
                      className="githubIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <h1>Nelson Castro</h1>
              <p>
                Experienced Front-end Developer and a fresh graduate of Computer
                Engineering. Passionate about creating innovative and impactful
                software solutions.
              </p>
              <button className="download" onClick={downloadResume}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="quotes">
          <h1>"The more you sweat in training the less you bleed in battle"</h1>
        </div>
        <div className="line"></div>
        <div className="exp">Experiences</div>
        {/* --------------------------------------------------------------------------EXPERIENCES */}
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "black",
                color: "  #757575",
                boxShadow: "0 0 10px 0 black",
              }}
              iconStyle={{ background: "white" }}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="32"
                  width="32"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>
              }
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={
                <span
                  style={{
                    color: "white",
                    padding: "10px",
                    backgroundColor: "black",
                    borderRadius: "15px",
                    boxShadow: "0 0 10px 0 #757575",
                  }}
                >
                  {experience.date}
                </span>
              }
            >
              <h1 className="vertical-timeline-element-title">
                {experience.jobRole}
              </h1>

              <h3 className="vertical-timeline-element-subtitle">
                {experience.companyName}
              </h3>

              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <div className="line"></div>
        <div className="educ">Education</div>
        {/* --------------------------------------------------------------------------Education */}
        <VerticalTimeline>
          {education.map((educ) => (
            <VerticalTimelineElement
              key={educ.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "black",
                color: "#757575",
                boxShadow: "0 0 10px 0 black",
              }}
              iconStyle={{ background: "white" }}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="40"
                  viewBox="0 0 640 512"
                >
                  <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                </svg>
              }
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={
                <span
                  style={{
                    color: "white",
                    padding: "10px",
                    backgroundColor: "black",
                    borderRadius: "15px",
                    boxShadow: "0 0 10px 0 #fff",
                  }}
                >
                  {educ.date}
                </span>
              }
              // iconStyle={{ background: "black", color: "black" }}
              // icon={<i className="fas fa-briefcase"></i>}
            >
              <h1 className="vertical-timeline-element-title">{educ.course}</h1>

              <h3 className="vertical-timeline-element-subtitle">
                {educ.school}
              </h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <div className="line"></div>
        <div className="interests">Interests</div>
        <div className="containerInterests">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>upskilling</h1>
                <h1>
                  <FontAwesomeIcon icon={faCodeBranch} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>Improving and upskilling my current skills.</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>learning</h1>
                <h1>
                  <FontAwesomeIcon icon={faArrowUp} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>Learning different techs and trends.</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>reading</h1>
                <h1>
                  <FontAwesomeIcon icon={faBookSkull} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>a world without stories is boring</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>biking</h1>
                <h1>
                  <FontAwesomeIcon icon={faBicycle} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>Keep moving or you get crash</h1>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>playing</h1>
                <h1>
                  <FontAwesomeIcon icon={faGamepad} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>Playing games and playing with my cat is therapeutic</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>wandering</h1>
                <h1>
                  <FontAwesomeIcon icon={faLocationDot} />
                </h1>
              </div>
              <div className="flip-card-back">
                <h1>Not all those who wander are lost</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
