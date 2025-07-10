import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MuiRegisterPage() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function validateUserName(e) {
    setUserName(e.target.value);
  }

  function validateEmail(e) {
    setEmail(e.target.value);
  }

  function validatePassword(e) {
    setPassword(e.target.value);
  }

  // Register Button
  const handleRegisterClick2 = () => {
    axios
      .post("https://student-api.acpt.lk/api/register", {
        name: userName,
        email: email,
        password: password,
      })
      .then((response) => {
        alert(response.data.message);
        setUserName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error response:", error.response.data);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          padding: 2,
          boxShadow: 2,
          borderRadius: 5,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ color: "Blue" }}>
            FaceBook
          </Typography>
        </Box>

        {/* Text Inputs */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "45ch",
              display: "flex",
              flexDirection: "column",
              rowGap: "45ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic-name"
            label="Enter your username"
            variant="outlined"
            value={userName}
            onChange={validateUserName}
          />
          <TextField
            id="outlined-basic-email"
            label="Enter your email address"
            variant="outlined"
            value={email}
            onChange={validateEmail}
          />
          <TextField
            id="outlined-basic-password"
            label="Enter your password"
            variant="outlined"
            value={password}
            onChange={validatePassword}
            type="password"
          />
        </Box>

        {/* Button */}
        <Stack spacing={2} direction="column">
          <Button
            sx={{ px: 10, py: 1 }}
            variant="contained"
            onClick={handleRegisterClick2}
          >
            Register
          </Button>

          <Link to={"/login"}>
            <Button sx={{ px: 12, py: 1 }} variant="contained">
              Log In
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
