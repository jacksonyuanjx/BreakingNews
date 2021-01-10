import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledSection = styled.div`
  padding-top: 40px;
`;

function CardSection() {
  return (
    <StyledSection>
      <Card
        title={"Protests Take Place in Response to Trans-Mountain Pipeline"}
        desc=""
      ></Card>
      <Card
        title={"Many Front-Line Healthcare Workers Will Not Receive Vaccine"}
        desc=""
      ></Card>
      <Card
        title={"US-Mexico Border and the Transition to a Biden Administration"}
        desc=""
      ></Card>
      <Card title={"Ukraine International Airlines Flight 752 Crash"} desc=""></Card>
      <Card title={"Ireland Legalizes Abortion"} desc=""></Card>
    </StyledSection>
  );
}

export default CardSection;
