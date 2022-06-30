import { Routes, Route } from "react-router-dom";
import Billing from "./Components/Billing";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [isUser, setIsUser] = useState(false);
  return (
    <div className="">
      <NavBar
        isUser={isUser}
      ></NavBar>
      <Routes>
        <Route path="/" element={<Home
          setIsUser={setIsUser}
        />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
