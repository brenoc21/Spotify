import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SongProvider from "./context/songContext";
ReactDOM.render(
  <SongProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SongProvider>,
  document.getElementById("root")
);
