import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import instance from "../../../service/AxiosOrder";

export default function MuiLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Log In Button
  const handleRegisterClick3 = () => {
    //API with axios
    instance.post("login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.token);

        // Store token in localStorage
        localStorage.setItem("afsd-key", response.data.token);

        // Reload page or redirect
        window.location.reload();
      })
      .catch(function (error) {
        // Check if it's an authentication error (like wrong email/password)
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 400)
        ) {
          alert("Invalid email or password!");
        } else {
          console.error("Login failed:", error.response?.data || error.message);
          alert("Cannot find an account in this email. Please try again.");
        }

        // Clear input fields
        setEmail("");
        setPassword("");
      });
  };

  function emailValidate(event) {
    setEmail(event.target.value);
  }

  function passwordValidate(event) {
    setPassword(event.target.value);
  }

  const navigate = useNavigate(); // useNavigate Hook

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to register page
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
          <Typography
            variant="h4"
            sx={{ color: "#1877F2", fontWeight: "bold" }}
          >
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
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
            onChange={emailValidate}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            onChange={passwordValidate}
            value={password}
          />
        </Box>

        {/* Button */}
        <Stack spacing={2} direction="column">
          <Button
            sx={{ px: 10, py: 1 }}
            variant="contained"
            onClick={handleRegisterClick3}
          >
            Log In
          </Button>

          <Button
            sx={{ px: 10, py: 1 }}
            variant="contained"
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
