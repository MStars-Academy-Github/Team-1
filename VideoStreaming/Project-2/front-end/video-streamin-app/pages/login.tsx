import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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

  return (
    <div>
      <Button className="login-button" onClick={handleOpen}>
        LOGIN HERE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <h2 className="register-section">
              Don't have an account?{" "}
              <Button className="reg-button">Register here</Button>
            </h2>
            <Button className="submit-button">LOGIN</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
