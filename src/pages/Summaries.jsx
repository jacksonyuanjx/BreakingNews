import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List, Card } from "antd";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import SummariesHeader from "../components/summaries/Header";
import Summary from "../components/summaries/Summary";
// import data from "../components/summaries/data";
import firebase from "../components/firestore/Firestore";

const ListHeader = styled.div`
  font-size: 1.5rem;
  text-align: left;
  padding: 1.25rem;
`;

const StyledDiv = styled.div`
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
  margin: 5px;
  font-size: 1.4rem;
  color: black;

`;

//const cardColors = ["#9d4edd", "#9a8c98"];

const db = firebase.firestore();

const Summaries = () => {
  const [clicked, setClicked] = useState(false);
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await db.collection("summaries").get();
      let docs = [];
      res.forEach((doc) => {
        docs.push(doc.data());
      });
      setSummaries(docs);
    };
    fetchData();
  }, []);

  const title = "Mexico-US Border and the Transition to a New Administration";
  return !clicked ? (
    <>
      <SummariesHeader region="United States" title={title}/>
      <List
        //header={<ListHeader>Summaries</ListHeader>}
        dataSource={summaries}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: "#ffffff",//index % 2 === 0 ? cardColors[0] : cardColors[1],
                margin: "1rem",
                borderRadius: "7.5px",
                border: "1px solid #b19cd9"
              }}
            >
              <strong><StyledDiv>Article {index + 1} Summary</StyledDiv></strong>
              <Summary imgURL={item.imgURL} summary={item.summary} />
            </Card>
          </List.Item>
        )}
      />
      <Button
        variant="contained"
        style={{ float: "right", margin: "1.1rem", backgroundColor: "#9d4edd", color: "#ffffff"}}
        onClick={() => {
          setClicked(true);
        }}
      >
        Quiz
      </Button>

      <div style={{ width: "100%", height: "50px", backgroundColor: "black", display: "flex" }} />
    </>
  ) : (
    <Redirect to="/multipleChoice"></Redirect>
  );
};

export default Summaries;
