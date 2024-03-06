import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { projects } from "../../details";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Projects() {
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
        <div className="title">PROJECTS</div>

        {/* --------------------------------------------------------------------------EXPERIENCES */}
        <VerticalTimeline>
          {projects.map((project) => (
            <VerticalTimelineElement
              key={project.id}
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
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </span>
              }
            >
              <h1 className="vertical-timeline-element-title">
                {project.title}
              </h1>

              <h3 className="vertical-timeline-element-subtitle">
                {project.description}
              </h3>

              <div className="stacks">
                {project.imgs.map((img) => (
                  <img src={img} alt="stacks" key={img} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
}

export default Projects;
