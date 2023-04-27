import React, { useState } from "react";
import kavyaTube from "../../Img/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Search,
  Input,
  Button,
  Buttons,
  User,
  Logo,
  Img,
} from "./style";
import { useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import Upload from "../Upload/Upload";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { API_URL } from "../../Global";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenu = async () => {
    try {
      await axios.get(`${API_URL}/auth/signout`);
      localStorage.removeItem("persist:root");
      navigate("/signin");
      window.location.reload();
    } catch (err) {}
    setAnchorElUser(null);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={kavyaTube} alt='youTube' />
              youTube
            </Logo>
          </Link>

          <Search>
            <Input
              placeholder='Search'
              type='search'
              onChange={(e) => setQ(e.target.value)}
            />{" "}
            <Buttons>
              <SearchOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/search?q=${q}`)}
              />
            </Buttons>
          </Search>
          {currentUser?.user ? (
            <User>
              <VideoCallOutlinedIcon
                onClick={() => setOpen(true)}
                sx={{ cursor: "pointer" }}
              />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Log out'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={`${currentUser?.user?.img}`}
                      sx={{ bgcolor: deepPurple[500] }}>
                      {currentUser?.user?.name?.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                  {currentUser?.user?.name}
                </span>
                <Menu
                  sx={{ mt: "45px" }}
                  id='menu-appbar'
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
                  onClose={handleCloseUser}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </User>
          ) : (
            <Link to='signin' style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
