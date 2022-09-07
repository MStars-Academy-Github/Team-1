import Button from "@material-ui/core/Button";
import { IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import type { NextPage } from "next";
import { Toolbar } from "@material-ui/core";
import BasicModal from "./login";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  const [checker, setChecker] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setChecker(true);
    } else {
      setChecker(false);
    }
  }, [checker]);
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="nav-bar">
            <Toolbar>
              <IconButton
                className="menu-button"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                className="head-line"
              >
                Enjoy with us
              </Typography>
              <Button className="contact-button">contact us</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div>
        <div className="background-area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>{checker ? <HomePage /> : <BasicModal />}</div>
    </div>
  );
};

export default Home;
