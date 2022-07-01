import { Routes, Route } from "react-router-dom";
import Billing from "./Components/Billing";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Components/RequireAuth";

function App() {

  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/billing" element={
          <RequireAuth>
            <Billing />
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
