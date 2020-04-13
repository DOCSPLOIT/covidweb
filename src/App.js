import React from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ViewportProvider } from "./Components/Extras/ViewportProvider";
import Router from "./Components/Router";

const App = () => {
  return (
    <ViewportProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ViewportProvider>
  );
};

export default App;
