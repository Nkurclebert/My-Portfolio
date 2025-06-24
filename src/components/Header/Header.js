import React, { useState } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Hamburger,
  MobileNav,
  HamburgerWrapper,
} from "./HeaderStyles";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "services", title: "Services" },
  { id: "technologies", title: "Technologies" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </Link>
      </Div1>
      <Div2>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <NavLink href={`#${nav.id}`}>{nav.title}</NavLink>
          </li>
        ))}
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Nkurclebert">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/nkuranga-clebert-26a067232/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/clebertnkuranga/?next=%2F">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
      <HamburgerWrapper>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </HamburgerWrapper>
      <MobileNav open={menuOpen}>
        <ul style={{ width: "100%", padding: 0 }}>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <NavLink
                href={`#${nav.id}`}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "1.5rem" }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </MobileNav>
    </Container>
  );
};

export default Header;
