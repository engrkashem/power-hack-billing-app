import { Routes, Route } from "react-router-dom";
import Billing from "./Components/Billing";
import Home from "./Components/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
