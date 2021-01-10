import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import ChoiceContainer from "../components/ChoiceContainer";

function MultipleChoice() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  });

  return (
    <>
      <Question />
      <ChoiceContainer index={index} setIndex={setIndex} />
    </>
  );
}

export default MultipleChoice;
