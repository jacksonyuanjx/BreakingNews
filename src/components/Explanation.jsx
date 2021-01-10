import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ExplanationWrapper = styled.div`
  color: #eee;
  margin: 30px;
  padding: 10px;
  border: 1px solid #23a659;
  border-radius: 8px;
  background: #2ac46a;
`;

function Explanation(props) {
  const { setSelected, setShowAns, setIndex, index, correct } = props;

  const handleClick = () => {
    if (index === 0) {
      setShowAns(false);
      setSelected(null);
      setIndex(index + 1);
    } else {
      window.location = "/";
    }
  };

  return (
    <>
      <ExplanationWrapper>
        <div style={{ fontSize: 18, marginBottom: 8 }}>
          {correct ? "Correct!" : "Incorrect"}
        </div>
        <div>Bluh bluh bluh</div>
      </ExplanationWrapper>
      <Button
        style={{ marginLeft: 30 }}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {index === 1 ? "Back to home page" : "Next"}
      </Button>
    </>
  );
}

export default Explanation;
