import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box } from "@mui/material";
import "./timelineComponent.css";

const Timeline = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "4rem", md: "8rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ paddingBottom: "1rem" }}>
        <b> Work History </b>
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(28,28,38)" }}
          date="Mar 2022 - Feb 2023"
          dateClassName="white-date"
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Enroute Systems
          </h4>
          <p>
            Worked as a web developer, creating user interfaces, creating API
            end-points, and collaborating with the design team.
          </p>
          <p>React, Typescript, GraphQL, Nest</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(28,28,38)" }}
          date="Nov 2021 - Mar 2022 "
          dateClassName="white-date"
        >
          <h3 className="vertical-timeline-element-title">
            Front-end Volunteer Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Codeando Mexico
          </h4>
          <p>
            Collaborated with Codeando Mexico, a volunteer-driven organization,
            and the government of the City of Monterrey on the "Decidimos
            Monterrey" project. I conducted front-end work by creating React
            user interfaces based on Figma designs provided by Monterrey's team.
          </p>
          <p>React, Bootstrap, PostgreSQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(28,28,38)" }}
          date=" 2015-2018"
          dateClassName="white-date"
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universidad de Colima
          </h4>
          <p>
            Studied computer science fundamentals, from algorithms to data
            structures to programming languages. Additionally, I was introduced
            to modern software development techniques, such as agile
            methodologies.
          </p>
          <p>Programming Fundamentals, Javascript, Python</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(28,28,38)" }}
          date=" 2015-2018"
          dateClassName="white-date"
        >
          <h3 className="vertical-timeline-element-title">
            Analist Programmer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universidad de Colima
          </h4>
          <p>
            I was taught the fundamentals of programming using C, as well as web
            development using HTML and JavaScript.
          </p>
          <p>Programming Fundamentals, C, Javascript, HTML</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Timeline;
