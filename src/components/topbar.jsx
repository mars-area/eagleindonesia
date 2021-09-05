import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import basketImg from "../asset/icon/basket.svg";
import profileImg from "../asset/icon/user.svg";
import searchImg from "../asset/icon/search.svg";

const TopbarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--color-primary);
  height: 75px;
  padding: 1rem;
  overflow: hidden;
  border-bottom: 1px solid var(--color-medgray);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

@media (min-width: 1200px) {
  max-width: 1200px;
`;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  border: none;
`;

const SearchInput = styled.input`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "Cardo";
  width: 150px;
  border-radius: 8px;
  background-color: var(--color-ligray);
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      width: 200px;
    }
    &:focus {
      width: 200px;
      border: none;
    }
  }
`;

const SearchIcon = styled.button`
  padding: 0.5rem;
  height: 50px;
  overflow: hidden;
  border: none;
  background: none;
  margin-left: -50px;
  opacity: 0.25;
`;

const Basket = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  height: 50px;
  overflow: hidden;
  opacity: 0.5;
`;
const Profile = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  height: 50px;
  overflow: hidden;
  opacity: 0.65;
`;

function Topbar() {
  return (
    <TopbarContainer>
      <Wrapper>
        <Link to="/">
          <img
            height="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Logo_Eagle.svg"
            alt="logo"
          />
        </Link>
        <TopbarRight>
          <SearchForm>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon>
              <img height="30px" src={searchImg} alt="icon-search" />
            </SearchIcon>
          </SearchForm>
          <Basket>
            <img
              height="30px"
              opacity="0.6"
              src={basketImg}
              alt="icon-basket"
            />
          </Basket>
          <Profile>
            <img
              height="30px"
              opacity="0.6"
              src={profileImg}
              alt="icon-profile"
            />
          </Profile>
        </TopbarRight>
      </Wrapper>
    </TopbarContainer>
  );
}

export default Topbar;
