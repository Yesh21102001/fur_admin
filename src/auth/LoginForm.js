import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm({ onCancel }) {
  const [OTP, setOTP] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [verificationSent, setVerificationSent] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Verification code submitted:", OTP, Password, confirmPassword);
    setPassword("");
    setOTP("");
    setconfirmPassword("");
  };

  const handleVerificationSend = () => {
    console.log("Sending verification code...");
    setTimeout(() => {
      setVerificationSent(true);
    }, 1000);
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          textAlign: "center",
        }}
        style={{ marginBottom: "5px", fontWeight: "bold", color: "#493628", fontFamily: "Lexend, serif" }}
      >
        {verificationSent ? "Enter Verification Code" : "Forgot Password"}
      </Typography>
      {error && (
        <Typography
          variant="body2"
          color="error"
          sx={{
            textAlign: "center",
            marginTop: 1,
          }}
        >
          {error}
        </Typography>
      )}
      <form
        onSubmit={verificationSent ? handleSubmit : handleVerificationSend}
        sx={{ mt: 1, width: "100%" }}
      >
        {!verificationSent && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              style={{
                backgroundColor: "#493628",
                color: "white",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Lexend, serif"
              }}
              fullWidth
              onClick={handleVerificationSend}
            >
              Send Verification
            </Button>
          </>
        )}
        {verificationSent && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="OTP"
              label="OTP"
              name="OTP"
              autoComplete="off"
              autoFocus
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              label="Password"
              name="Password"
              type="password"
              autoComplete="off"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="confirmPassword"
              name="confirmPasswordd"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#493628", fontSize: "16px", fontWeight: "600", fontFamily: "Lexend, serif" }}
              >
                Submit
              </Button>
            </div>
          </>
        )}

        <Grid container justifyContent="center">
          <Grid item>
            <Link
              onClick={onCancel}
              variant="body2"
              style={{ cursor: "pointer", textDecoration: "none", fontFamily: "Lexend, serif" }}
            >
              Back to Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
const defaultTheme = createTheme();

const LoginSide = () => {
  const [errors, setErrors] = React.useState({ email: false, password: false });
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    setErrors({ email: false, password: false });

    if (!email || !email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      return;
    }

    if (!password || !password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Login failed!");
        return;
      }

      const responseData = await response.json();
      console.log("Login successful:", responseData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CssBaseline />
          <Grid
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!showForgotPassword ? (
              <>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ mb: 2, fontWeight: "bold", color: "#493628", fontFamily: "Lexend, serif" }}
                >
                  Login
                </Typography>
                <Grid
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1, width: "100%" }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.email}
                    sx={{ mb: 2, fontFamily: "Lexend, serif" }}
                  />
                  {errors.email && (
                    <InputLabel htmlFor="email" error sx={{ fontFamily: "Lexend, serif" }}>
                      Email is required
                    </InputLabel>
                  )}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={errors.password}
                    sx={{ mb: 2, fontFamily: "Lexend, serif" }}
                  />
                  {errors.password && (
                    <InputLabel htmlFor="password" error sx={{ fontFamily: "Lexend, serif" }}>
                      Password is required
                    </InputLabel>
                  )}
                  <Grid container justifyContent="left">
                    <Grid item>
                      <Link
                        onClick={toggleForgotPassword}
                        variant="body2"
                        style={{ cursor: "pointer", textDecoration: "none", fontFamily: "Lexend, serif" }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: "#493628",
                      marginTop: "20px",
                      fontSize: "16px",
                      fontFamily: "Lexend, serif",
                      fontWeight: "600",
                      '&:hover': {
                        backgroundColor: "#AB886D",
                      }
                    }}
                  >
                    Login
                  </Button>
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography sx={{ fontFamily: "Lexend, serif" }}>
                      Don't have an Account?{" "}
                      <Link onClick={handleSignUp} style={{ cursor: "pointer", textDecoration: "none" }}>
                        SignUp
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </>
            ) : (
              <ForgotPasswordForm onCancel={toggleForgotPassword} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginSide;