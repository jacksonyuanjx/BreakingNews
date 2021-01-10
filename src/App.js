import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import theme from "./theme";

const StyledApp = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: #ededed;
  height: ${props => props.height + "px"};
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
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
