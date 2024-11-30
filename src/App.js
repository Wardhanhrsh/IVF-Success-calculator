import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import InputScreen from "./Components/InputScreen";
import ResultScreen from "./Components/ResultScreen";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<InputScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
