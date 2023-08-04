import { Grid, Box } from "@mui/material";
import TechStackCard from "./TechStackCard";
import { ReactComponent as ReactLogo } from "../../assests/icons/react.svg";
import { ReactComponent as ExpressLogo } from "../../assests/icons/express.svg";
import { ReactComponent as NodeLogo } from "../../assests/icons/nodejs.svg";
import { ReactComponent as Typescript } from "../../assests/icons/typescript.svg";
import { ReactComponent as ReduxLogo } from "../../assests/icons/redux.svg";
import { ReactComponent as PostresLogo } from "../../assests/icons/postgres.svg";
import { ReactComponent as NestJSLogo } from "../../assests/icons/nestjs.svg";
import { ReactComponent as DockerLogo } from "../../assests/icons/docker.svg";
import { ReactComponent as JestLogo } from "../../assests/icons/jest.svg";
import { ReactComponent as GraphqlLogo } from "../../assests/icons/graphql.svg";
import { ReactComponent as TailwindLogo } from "../../assests/icons/tailwind.svg";
import { ReactComponent as GitLogo } from "../../assests/icons/git.svg";

const TechStack = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: { xs: "4rem", md: "10rem" },
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>
        <b>About Me</b>
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingTop: { md: "5rem" },
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: { md: "65%" },
          maxWidth: { md: "65%" },
        }}
      >
        <Box
          sx={{
            maxWidth: { md: "45%", xs: "100%" },
            textAlign: "justify",
          }}
        >
          <p>
            I'm dedicated to creating seamless user experiences and captivating
            web applications.
            <br></br>
            <br></br>
            My expertise lies in React, Typescript and NodeJS allowing me to
            transform ideas into reality with innovative solutions.
            <br></br> <br></br>I believe in the power of collaboration and open
            communication. I have experience working with English-speaking
            clients and closely collaborating with cross-functional teams.
            <br></br> <br></br>
            Attention to detail is one of my strengths, and I always strive to
            meet and exceed expectations in every project. <br></br> <br></br>{" "}
            Continuous improvement is essential to me, and I stay updated with
            the latest industry trends and technologies to provide innovative
            solutions.
            <br></br> <br></br>
          </p>
        </Box>
        <Grid
          container
          sx={{
            maxWidth: "479px",
            minWidth: "350px",
            paddingTop: { xs: "2rem", md: "0%" },
          }}
          justifyContent={"space-evenly"}
        >
          <TechStackCard tech={{ name: "Typescript", icon: <Typescript /> }} />
          <TechStackCard tech={{ name: "React", icon: <ReactLogo /> }} />
          <TechStackCard tech={{ name: "Redux", icon: <ReduxLogo /> }} />
          <TechStackCard tech={{ name: "Tailwind", icon: <TailwindLogo /> }} />
          <TechStackCard tech={{ name: "NodeJS", icon: <NodeLogo /> }} />
          <TechStackCard tech={{ name: "ExpressJS", icon: <ExpressLogo /> }} />
          <TechStackCard tech={{ name: "GraphQL", icon: <GraphqlLogo /> }} />
          <TechStackCard tech={{ name: "Jest", icon: <JestLogo /> }} />
          <TechStackCard tech={{ name: "PostreSQL", icon: <PostresLogo /> }} />
          <TechStackCard tech={{ name: "NestJS", icon: <NestJSLogo /> }} />
          <TechStackCard tech={{ name: "Docker", icon: <DockerLogo /> }} />
          <TechStackCard tech={{ name: "Git", icon: <GitLogo /> }} />
        </Grid>
      </Box>
    </Box>
  );
};

export default TechStack;
