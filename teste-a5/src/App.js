import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes.js";
import { GlobalStyle } from "./GlobalStyle.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
