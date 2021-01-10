import React from "react";
import styled from "styled-components";


const StyledHeader = styled.div`
    position: sticky;
    width: 100%;
    text-align: left;
    padding-bottom: 1rem;
    border-bottom: 2px solid gray;
    margin-bottom: 1.1rem;
`;

const StyledP = styled.p`
    padding-top: 1.20rem;
    padding-left: 1.25rem;
    font-size: 1.25rem;
    color: blue;
`;

const StyledH1 = styled.h1`
    padding-top: 1.1rem;
    padding-left: 1.25rem;
    font-size: 2rem;
`;

const Header = (props) => {
    return (
        <StyledHeader>
            <StyledP>
                {props.region}
                <p style={{ color: "black" }}>Jan 9, 2021</p>
            </StyledP>
            <StyledH1>{props.title}</StyledH1>
        </StyledHeader>
    );
};

export default Header;
