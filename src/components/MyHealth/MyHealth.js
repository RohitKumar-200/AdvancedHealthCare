import React, { useState } from "react";
import "./MyHealth.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

function MyHealth() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    history.push(link);
  };

  return (
    <div className="myHealth">
      <div
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        My Health
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose("smartBMI");
          }}
        >
          Smart BMI
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("diseaseDetection");
          }}
        >
          Disease Detection
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("myEmotion");
          }}
        >
          Know Your Emotion
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MyHealth;
