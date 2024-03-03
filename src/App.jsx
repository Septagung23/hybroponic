import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import ParamBox from "./components/ParamBox";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ParamBox />
    </>
  );
}

export default App;
