import React from "react";
import styled from "styled-components";

import ReactHtmlParser from "react-html-parser";

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
    font-size: 1.1rem;
`;

const Summary = (props) => {
    return (
        <>
            <StyledImg src={props.imgURL} />
            <StyledP>{ReactHtmlParser(props.summary)}</StyledP>
        </>
    );
};

export default Summary;
