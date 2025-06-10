import React from "react";

import {
  Section,
  SectionText,
  SectionText1,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionText1 style={{ paddingBottom: "0px", paddingTop: "68px" }}>
        &lt; Hi There! /&gt;
      </SectionText1>
      <SectionTitle main>Clebert Nkuranga</SectionTitle>
      <SectionText style={{ paddingBottom: "64px" }}>
        I'm a full-stack web developer from Rwanda
      </SectionText>
      <Button onClick={() => (window.location = "/#footer")}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
