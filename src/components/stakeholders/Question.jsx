import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
`;

const TheQuestion = styled.div`
    font-size: 16px;
    letter-spacing: 1px;
`;

function Question(props) {
    return (
        <QuestionContainer>
            <TheQuestion>
                <br />
                <div style={{ fontSize: 24, marginBottom: 10 }}>
                    {props.question}
                </div>
                <br />
            </TheQuestion>
        </QuestionContainer>
    );
}

export default Question;
