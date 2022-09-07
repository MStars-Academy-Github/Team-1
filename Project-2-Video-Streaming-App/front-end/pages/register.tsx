import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField } from "@material-ui/core";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="register-container" fixed>
        <h1 className="register-header">Register here</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue="Enter your name"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue="Enter your name"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue="Enter your email"
            />
            <TextField
              id="outlined-number"
              label="Phone Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Confirm Password"
              type="password"
              variant="filled"
            />
            <TextField
              id="outlined-number"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
