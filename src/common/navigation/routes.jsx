import Student from "../../pages/All/Student/Student";
import Home from "../../pages/All/Home";
import MuiRegisterPage from "../../pages/All/MuiLogInRegister/MuiRegisterPage";
import MuiLoginPage from "../../pages/All/MuiLogInRegister/MuiLoginPage";
import Mui from "../../pages/All/MUI/Mui";
import DashBoard from "../../pages/All/MUI/DashBoard";

export const routes = [
  {
    path: "/studentMS",
    element: <Student />,
    name: "Student",
  },
  {
    path: "/home",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/register",
    element: <MuiRegisterPage></MuiRegisterPage>,
    name: "Register",
  },
  {
    path: "/login",
    element: <MuiLoginPage></MuiLoginPage>,
    name: "Login",
  },
  {
    path: "/mui",
    element: <Mui></Mui>,
    name: "Mui",
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    name: "Dashboard",
  },
];
