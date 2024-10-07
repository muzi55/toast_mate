import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToastContainer from "./components/ToastContainer";
import Toast from "./components/Toast";

function App() {
  return (
    <>
      <h1>React - Toast Mate</h1>

      <button>Toast Popup</button>
      <Toast type="error" message="watch me !" />
      <Toast type="success" message="watch me !" />
      <ToastContainer />
    </>
  );
}

export default App;
