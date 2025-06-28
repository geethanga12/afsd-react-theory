import Student from "../../pages/Student/Student";
import Home from "../../pages/Home/Home";
import MuiRegisterPage from "../../pages/Home/MuiLogInRegister/MuiRegisterPage";
import MuiLoginPage from "../../pages/Home/MuiLogInRegister/MuiLoginPage";
import Mui from "../../pages/Home/MUI/Mui";

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
];
