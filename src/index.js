import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SongProvider from "./context/songContext";
import UserProvider from "./context/userContext";
ReactDOM.render(
  
    <UserProvider>
      <SongProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SongProvider>
    </UserProvider>
  ,
  document.getElementById("root")
);
