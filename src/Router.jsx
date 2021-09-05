import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import styled from "styled-components";

const Mainpage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function Router() {
  return (
    <BrowserRouter>
      <Topbar />
      <Mainpage>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoes" component={Shoes} />
        </Switch>
      </Mainpage>
    </BrowserRouter>
  );
}

export default Router;
