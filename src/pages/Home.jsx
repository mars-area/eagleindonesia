import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 100%;
  width: 100%;
`;

function Home() {
  return (
    <Header>
      <h1>This is Home Page</h1>
    </Header>
  );
}

export default Home;
