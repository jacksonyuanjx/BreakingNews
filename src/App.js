import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import theme from "./theme";

import Home from "./pages/Home";
import Summaries from "./pages/Summaries";

const StyledApp = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: #ededed;
  height: ${props => props.height + "px"};
  overflow: scroll;
`;

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  const onResize = () => {
    setHeight(window.innerHeight * 0.01);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return window.removeEventListener("resize", onResize);
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledApp height={height}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/summaries">
              <Summaries />
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
