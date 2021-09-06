import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Apparel from "./pages/Apparel";

const Mainpage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
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
          <Route exact path="/apparel" component={Apparel} />
        </Switch>
      </Mainpage>
    </BrowserRouter>
  );
}

export default Router;
