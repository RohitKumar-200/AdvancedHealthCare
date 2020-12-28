import React, { useState } from "react";
import "./Admin.css";
import AdminBloodDonation from "../AdminBloodDonation/AdminBloodDonation";
import AdminPosts from "../AdminPosts/AdminPosts";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [headerOption, setHeaderOption] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === "ahc" && password === "test123") {
      setIsAdmin(true);
    } else {
      alert("Username / Password incorrect");
    }
  };

  return (
    <div className="admin">
      {isAdmin ? (
        <div className="admin__pannel">
          <div className="admin__header">
            <div
              className="admin__headerLeft"
              onClick={(e) => setHeaderOption(1)}
            >
              <span>Posts</span>
            </div>
            <div
              className="admin__headerRight"
              onClick={(e) => setHeaderOption(2)}
            >
              <span>Blood donations</span>
            </div>
          </div>
          <div className="admin__body">
            {headerOption === 1 ? <AdminPosts /> : <AdminBloodDonation />}
          </div>
        </div>
      ) : (
        <div className="admin__login">
          <div className="admin__loginContainer">
            <h2 className="admin__loginHeading">Login to admin pannel</h2>
            <form onSubmit={handleSignIn} className="admin__loginForm">
              <TextField
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                variant="outlined"
                required
              />
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined"
                required
              />
              <Button type="submit" onClick={handleSignIn}>
                Log In
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
