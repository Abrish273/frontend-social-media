import styled from "@emotion/styled";
import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import PetsIcon from "@mui/icons-material/Pets";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgoundColor: "white",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  /*[theme.breakpoints.up("sm")]: {
    display: "flex",
  },*/
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  /*[theme.breakpoints.up("sm")]: {
    display: "none",
  },*/
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          New Social
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase placeholder="Search..." />
        </Searchbar>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.app.goo.gl/NYd5EuSJa1YgerQ97"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.app.goo.gl/NYd5EuSJa1YgerQ97"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Abreham T.</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
