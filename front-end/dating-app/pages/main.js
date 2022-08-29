import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const pages = ["HOME", "ABOUT", "FAQ"];
const settings = ["Profile", "Settings", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="mainContainer">
      <div className="top-section">
        <AppBar position="static" className="app-section">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Diversity2Icon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                className="text-white"
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/main"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".0.5rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Dating App
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOfsa
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Chuluunsukh" src="./public/favicon.ico" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <section className="img-slider">
          <Carousel fade>
            <Carousel.Item>
              <section className="card-section">
                <div className="kado-badi">
                  <Card
                    style={{
                      width: "296px",
                      height: "395px",
                      borderRadius: "10%",
                    }}
                    className="card-bud"
                  >
                    <Card.Img
                      variant="center"
                      src="/images/Megan.jpg"
                      className="card-image"
                    />
                    <Card.Body className="information-section">
                      <Card.Title>Hello, dear!</Card.Title>
                      <Card.Text>
                        Name : Jessica <br></br>
                        Age: 26 <br></br>Interest: reading books <br></br>
                        Seeking: handsome guy
                      </Card.Text>
                      <Button className="like-button">Like</Button>
                      <Button className="love-button">Love</Button>
                      <Button className="nope-button">Nope</Button>
                    </Card.Body>
                  </Card>
                </div>
              </section>
            </Carousel.Item>
            <Carousel.Item>
              <section className="card-section">
                <div className="kado-badi">
                  <Card
                    style={{
                      width: "296px",
                      height: "395px",
                      borderRadius: "10%",
                    }}
                    className="card-bud"
                  >
                    <Card.Img
                      variant="center"
                      src="/images/03.jpg"
                      className="card-image"
                    />
                    <Card.Body className="information-section">
                      <Card.Title>You are mine</Card.Title>
                      <Card.Text>
                        Name : Moneca <br></br>
                        Age: 24 <br></br>Interest: dance, singing <br></br>
                        Seeking: parthner for dancing
                      </Card.Text>
                      <Button className="like-button">Like</Button>
                      <Button className="love-button">Love</Button>
                      <Button className="nope-button">Nope</Button>
                    </Card.Body>
                  </Card>
                </div>
              </section>
            </Carousel.Item>
            <Carousel.Item>
              <section className="card-section">
                <div className="kado-badi">
                  <Card
                    style={{
                      width: "296px",
                      height: "395px",
                      borderRadius: "10%",
                    }}
                    className="card-bud"
                  >
                    <Card.Img
                      variant="center"
                      src="/images/01.jpg"
                      className="card-image"
                    />
                    <Card.Body className="information-section">
                      <Card.Title>Should we become friends?</Card.Title>
                      <Card.Text>
                        Name : Albania <br></br>
                        Age: 27 <br></br>Interest: Play golf <br></br>
                        Seeking: Let's play together
                      </Card.Text>
                      <Button className="like-button">Like</Button>
                      <Button className="love-button">Love</Button>
                      <Button className="nope-button">Nope</Button>
                    </Card.Body>
                  </Card>
                </div>
              </section>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
