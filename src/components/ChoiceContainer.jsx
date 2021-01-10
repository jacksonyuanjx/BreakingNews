import React, { useState, useEffect } from "react";
import Explanation from "./Explanation";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const OptionWrapper = styled.div`
  margin: 30px;
  margin-bottom: 0px;
`;

function ChoiceContainer(props) {
  const { index, setIndex, question } = props;
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [showAns, setShowAns] = useState(false);

  const onOptionChange = index => {
    setSelected(index);
  };

  const handleSubmitClick = () => {
    setSubmitted(selected);
    setShowAns(true);
  };

  useEffect(() => {
    console.log(index / 3);
  });

  return (
    <div className="container">
      <form>
        {question.options.map((option, index) => {
          return (
            <OptionWrapper className="form-check">
              <label>
                <input
                  key={index}
                  style={{ marginRight: 5 }}
                  type="radio"
                  checked={selected === index}
                  onChange={() => {
                    onOptionChange(index);
                  }}
                  name="react-tips"
                  className="form-check-input"
                />
                {option}
              </label>
            </OptionWrapper>
          );
        })}
        <Button
          style={{ marginLeft: 30, marginTop: 20 }}
          variant="contained"
          color="secondary"
          onClick={() => {
            handleSubmitClick(selected);
          }}
        >
          Submit
        </Button>
      </form>

      {showAns && (
        <Explanation
          setSelected={setSelected}
          setShowAns={setShowAns}
          setIndex={setIndex}
          correct={question.ans === submitted}
          index={index}
          submitted={submitted}
          question={question}
        ></Explanation>
      )}

      <div style={{ marginLeft: 30, marginTop: 30 }}>Progress:</div>
      <LinearProgress
        style={{ marginLeft: 30, marginTop: 10, width: 300 }}
        variant="determinate"
        value={(index / 3) * 100}
      ></LinearProgress>
    </div>
  );
}

export default ChoiceContainer;
