import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 84px;
  border-bottom: 1px solid black;
  line-height: 84px;
  text-align: center;
  font-size: 40px;
`;

function Header() {
  return <StyledHeader>Today's Stories</StyledHeader>;
}

export default Header;
