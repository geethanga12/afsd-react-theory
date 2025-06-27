// import Button from "../../common/component/Button/Button";
import TextInput from "../../common/component/TextInput/TextInput";
import TI2 from "../../common/component/TextInput/TI2";
import Card from "../../component/Card/Card";
import img from "../../assets/Geeth.JPG";
import About from "./About/About";
import SubmitForm from "./About/submitForm";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ThemeToggle from "../../component/ThemeToggle";

export default function Home() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [allStudentData, setAllStudentData] = useState([]);
  const [id, setId] = useState();

  const saveStudent = () => {
    axios
      .post(
        "https://student-api.acpt.lk/api/student/save",
        {
          student_name: name,
          student_age: age,
          student_address: address,
          student_contact: contact,
        },
        {
          headers: {
            Authorization:
              "Bearer 4311|ZNj2wGBnGXsuBbNkqDMlsJ1awlyqU4ya6TrXZvZL683db572",
          },
        }
      )
      .then((response) => {
        alert(response);
        setName("");
        setAge(0);
        setAddress("");
        setContact(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllStudent = () => {
    axios("https://student-api.acpt.lk/api/student/getAll", {
      headers: {
        Authorization:
          "Bearer 4311|ZNj2wGBnGXsuBbNkqDMlsJ1awlyqU4ya6TrXZvZL683db572",
      },
    })
      .then((response) => {
        setAllStudentData(response.data);
        console.log(allStudentData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteStudent = () => {
    axios
      .delete(`https://student-api.acpt.lk/api/student/delete/${id}`, {
        headers: {
          Authorization:
            "Bearer 4311|ZNj2wGBnGXsuBbNkqDMlsJ1awlyqU4ya6TrXZvZL683db572",
        },
      })
      .then((response) => {
        alert("Student delete successfully");
        getAllStudent();
        setId("");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStudent = () => {
    axios
      .put(
        `https://student-api.acpt.lk/api/student/update/${id}`,
        {
          student_name: name,
          student_age: age,
          student_address: address,
          student_contact: contact,
        },
        {
          headers: {
            Authorization:
              "Bearer 4311|ZNj2wGBnGXsuBbNkqDMlsJ1awlyqU4ya6TrXZvZL683db572",
          },
        }
      )
      .then((response) => {
        alert("Student Update Successfully");
        getAllStudent();
        setId("");
        setName("");
        setAge("");
        setAddress("");
        setContact("");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <ThemeToggle />
      <h1>Welcome to Home Page</h1>

      <Box sx={{ border: "4px solid blue", padding: "10px" }}>
        <Stack direction={"column"} spacing={"10px"} width={"400px"}>
          <Typography variant="h4">Save a Student</Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setAge(e.target.value)}
            value={age}
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            id="outlined-basic"
            label="Contact"
            variant="outlined"
          />
          <Button
            onClick={saveStudent}
            sx={{ fontSize: "18px" }}
            variant="contained"
          >
            Save
          </Button>
        </Stack>

        <Box
          sx={{
            border: "4px solid brown",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Typography variant="h5">Get All Student Data</Typography>
          <Button
            onClick={getAllStudent}
            sx={{ fontSize: "18px" }}
            variant="contained"
          >
            Get All
          </Button>
          {allStudentData.map((value, index) => (
            <Box
              sx={{ border: "1px solid black", margin: "5px", padding: "5px" }}
              key={index}
            >
              <Stack direction={"column"}>
                <Typography>ID: {value.id}</Typography>
                <Typography>Name: {value.student_name}</Typography>
                <Typography>Age: {value.student_age}</Typography>
                <Typography>Address: {value.student_address}</Typography>
                <Typography>Contact: {value.student_contact}</Typography>
              </Stack>
            </Box>
          ))}
        </Box>

        <Box sx={{ border: "2px solid green", padding: "5px", margin: "5px" }}>
          <Stack direction={"column"}>
            <TextField
              onChange={(e) => setId(e.target.value)}
              value={id}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button
              onClick={deleteStudent}
              sx={{ fontSize: "18px" }}
              variant="contained"
            >
              Delete
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            border: "2px solid red",
            padding: "5px",
            margin: "5px",
          }}
        >
          <Stack direction={"column"} spacing={"10px"}>
            <Typography variant="h4">Update Student</Typography>
            <TextField
              onChange={(e) => setId(e.target.value)}
              value={id}
              id="outlined-basic"
              label="Enter ID you need to update"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="outlined-basic"
              label="Enter new Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAge(e.target.value)}
              value={age}
              id="outlined-basic"
              label="Enter new Age"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              id="outlined-basic"
              label="Enter new Address"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              id="outlined-basic"
              label="Enter new Contact"
              variant="outlined"
            />
            <Button
              onClick={updateStudent}
              sx={{ fontSize: "18px" }}
              variant="contained"
            >
              Update
            </Button>
          </Stack>
        </Box>
      </Box>

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
