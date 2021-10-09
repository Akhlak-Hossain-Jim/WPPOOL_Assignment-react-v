import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section1 from "./Components/Section-1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <hr
          style={{
            borderTop: "solid 2px #F0C331",
            maxWidth: "90%",
            margin: "auto",
          }}
        />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <hr
          style={{
            borderTop: "solid 6px #2B8FE5",
            maxWidth: "90%",
            margin: "auto",
          }}
        />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
