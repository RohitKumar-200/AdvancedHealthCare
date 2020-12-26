import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Home.css";

function Home() {
  var showComment = () => {
    var x = document.getElementById("view_comments").style.display;
    if (x === "") {
      document.getElementById("view_comments").style.display = "grid";
    } else {
      document.getElementById("view_comments").style.display = "";
    }
  };
  return (
    <div className="home">
      {/* <!-- Page Container --> */}
      <div className="w3-container w3-content">
        {/* <!-- The Grid --> */}
        <div className="w3-row">
          {/* <!-- Middle Column --> */}
          <div className="w3-col m12">
            {/* write or post box */}
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                  <div className="w3-container w3-padding post__container">
                    <h1 className="post_feed_head">Your Thoughts ?</h1>
                    <form action="post">
                      <input
                        type="text"
                        name="name"
                        className="question"
                        Id="nme"
                        required
                        autocomplete="off"
                      />
                      <label htmlFor="nme">
                        <span className="question__text">Post Title</span>
                      </label>
                      <textarea
                        name="message"
                        rows="2"
                        className="question"
                        id="msg"
                        required
                        autocomplete="off"
                      ></textarea>
                      <label htmlFor="msg">
                        <span className="question_text">
                          What's your message?
                        </span>
                      </label>
                      <br />
                      <button type="file" className="w3-button w3-theme">
                        <i class="fa fa-photo" /> Add Media
                      </button>
                      <button type="submit" className="w3-button w3-theme">
                        <i className="fa fa-pencil"></i>  Post
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* user post feed */}
            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              {/* user avatar */}
              <span className="w3-left w3-circle w3-margin-right user-avatar">
                <UserAvatar />
              </span>
              {/* time of post */}
              <span className="w3-right w3-opacity">1 min</span>
              {/* user name */}
              <h4>RohiT Bhadwa</h4>
              <br />
              {/* post title */}
              <h1>Nothern Lights</h1>
              <hr className="w3-clear" />
              {/* post body */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <br />

              {/* Media Uploaded Area */}
              <div className="w3-row-padding" style={{margin: `0px -16px`}}>
                <div className="w3-full">
                  <img
                    src="https://www.w3schools.com/w3images/lights.jpg"
                    width="100%"
                    alt="Northern Lights"
                    className="w3-margin-bottom"
                  />
                </div>
              </div>

              {/* Like button */}
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom like__button"
              >
                <i className="fa fa-thumbs-up"></i>
              </button>

              {"  "}
              {/* view comment button */}
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom comment__button"
                onClick={showComment}
              >
                <i className="fa fa-comment"></i>  View Comments
              </button>

              {/* comment-section */}
              <div class="comment__content">
                <div className="comment__avatar">
                  <UserAvatar />
                </div>
                <div className="comment_body">
                  <input type="text" placeholder="Write Your Comment" />
                </div>
                <div className="comment_send" title="send">
                  <i class="fa fa-send"></i>
                </div>
              </div>

              <div className="view__comments" id="view_comments">
                {/* A sample comment */}
                <div className="user__comment">
                  <div className="view__comment__avatar">
                    <UserAvatar />
                  </div>
                  <div className="view__comment__body">
                    <p> What a post wow . very nice post. so good post!</p>
                  </div>
                </div>
                <hr className="w3-clear" />

                {/* A sample comment */}
                <div className="user__comment">
                  <div className="view__comment__avatar">
                    <UserAvatar />
                  </div>
                  <div className="view__comment__body">
                    <p> What a post wow . very nice post. so good post!</p>
                  </div>
                </div>
                <hr className="w3-clear" />
              </div>
            </div>

            {/* <!-- End Middle Column --> */}
          </div>

          {/* <!-- End Grid --> */}
        </div>

        {/* <!-- End Page Container --> */}
      </div>
    </div>
  );
}

export default Home;

