import React, { useContext, useState, useEffect } from "react";
import "./Post.css";
import { UserContext } from "../../Context/userContext";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import SendIcon from "@material-ui/icons/Send";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

function Post({
  id,
  authorName,
  authorPic,
  authorEmail,
  title,
  message,
  imgUrl,
  likes,
  comments,
  timestamp,
}) {
  const [user] = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [viewComments, setViewComments] = useState(false);
  const [postLiked, setPostLiked] = useState(likes.includes(user?.email));

  useEffect(() => {
    comments.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  }, []);

  const toggleViewComments = () => {
    setViewComments(!viewComments);
  };

  const handlePostLike = () => {
    if (!user) {
      alert("please Login to continue !");
      return;
    }
    if (!postLiked) {
      setPostLiked(true);
      db.collection("posts")
        .doc(id)
        .update({ likes: [...likes, user.email] })
        .catch(() => {
          setPostLiked(false);
        });
    } else {
      setPostLiked(false);
      likes = likes.filter((email) => {
        return email !== user.email;
      });
      db.collection("posts")
        .doc(id)
        .update({ likes: likes })
        .catch(() => {
          setPostLiked(true);
        });
    }
  };

  const handleNewComment = () => {
    if (!user) {
      alert("please Login to continue !");
      return;
    }
    setNewComment("");
    db.collection("posts")
      .doc(id)
      .update({
        comments: [
          ...comments,
          {
            timestamp: Date.now(),
            authorEmail: user.email,
            authorName: user.name,
            authorPic: user.pic,
            comment: newComment,
          },
        ],
      });
  };

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__userDetails">
            <Link to={`/profile/${authorEmail}`}>
              <Avatar src={authorPic} />
            </Link>{" "}
            <p>{authorName}</p>
          </div>
          <div className="post__date" title={timestamp?.toDate().toUTCString()}>
            {timestamp?.toDate().toLocaleDateString()}
          </div>
        </div>
        <h2 className="post__heading">{title}</h2>
        <p className="post__message">{message}</p>
        <div className="post__imgContainer">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="post__response">
          <div
            className={`post__likes ${postLiked ? "active" : ""}`}
            onClick={handlePostLike}
          >
            <ThumbUpIcon />
            <span>{likes.length} Likes</span>
          </div>
          <div className="post__viewCommentButton" onClick={toggleViewComments}>
            <ChatIcon />
            <span>({comments.length}) View comments</span>
          </div>
        </div>
        <div className="post__newCommentContainer">
          <Avatar src={user?.pic} />
          <div className="post__newCommentbox">
            <input
              type="text"
              placeholder="Write Your Comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="post__newCommentboxInput"
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                  handleNewComment();
                }
              }}
            />
            <SendIcon onClick={handleNewComment} />
          </div>
        </div>
        {viewComments ? (
          <div className="post__commentContainer">
            {comments?.map((comment, i) => (
              <div className="post__Comment" key={i}>
                <Avatar src={comment.authorPic} title={authorName} />{" "}
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Post;
