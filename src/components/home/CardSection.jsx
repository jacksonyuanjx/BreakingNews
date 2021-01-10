import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledSection = styled.div`
  padding-top: 40px;
`;

function CardSection() {
  return (
    <StyledSection>
      <Card title="Story 1" desc="content 1"></Card>
      <Card title="Story 2" desc="content 2"></Card>
      <Card title="Story 3" desc="content 3"></Card>
      <Card title="Story 4" desc="content 4"></Card>
      <Card title="Story 5" desc="content 5"></Card>
      <Card title="Story 6" desc="content 6"></Card>
    </StyledSection>
  );
}

export default CardSection;
