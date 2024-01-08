import React from "react";
import { Route } from "react-router-dom";
import Home from "./Routes/Home";
import Mfis from "./Routes/Mfis";
import Awalm from "./Routes/Awalm";
import NotFound from "./Routes/NotFound";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mfis" element={<Mfis />} />
        <Route path="/awal" element={<Awalm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
