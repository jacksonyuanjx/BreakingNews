import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem 1rem 0rem 1rem;
`;

const StyledP = styled.p`
    padding: 1rem 1rem 1.25rem 1rem;
    text-align: left;
    font-size: 1.2rem;
`;

const Story = (props) => {
    return (
        <>
            <StyledImg src={props.imgURL} />
            <StyledP>{props.summary}</StyledP>
        </>
    );
};

export default Story;
