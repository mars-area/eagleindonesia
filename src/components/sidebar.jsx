import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import shoesIcon from "../asset/icon/sneakers.svg";
import backpackIcon from "../asset/icon/backpack.svg";
import apparelIcon from "../asset/icon/clothes.svg";
import sandalIcon from "../asset/icon/sandal.svg";
import newIcon from "../asset/icon/new.svg";

const SidebarContainer = styled.nav`
  z-index: 3;
  height: 100%;
  min-height: 100vh;
  width: 75px;
  padding: 75px 0 0 0;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid var(--color-medgray);
  @media screen and (mix-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;

const SideIcon = styled.img`
  width: 40px;
  margin: 0 1rem 0 0;
  @media screen and (min-width: 1200px) {
    width: 80px;
    max-height: 50px;
  }
`;

const A = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75px;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--color-dagray);
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: #111111;
  }

  &:hover {
    color: red;
    background-color: var(--color-ligray);
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <A to="/shoes">
            <SideIcon
              src={shoesIcon}
              style={{ transform: "rotate(25deg)" }}
              alt="shoes-icon"
            />
            Shoes
          </A>
        </li>
        <li>
          <A to="/bag">
            <SideIcon src={backpackIcon} alt="shoes-icon" /> Bags
          </A>
        </li>
        <li>
          <A to="/apparel">
            <SideIcon src={apparelIcon} alt="shoes-icon" /> Apparel
          </A>
        </li>
        <li>
          <A to="/sandal">
            <SideIcon
              src={sandalIcon}
              style={{ transform: "rotate(25deg)" }}
              alt="shoes-icon"
            />
            Sandals
          </A>
        </li>
        <li>
          <A to="/newarival">
            <SideIcon src={newIcon} alt="shoes-icon" /> New Arival
          </A>
        </li>
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;
