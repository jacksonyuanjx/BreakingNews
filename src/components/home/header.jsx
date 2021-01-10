import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 16vh;
  border-bottom: 4px solid black;
  padding-left: 24px;
  padding-top: 24px;
  letter-spacing: 1px;
`;

const Text = styled.h1`
  line-height: 84px;
  text-align: left;
  font-size: 36px;
`;

function Header() {
  return <StyledHeader>
    <Text>Today's Stories</Text>
    </StyledHeader>;
}

export default Header;
