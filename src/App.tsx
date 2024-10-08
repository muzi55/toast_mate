import "./App.css";
import ToastContainer from "./components/ToastContainer";
import { addToast } from "./components/toastManager";

function App() {
  return (
    <>
      <h1>React - Toast Mate</h1>
      <button onClick={() => addToast("해피해피니스")}>Toast Popup</button>
      <button
        onClick={() =>
          addToast({
            type: "error",
            message: "error message",
            duration: 5000,
          })
        }>
        Toast Popup
      </button>
      <ToastContainer />
    </>
  );
}

export default App;
