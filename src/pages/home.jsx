import React from "react";
import Header from "../components/home/Header";
import CardSection from "../components/home/CardSection";

function Home() {
  return (
    <>
      <Header></Header>
      <CardSection></CardSection>
      <div style={{ width: "100%", height: "5%", backgroundColor: "black", display: "flex", bottom: 0, }} />
    </>
  );
}

export default Home;
