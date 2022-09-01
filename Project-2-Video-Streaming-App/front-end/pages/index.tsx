import type { NextPage } from "next";
<<<<<<< HEAD:Project-2-Video-Streaming-App/front-end/pages/index.tsx
=======
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BasicModal from "./login";
>>>>>>> dea4729 (feat: index added):VideoStreaming/Project-2/front-end/video-streamin-app/pages/index.tsx

const Home: NextPage = () => {
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
              <Button className="signUp-button" variant="contained">
                Sign in
              </Button>
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
      {/* login form section head */}

      <BasicModal />

      {/* login form section end */}
    </div>
  );
};

export default Home;
