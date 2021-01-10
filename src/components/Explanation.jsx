import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ExplanationWrapper = styled.div`
  color: black;
  margin: 30px;
  padding: 10px;
  border: 1px solid ${props => (props.correct ? "#23a659" : "#EB5757")};
  border-radius: 8px;
  background: ${props => (props.correct ? "#EDFFE1" : "#FAE1E1")};
`;

function Explanation(props) {
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
      window.location = "/";
    }
  };

  return (
    <>
      <ExplanationWrapper correct={correct}>
        <div style={{ fontSize: 18, marginBottom: 8 }}>
          {correct ? "Correct!" : "Incorrect"}
        </div>
        <div>{question.explanations[submitted]}</div>
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
  );
}

export default Explanation;
