import Home from "../pages/Home/Home";
import "./App.css";
import Mui from "../pages/Home/MUI/Mui";
import MuiLoginPage from "../pages/Home/MuiLogInRegister/MuiLoginPage";
import MuiRegisterPage from "../pages/Home/MuiLogInRegister/MuiRegisterPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashBoard from "../pages/Home/MUI/DashBoard";
import { useEffect, useState } from "react";

function App() {
  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("afsd-key");

    if (token) {
      setLogIn(true);
    } else {
      setLogIn(false);
    }
  }, []);

  return (
    <div>
      {logIn ? (
        <DashBoard />
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to={"/login"} />}></Route>
          <Route path="/login" element={<MuiLoginPage />}></Route>
          <Route path="/register" element={<MuiRegisterPage />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;

// My Router Code
// <Router>
//   <Routes>
//     <Route path="/" element={<MuiLoginPage />} />
//     <Route path="/register" element={<MuiRegisterPage />} />
//   </Routes>
// </Router>
// AFSD Router Code
