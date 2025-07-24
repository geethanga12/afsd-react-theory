// import Button from "../../common/component/Button/Button";
import TextInput from "../../common/component/TextInput/TextInput";
import TI2 from "../../common/component/TextInput/TI2";
import Card from "../../component/Card/Card";
import img from "../../assets/Geeth.JPG";
import About from "./About/About";
import SubmitForm from "./About/submitForm";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import ThemeToggle from "../../component/ThemeToggle";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const StudentMSPageNav = () => {
    navigate("/studentMS");
  };

  return (
    <div>
      <h1>Home</h1>
      <ThemeToggle />
      <h1>Student Management System</h1>

      <Button
        onClick={StudentMSPageNav}
        sx={{ fontSize: "18px", margin: "20px 0" }}
        variant="contained"
      >
        Student Management System Page
      </Button>

      <Box>
        {/* <Button name={'ADD Button'} bgColor={'blue'} onClick={() => console.log('Hello Geeth')}></Button>
      <Button name={'Update Button'} bgColor={'green'} onClick={() => console.log('Hello Prasadith')}></Button>
      <Button name={'Update Button'} bgColor={'black'} onClick={() => console.log('Hi Dissa....')}></Button> <br /> <br /> */}

        <TextInput pH={"Enter Name"} type={"text"}></TextInput>
        <TextInput pH={"Enter Age"} type={"number"}></TextInput>
        <TextInput pH={"Enter Email"} type={"text"}></TextInput>

        <TI2
          pH={"Enter Email"}
          type={"text"}
          onChange={(e) => console.log(e.target.value)}
        ></TI2>

        <Card
          title={"Geethanga Dissanayake"}
          description={"Lives in Kurunegala"}
          image={img}
        >
          {/* <div className="btn-cn">
          <Button
            name={"Subscribe"}
            bgColor={"red"}
            onClick={() => console.log("Click me")}
          ></Button>
          <Button name={"Log in"} bgColor={"blue"}></Button>
        </div> */}
        </Card>

        <About></About>

        <SubmitForm></SubmitForm>
      </Box>
    </div>
  );
}
