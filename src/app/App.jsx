import Home from "../pages/All/Home";
import "./App.css";
import Mui from "../pages/All/MUI/Mui";
import MuiLoginPage from "../pages/All/MuiLogInRegister/MuiLoginPage";
import MuiRegisterPage from "../pages/All/MuiLogInRegister/MuiRegisterPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashBoard from "../pages/All/MUI/DashBoard";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Student from "../pages/All/Student/Student";

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
    <ThemeProvider>
      <div>
        {logIn ? (
          <DashBoard />
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to={"/login"} />}></Route>
            <Route path="/login" element={<MuiLoginPage />}></Route>
            <Route path="/register" element={<MuiRegisterPage />}></Route>
            <Route path="/studentMS" element={<Student />}></Route>
          </Routes>
        )}
      </div>
    </ThemeProvider>
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
