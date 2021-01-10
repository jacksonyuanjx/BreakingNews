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
  const { setSelected, setShowAns, setIndex, index, correct } = props;

  const handleClick = () => {
    if (index < 1 && correct) {
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
        <div>Bluh bluh bluh</div>
      </ExplanationWrapper>
      {correct && (
        <Button
          style={{ marginLeft: 30 }}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {index === 1 ? "Back to home page" : "Next"}
        </Button>
      )}
    </>
  );
}

export default Explanation;
