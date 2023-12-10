import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import { Mail, Notifications } from "@mui/icons-material";

// Styled components with comments
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// Main component with improved comments
const Navbar = () => {
  // This comment explains the state variable and its purpose
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ background: "#A569BD" }}>
      <StyledToolbar>
        {/* Comment describing the title and its responsive behavior */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          XBook
        </Typography>

        {/* Comment explaining the menu icon behavior */}
        <FlutterDashIcon
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setOpen(true)}
        />

        {/* Search bar component */}
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        {/* Icons displayed only on larger screens */}
        <Icons>
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>

          {/* Avatar component with click event handler */}
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://pxbar.com/wp-content/uploads/2023/08/insta-dp-for-boys.jpg"
          />
        </Icons>

        {/* User box displayed only on smaller screens */}
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://pxbar.com/wp-content/uploads/2023/08/insta-dp-for-boys.jpg"
          />
          <Typography variant="span">Symoon</Typography>
        </UserBox>
      </StyledToolbar>

      {/* Menu component with configuration options */}
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
