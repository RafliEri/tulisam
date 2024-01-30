import React from "react";
import { Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Mfis from "./Routes/Mfis.jsx";
import Awalm from "./Routes/Awalm";
import Krndn from "./Routes/Kytb.jsx";
import NotFound from "./Routes/NotFound.jsx";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mfis" element={<Mfis />} />
        <Route path="/awal" element={<Awalm />} />
        <Route path="/kytb" element={<Krndn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
