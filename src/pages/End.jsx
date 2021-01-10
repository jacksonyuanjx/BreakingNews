import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledText = styled.h1`
    text-align: center;
    color: white;
`;

const ResultsCircle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #446FDD;
    border-radius: 50%;
    box-shadow: 10px 10px 5px #21366D;
    margin: 5rem auto 5rem auto;
`;

const End = () => {
    return (
        <>
            <div style={{ backgroundColor: "#7EE141", margin: "0 auto", width: "100%", height: "100%", position: "relative" }}>
                <StyledText style={{ fontSize: "2.25rem", paddingTop: "10rem" }}>Congratulations!</StyledText>
                <StyledText style={{ fontSize: "1rem", paddingTop: "1.25rem", fontWeight: "normal" }}>You have successfully completed the quiz.</StyledText>
                <ResultsCircle style={{ position: "relative" }}>
                    <StyledText style={{ fontSize: "2rem", margin: "25% 0 0 4rem", position: "absolute" }}>1/5</StyledText>
                    <StyledText style={{ fontSize: "1rem", margin: "50% 0 0 1rem", position: "absolute", fontWeight: "normal" }}>Stories Completed</StyledText>
                </ResultsCircle>
                <StyledText style={{ fontSize: "1rem", paddingTop: "1.25rem", width: "75%", margin: "0 auto" }}>Keep working on your opinion making skills and learn more about what’s really going on in the world.</StyledText>
                <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
                    <Button style={{
                        color: "#4EC007",
                        backgroundColor: "white",
                        borderRadius: "60px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        marginTop: "5rem",
                        left: "35%",
                        fontWeight: "bold",
                    }}>
                        Read More
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default End;
