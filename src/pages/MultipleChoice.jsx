import React, { useState } from "react";
import Question from "../components/Question";
import ChoiceContainer from "../components/ChoiceContainer";

const questions = [
  {
    question:
      "Biden will establish an open border policy, allowing crowds of illegal immigrants to enter the United States.",
    options: [
      "Biden will gradually alter Trump-era border policies to be more humane, but will do so gradually",
      "Biden hopes to reinstate the Obama Administration’s “catch-and-release policy",
      "Biden’s Administration will maintain security of the US-Mexico border through aerial and ground surveillance technologies",
    ],
    ans: 0,
  },
  {
    question: "“Mexico will pay for Trump’s border wall.",
    options: [
      "The border wall has been paid for entirely through US federal funding, partly allocated by congress and partly allocated unilaterally through a Trump executive order",
      "President Trump suggested tolls for passage into America that will go towards paying off the cost of the wall",
      "President Trump proposed a “border tax” to pay for the wall",
      "President Trump said by used the remittance money of illegal immigrants to pay for the wall",
    ],
    ans: 2,
  },
  {
    question: "Illegal crossing at the US-Mexico border are at an all-time high",
    options: [
      "Apprehensions at the US-Mexico border peaked at 1.64 million in the year 2000 and had declined to just under 400,000 in 2018.",
      "Estimates say the number of undocumented immigrants living in the U.S. range between 10.5 million and 12 million, or approximately 3.2%–3.6% of the population as of 2019.",
    ],
    ans: 1,
  },
];

function MultipleChoice() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Question text={questions[index].question} />
      <ChoiceContainer
        index={index}
        setIndex={setIndex}
        question={questions[index]}
      />
    </>
  );
}

export default MultipleChoice;
