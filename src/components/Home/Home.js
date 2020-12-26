import React, { useState, useContext } from "react";
import "./Home.css";
import { UserContext } from "../../Context/userContext";
import TextField from "@material-ui/core/TextField";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import SendIcon from "@material-ui/icons/Send";

function Home() {
  const [user] = useContext(UserContext);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostMessage, setNewPostMessage] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [viewComments, setViewComments] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#32A899",
      },
      secondary: {
        main: "#31D570",
      },
    },
  });

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewPostImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = () => {
    if (newPostTitle === "" || newPostMessage === "" || newPostImage === null)
      alert("Post cannot be empty");
  };

  const toggleViewComments = () => {
    setViewComments(!viewComments);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="home">
        <div className="home__newPostContainer">
          <h2 className="home__heading">Your Thoughts ?</h2>
          <TextField
            type="text"
            value={newPostTitle}
            onChange={(e) => {
              setNewPostTitle(e.target.value);
            }}
            label="Post title"
            required
          />
          <TextField
            type="text"
            value={newPostMessage}
            onChange={(e) => setNewPostMessage(e.target.value)}
            label="What's your message?"
            className="home__postTextField"
            required
          />
          <div className="home__newPostImageContainer">
            <label for="newPostImage" className="home__newPostImage">
              <AddAPhotoIcon />
            </label>
            <input id="newPostImage" type="file" onChange={handleImageChange} />
            <p className="home__newPostImageName">{newPostImage?.name}</p>
          </div>
          <div className="home__newPostButton">
            <Button onClick={handlePostSubmit}>Post</Button>
          </div>
        </div>
        <div className="home__postContainer">
          <div className="home__postHeader">
            <div className="home__postUserDetails">
              <Avatar /> <p>Abhishek Singh</p>
            </div>
            <div className="home__postDate">1 min</div>
          </div>
          <h2 className="home__postHeading">Nothern Lights</h2>
          <p className="home__postMessage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <div className="home__postImgContainer">
            <img
              src="https://www.w3schools.com/w3images/lights.jpg"
              alt="northern lights"
            />
          </div>
          <div className="home__postResponse">
            <div className="home__postLikes">
              {/* <span style={{ color: "#00ff00" }}> */}
              <ThumbUpIcon />
              {/* </span> */}
              <span>23 Likes</span>
            </div>
            <div
              className="home__viewCommentButton"
              onClick={toggleViewComments}
            >
              <ChatIcon />
              <span>View comments</span>
            </div>
          </div>
          <div className="home__newCommentContainer">
            <Avatar src={user?.pic} />
            <div className="home__newCommentbox">
              <input
                type="text"
                placeholder="Write Your Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="home__newCommentboxInput"
              />
              <SendIcon />
            </div>
          </div>
          {viewComments ? (
            <div className="home__commentContainer">
              <div className="home__postComment">
                <Avatar />{" "}
                <p>What a post wow . very nice post. so good post!</p>
              </div>
              <div className="home__postComment">
                <Avatar />{" "}
                <p>What a post wow . very nice post. so good post!</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
