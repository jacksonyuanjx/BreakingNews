import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

const StyledSection = styled.div`
  padding-top: 40px;
`;

function CardSection() {
  return (
    <StyledSection>
      <Card
        loc="Canada"
        title={"Protests Take Place in Response to Trans-Mountain Pipeline"}
        img={img1}
        desc="Activists say they will battle against the Trans Mountain pipeline expansion..."
      ></Card>
      <Card
        loc="Global"
        title={"Many Front-Line Healthcare Workers Will Not Receive Vaccine"}
        img={img2}
        desc="Not all front-line workers say they will accept a COVID-19 vaccine..."
      ></Card>
      <Link to={{ pathname: "/summaries" }} style={{ textDecoration: "none" }}>
        <Card
          loc="US"
          title={"US-Mexico Border and the Transition to a Biden Administration"}
          img={img3}
          desc="The Trump administration announced Monday that 70,000 migrants were..."
        ></Card>
      </Link>
      <Card
        loc="Global"
        title={"Ukraine International Airlines Flight 752 Crash"}
        desc="Ukraine International Airlines Flight 752 was shot down minutes after taking off..."
        img={img4}
      ></Card>
      <Card 
        loc="Global"
        title={"Ireland Legalizes Abortion"} 
        desc="Ireland has voted to repeal its near-total ban on abortion nationwide..." 
        img={img5}>
        </Card>
    </StyledSection>
  );
}

export default CardSection;
