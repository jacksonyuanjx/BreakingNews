import React, { useState } from "react";
import Question from "../components/Question";
import ChoiceContainer from "../components/ChoiceContainer";

const questions = [
  {
    question: `"Biden will establish an open border policy, allowing crowds of illegal immigrants to enter the United States."`,
    options: [
      "Biden will gradually alter Trump-era border policies to be more humane, but will do so gradually",
      "Biden hopes to reinstate the Obama Administration’s “catch-and-release policy",
      "Biden’s Administration will maintain security of the US-Mexico border through aerial and ground surveillance technologies",
    ],
    ans: 0,
  },
  {
    question: `"Mexico will pay for Trump’s border wall."`,
    options: [
      "The border wall has been paid for entirely through US federal funding, partly allocated by congress and partly allocated unilaterally through a Trump executive order",
      "President Trump suggested tolls for passage into America that will go towards paying off the cost of the wall",
      "President Trump proposed a “border tax” to pay for the wall",
      "President Trump said by used the remittance money of illegal immigrants to pay for the wall",
    ],
    ans: 0,
  },
];

function MultipleChoice() {
  const [index, setIndex] = useState(0);

  return (
    <>
      {questions[index] &&
        (
          <>
            <Question text={questions[index].question} />
            <ChoiceContainer
              index={index}
              setIndex={setIndex}
              question={questions[index]}
            />
          </>
        )
      }
    </>
  );
}

export default MultipleChoice;
