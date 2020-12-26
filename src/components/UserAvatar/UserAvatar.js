import React, { useState, useContext } from "react";
import "./UserAvatar.css";
import { UserContext } from "../../Context/userContext";
import { Avatar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

function UserAvatar() {
  const [user] = useContext(UserContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedItem) => {
    setAnchorEl(null);
    switch (selectedItem) {
      case "profile":
        history.push("profile");
        break;
      case "logout":
        localStorage.removeItem("ahc_userDetails");
        history.push("login");
        break;
      default:
        break;
    }
  };

  return (
    <div className="userAvatar">
      <Avatar
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        src={user?.pic}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom" }}
        transformOrigin={{ vertical: "top" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose("profile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("logout");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserAvatar;
