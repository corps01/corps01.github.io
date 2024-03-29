import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./timelineComponent.css";

const Timeline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: { md: "8rem" },
      }}
    >
      <h1 style={{ paddingBottom: "1rem" }}>
        <b> Work History </b>
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: theme.palette.secondary.main }}
          date="Mar 2022 - Feb 2023"
          dateClassName={theme.palette.mode}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Enroute Systems
          </h4>
          <p>
            During my time at Enroute as a web developer, I was actively
            involved in the development of user interfaces, integration of data
            endpoints, and thorough testing of components to ensure their proper
            functionality and prevent any potential errors.
          </p>
          <p>React, Typescript, GraphQL, Nest</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: theme.palette.secondary.main }}
          date="Nov 2021 - Mar 2022 "
          dateClassName={theme.palette.mode}
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
          contentStyle={{ background: theme.palette.secondary.main }}
          date=" 2018-2022"
          dateClassName={theme.palette.mode}
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
          contentStyle={{ background: theme.palette.secondary.main }}
          date=" 2015-2018"
          dateClassName={theme.palette.mode}
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
