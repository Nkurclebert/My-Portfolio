import React from "react";
import { DiAndroid, DiCode, DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./ServicesStyles";

const Services = () => (
  <Section id="services">
    <SectionDivider />
    <br />
    <SectionTitle>Services</SectionTitle>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Web development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size="3rem" />

        <ListContainer>
          <ListTitle>Mobile Apps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI / UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Services;
