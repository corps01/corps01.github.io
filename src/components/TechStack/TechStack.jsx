import { Grid, Box } from "@mui/material";
import TechStackCard from "./TechStackCard";
import { ReactComponent as ReactLogo } from "../../icons/react.svg";
import { ReactComponent as ExpressLogo } from "../../icons/express.svg";
import { ReactComponent as NodeLogo } from "../../icons/nodejs.svg";
import { ReactComponent as Typescript } from "../../icons/typescript.svg";
import { ReactComponent as ReduxLogo } from "../../icons/redux.svg";
import { ReactComponent as PostresLogo } from "../../icons/postgres.svg";
import { ReactComponent as NestJSLogo } from "../../icons/nestjs.svg";
import { ReactComponent as DockerLogo } from "../../icons/docker.svg";
import { ReactComponent as JestLogo } from "../../icons/jest.svg";
import { ReactComponent as GraphqlLogo } from "../../icons/graphql.svg";
import { ReactComponent as TailwindLogo } from "../../icons/tailwind.svg";
import { ReactComponent as GitLogo } from "../../icons/git.svg";

const TechStack = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: { xs: "4rem", md: "12rem" },
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>
        <b>About Me</b>
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          paddingTop: { md: "5rem" },
        }}
      >
        <Box
          sx={{
            maxWidth: "30rem",
            marginRight: { xs: "0%", md: "10rem" },
          }}
        >
          <p>
            I am a Frontend Developer who isn't just passionate about coding,
            but also about open-source and design.
          </p>
          <p>
            I aim to not only create functional, responsive websites but also
            beautiful, intuitive ones that leave a lasting impression on users
            with my skills as well as my keen eye for design.
          </p>
          <p>
            I'm a fully bilingual team-player ready to integrate to any team!
          </p>
        </Box>
        <Grid
          container
          sx={{
            maxWidth: "479px",
            minWidth: "350px",
            paddingTop: { xs: "2rem", md: "0" },
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
