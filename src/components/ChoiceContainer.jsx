import React, { useState } from "react";

function ChoiceContainer(props) {
  const { index, setIndex } = props;
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    console.log(selectedOption);
  };

  return (
    <div className="container">
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={onOptionChange}
              name="react-tips"
              className="form-check-input"
            />
            Option 4
          </label>
        </div>
        <div className="form-group">
          <button
            className="continue-btn"
            type="submit"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChoiceContainer;
