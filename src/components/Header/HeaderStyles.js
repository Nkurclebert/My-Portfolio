import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  z-index: 1100;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    left: 4px;
    width: 24px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  span:nth-child(1) {
    top: 8px;
    transform: ${({ open }) =>
      open ? "rotate(45deg) translateY(8px)" : "none"};
  }
  span:nth-child(2) {
    top: 15px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: 22px;
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translateY(-8px)" : "none"};
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    width: 50vw;
    height: 50vh;
    background: #212d45;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem 1.5rem;
    z-index: 1000;
    box-shadow: -2px 0 16px rgba(0, 0, 0, 0.2);
  }
  li {
    margin-bottom: 1.5rem;
    list-style: none;
  }
`;

export const HamburgerWrapper = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
