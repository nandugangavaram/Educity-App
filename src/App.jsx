import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subTitle="Our Program" />
        <Programs />
      </div>
    </>
  );
}

export default App;
