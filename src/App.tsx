import React from "react";

import { CssBaseline } from "@material-ui/core";

import Header from "./Components/Header";
import HomePage from "./Views/Home/index";
import Footer from "./Components/Footer/index";
import TimeLine from "./Components/Timeline/index";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
        <TimeLine />
      </div>
    </>
  );
}

export default App;
