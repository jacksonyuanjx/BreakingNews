import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  height: 84px;
  border-bottom: 2px solid black;
  text-align: left;
  padding-left: 8px;
  padding-top: 24px;
`;
const TheQuestion = styled.h1`
    font-size: 24px;
    color: #000000;
    letter-spacing: 1px;
`;

function Question() {
  return <QuestionContainer><TheQuestion> Question Title Here?</TheQuestion></QuestionContainer>;
}

export default Question;