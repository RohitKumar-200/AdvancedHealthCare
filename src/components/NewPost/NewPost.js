import React, { useState, useContext } from "react";
import "./NewPost.css";
import { UserContext } from "../../Context/userContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button } from "@material-ui/core";
import { storage, db } from "../../firebase";
import firebase from "firebase";

function NewPost() {
  const [user] = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

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
      setImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = () => {
    if (title === "" || message === "" || image === null) {
      alert("Post cannot be empty");
      return;
    }

    const imageName = Math.floor(Math.random() * 1000000) + image.name;
    const uploadTask = storage.ref(`images/${imageName}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((imgUrl) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              authorEmail: user.email,
              authorName: user.name,
              authorPic: user.pic,
              title,
              message,
              imgUrl,
              likes: [],
              comments: [],
            });

            setProgress(0);
            setTitle("");
            setMessage("");
            setImage(null);
          });
      }
    );
  };

  return (
    <>
      {user ? (
        <ThemeProvider theme={theme}>
          <div className="newPost">
            <div className="newPost__Container">
              <h2 className="newPost__heading">Your Thoughts ?</h2>
              <TextField
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                label="Post title"
                required
              />
              <TextField
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                label="What's your message?"
                className="home__postTextField"
                required
              />
              <div className="newPost__ImageContainer">
                <label for="image" className="newPost__Image">
                  <AddAPhotoIcon />
                </label>
                <input id="image" type="file" onChange={handleImageChange} />

                {progress > 0 ? (
                  <progress
                    value={progress}
                    max="100"
                    className="newPost__progress"
                  />
                ) : (
                  <p className="newPost__ImageName">{image?.name}</p>
                )}
              </div>
              <div className="newPost__Button">
                <Button onClick={handlePostSubmit}>Post</Button>
              </div>
            </div>
          </div>
        </ThemeProvider>
      ) : (
        ""
      )}
    </>
  );
}

export default NewPost;
