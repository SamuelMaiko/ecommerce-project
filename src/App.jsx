import React from "react";
import EntryApp from "./EntryApp";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  
  return (
    <AppContext>
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar
        autoClose="800"
      />
      <BrowserRouter>
        <EntryApp />
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
