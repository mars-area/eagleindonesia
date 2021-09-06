import React from "react";
import styled from "styled-components";

const MainTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  padding: 0.25rem;
`;

const MainTopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

const MainTopRight = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: center;
  width: 50%;
`;

const H3 = styled.h3`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.1rem;
`;

const Label = styled.label`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;

const Select = styled.select`
  font-family: "Cardo", serif;
  border: none;
  margin: 0 0 0 0.25rem;
  padding: 0 0.25rem 0 0.25rem;
`;

function MainTop() {
  return (
    <MainTopWrapper>
      <MainTopLeft>
        <H3>Home &gt;</H3>
      </MainTopLeft>
      <MainTopRight>
        <Label htmlfor="categ">Filter:</Label>
        <Select name="categ" id="categ">
          <option value="New">New</option>
          <option value="Popularity">Popularity</option>
        </Select>
      </MainTopRight>
    </MainTopWrapper>
  );
}

export default MainTop;
