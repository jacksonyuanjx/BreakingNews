import React from "react";
import styled from "styled-components";
import { List, Card } from "antd";

import StoriesHeader from "../components/stories/Header";
import Story from "../components/stories/Story";

import data from "../components/stories/data";

const ListHeader = styled.div`
  font-size: 1.5rem;
  text-align: left;
  padding: 1.25rem;
`;

const StyledDiv = styled.div`
  border-bottom: 1px solid black;
  text-align: left;
  padding: 5px;
  margin: 15px;
  font-size: 1.25rem;
`;

const cardColors = ["#c9ada7", "#9a8c98"];

const Stories = () => {
  const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  return (
    <>
      <StoriesHeader region="Canada" title={title} />
      <List
        header={<ListHeader>Summaries</ListHeader>}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: index % 2 === 0 ? cardColors[0] : cardColors[1],
                margin: "1rem",
                borderRadius: "7.5px",
              }}
            >
              <StyledDiv>Article {index + 1} Summary</StyledDiv>
              <Story imgURL={item.imgURL} summary={item.summary} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default Stories;
