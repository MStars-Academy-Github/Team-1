import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { Link, TextField } from "@mui/material";
import { Router, useRouter } from "next/router";
import axios from "axios";
import e from "express";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loginHandler = async (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    const data = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    axios
      .post("http://localhost:4000/v1/auth/login", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Button className="liquid-login-button" onClick={handleOpen}>
        <span className="liq-span"></span>
        <div className="liq-but">LOGIN HERE</div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="login-form-body">
          <form onSubmit={loginHandler}>
            <div className="register-form">
              <h1 id="parent-modal-title">Watch & enjoy</h1>
              <span className="register-second">Enter you email</span>
              <TextField
                required
                id="filled-required"
                label="Required"
                style={{
                  height: "100px",
                  outline: "none",
                }}
                placeholder="Enter your email"
                variant="filled"
              />
              <span className="register-second">Enter you password</span>
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="Enter your password"
                variant="filled"
              />
              <div className="register-section">
                <h5>Don't have an account?</h5>
                <a href="/register" className="register-but">
                  <Button className="reg-button">Register here</Button>
                </a>
              </div>
              <Button className="submit-button" type="submit">
                LOGIN
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
