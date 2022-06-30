import { Routes, Route } from "react-router-dom";
import Billing from "./Components/Billing";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
