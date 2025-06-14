import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./TechnologiesStyles";
import { DiReact } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import { FaHtml5 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design
    </SectionText>

    <Boxes>
      <Box style={{ alignItems: "center" }}>
        <DiReact size="6rem" />
        <BoxNum>React.js</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <RiTailwindCssFill size="6rem" />
        <BoxNum>TailWindCss</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <FaJs size="6rem" />
        <BoxNum>JavaScript</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <RiNextjsFill size="6rem" />
        <BoxNum>NextJs</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <FaFigma size="6rem" />
        <BoxNum>Figma</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <FaNodeJs size="6rem" />
        <BoxNum>NodeJs</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <FaHtml5 size="6rem" />
        <BoxNum>HTML</BoxNum>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <BiLogoTypescript size="6rem" />
        <BoxNum>TypeScript</BoxNum>
      </Box>
    </Boxes>
  </Section>
);

export default Technologies;
