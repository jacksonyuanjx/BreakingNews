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
        title={"Protests Take Place in Response to Trans-Mountain Pipeline"}
        img={img1}
        desc=""
      ></Card>
      <Card
        title={"Many Front-Line Healthcare Workers Will Not Receive Vaccine"}
        img={img2}
        desc=""
      ></Card>
      <Link to={{ pathname: "/summaries" }} style={{ textDecoration: "none" }}>
        <Card
          title={"US-Mexico Border and the Transition to a New Administration"}
          img={img3}
          desc=""
        ></Card>
      </Link>
      <Card
        title={"Ukraine International Airlines Flight 752 Crash"}
        desc=""
        img={img4}
      ></Card>
      <Card title={"Ireland Legalizes Abortion"} desc="" img={img5}></Card>
    </StyledSection>
  );
}

export default CardSection;
