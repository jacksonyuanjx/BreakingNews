import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const ExplanationWrapper = styled.div`
  color: black;
  margin: 30px;
  padding: 10px;
  border: 1px solid ${props => (props.correct ? "#23a659" : "#EB5757")};
  border-radius: 8px;
  background: ${props => (props.correct ? "#EDFFE1" : "#FAE1E1")};
`;

function Explanation(props) {
  const [redirect, setRedirect] = useState(false);
  const {
    setSelected,
    setShowAns,
    setIndex,
    index,
    correct,
    submitted,
    question,
  } = props;

  const handleClick = () => {
    if (index < 2 && correct) {
      setShowAns(false);
      setSelected(null);
      setIndex(index + 1);
    } else if (correct) {
      // window.location.href = "http://localhost:3000/#/stakeholders";
      setRedirect(true);
    }
  };

  return !redirect ? (
    <>
      <ExplanationWrapper correct={correct}>
        <div style={{ fontSize: 18, marginBottom: 8 }}>
          {correct ? "Correct!" : "Incorrect"}
        </div>
        <div>
          {submitted !== null
            ? question.explanations[submitted]
            : "Please select an option"}
        </div>
      </ExplanationWrapper>
      {correct && (
        <Button
          style={{ marginLeft: 30 }}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Next
        </Button>
      )}
    </>
  ) : (
    <Redirect to="stakeholders"></Redirect>
  );
}

export default Explanation;
