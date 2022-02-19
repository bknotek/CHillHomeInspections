import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

import Header from "./Components/Header";

import Intro from "./Components/Intro";

import About from "./Components/About";

import Services from "./Components/Services";

import ReportExample from "./Components/ReportExample";

import Contact from "./Components/Contact";

import Footer from "./Components/Footer";

function App() {
  const TopButton = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    color: #f0653a;
    z-index: 1;
    cursor: pointer;
    font-weight: bold;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0));
  `;

  return (
    <div className="App">
      <TopButton>
        {/* <Link activeClass="active" to="intro" spy={true} smooth={true}>
          TOP
        </Link> */}
      </TopButton>
      <Header />
      <Intro />
      <About />
      <Services />
      <ReportExample />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
