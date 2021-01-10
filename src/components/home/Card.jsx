import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid black;
  border-radius: 8px;
`;

function Card(props) {
  return (
    <StyledCard>
      <div style={{ marginBottom: 10 }}>{props.title}</div>
      <div>{props.desc}</div>
    </StyledCard>
  );
}

export default Card;
