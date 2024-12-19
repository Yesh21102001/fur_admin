import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstname = data.get("firstname").trim();
    const lastname = data.get("lastname").trim();
    const email = data.get("email").trim();
    const password = data.get("password").trim();
  
    clearErrors();
  
    const validationErrors = {};
    if (!firstname) validationErrors.firstname = true;
    if (!lastname) validationErrors.lastname = true;
    if (!email) validationErrors.email = true;
    if (!password) validationErrors.password = true;
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      console.log("Sending data:", { firstname, lastname, email, password });
  
      const response = await fetch("http://localhost:3000/api/signup/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });
  
      const result = await response.json();
      console.log("Response received:", result);
  
      if (response.ok) {
        setSuccessMessage(result.message);
        setErrorMessage("");
      } else {
        setErrorMessage(result.message || "Signup failed. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  const clearErrors = () => {
    setErrors({});
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <Grid
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container component="main">
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#493628" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#493628" }}>
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    error={errors.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    error={errors.lastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={errors.password}
                  />
                </Grid>
              </Grid>
              {errorMessage && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              {successMessage && (
                <Typography color="success" sx={{ mt: 2 }}>
                  {successMessage}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#493628",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "18px",
                  "&:hover": {
                    backgroundColor: "#362a20",
                  },
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Typography>
                    Already have an account?{" "}
                    <Link
                      to="/"
                      variant="body2"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        textDecoration: "none",
                      }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignUp;
