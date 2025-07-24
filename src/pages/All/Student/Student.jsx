import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import instance from "../../../service/AxiosOrder";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [allStudentData, setAllStudentData] = useState([]);

  const navigate = useNavigate();
  const StudentMSPage = () => {
    navigate("/home");
  };

  const saveStudent = () => {
    instance
      .post("student/save", {
        student_name: name,
        student_age: age,
        student_address: address,
        student_contact: contact,
      })
      .then((response) => {
        alert(response.data);
        getAllStudent();
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
    instance
      .get("student/getAll")
      .then((response) => {
        setAllStudentData(response.data);
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteStudent = () => {
    instance
      .delete(`student/delete/${id}`)
      .then((response) => {
        alert(response.data);
        getAllStudent();
        setId("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStudent = () => {
    instance
      .put(`student/update/${id}`, {
        student_name: name,
        student_age: age,
        student_address: address,
        student_contact: contact,
      })
      .then((response) => {
        alert(response.data);
        getAllStudent();
        setName("");
        setAge("");
        setAddress("");
        setContact("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Typography variant="h4">Student Management System</Typography>

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
            margin: "10px 0",
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

        <Box
          sx={{
            border: "4px solid green",
            padding: "20px 5px",
            margin: "10px 0",
          }}
        >
          <Typography variant="h4">Delete a student</Typography>
          <Stack direction={"column"} spacing={"10px"}>
            <TextField
              onChange={(e) => setId(e.target.value)}
              value={id}
              id="outlined-basic"
              label="Enter ID to delete"
              variant="outlined"
            />
            <Button
              onClick={deleteStudent}
              sx={{ fontSize: "18px", backgroundColor: "red" }}
              variant="contained"
            >
              Delete
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            border: "4px solid red",
            padding: "5px",
            margin: "10px 0",
          }}
        >
          <Stack direction={"column"} spacing={"10px"}>
            <Typography variant="h4">Update Student Data</Typography>
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

        <Button
          onClick={StudentMSPage}
          sx={{ fontSize: "18px" }}
          variant="contained"
        >
          Home Page
        </Button>
      </Box>
    </div>
  );
}
