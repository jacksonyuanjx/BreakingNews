import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const OptionWrapper = styled.div`
  margin: 30px;
  margin-bottom: 0px;
`;

function ChoiceContainer(props) {
  const { index, setIndex, question } = props;
  const [selected, setSelected] = useState(null);

  const onOptionChange = index => {
    setSelected(index);
  };

  const handleContinueClick = () => {
    if (question.ans === selected) {
      console.log("True");
    } else {
      console.log("False");
    }
    setSelected(null);
    if (index < 2) {
      setIndex(index + 1);
    } else {
      console.log("Quiz done!");
      window.location = "/";
    }
  };

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
            handleContinueClick();
          }}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default ChoiceContainer;
