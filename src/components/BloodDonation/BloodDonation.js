import React, { useState, useEffect, useContext } from "react";
import "./BloodDonation.css";
import { UserContext } from "../../Context/userContext";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { storage, db } from "../../firebase";
import firebase from "firebase";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

function BloodDonation() {
  const { enqueueSnackbar } = useSnackbar();

  const [user] = useContext(UserContext);
  const [users, setUsers] = useState(null);
  const [donationMessage, setDonationMessage] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [donationAmount, setDonationAmount] = useState(1);
  const [donationImg, setDonationImg] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setDonationImg(e.target.files[0]);
    }
  };

  const handleDonationPublish = () => {
    if (!user) {
      enqueueSnackbar("Please login to continue", { variant: "error" });
      return;
    } else if (
      donationMessage === "" ||
      donationDate === "" ||
      donationAmount < 1 ||
      !donationImg
    ) {
      enqueueSnackbar("please complete the form before proceeding", {
        variant: "error",
      });
      return;
    }

    const imageName = Math.floor(Math.random() * 1000000) + donationImg.name;
    const uploadTask = storage.ref(`images/${imageName}`).put(donationImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        console.log(error);
        enqueueSnackbar("An error occured, try again later!", {
          variant: "error",
        });
      },
      () => {
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((imgUrl) => {
            db.collection("bloodDonation")
              .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                donorEmail: user.email,
                donorName: user.name,
                donorPic: user.pic,
                message: donationMessage,
                amount: donationAmount,
                date: donationDate,
                imgUrl,
              })
              .then(() => {
                enqueueSnackbar("Your request added successfully", {
                  variant: "success",
                });
                setProgress(0);
                setDonationMessage("");
                setDonationAmount(1);
                setDonationDate("");
                setDonationImg(null);
              })
              .catch((error) => {
                console.log(error);
                enqueueSnackbar("An error occured, try again later!", {
                  variant: "error",
                });
              });
          });
      }
    );
  };

  useEffect(() => {
    db.collection("users")
      .orderBy("totalBloodDonated", "desc")
      .get()
      .then((result) => {
        setUsers(result.docs.map((doc) => doc.data()));
      })
      .catch((error) => console.log(error.message));
  }, []);

  const classes = useStyles();
  return (
    <>
      {!users ? (
        ""
      ) : (
        <div className="bloodDonation">
          {/* animated background */}

          {/* Page content */}
          <div className="blood_Donation_container">
            {/* Leader-board column */}
            <div className="left__col_leader-board">
              <div className="leaderboard__top">
                <div className="first_leader">
                  <div className="leader_detail">
                    <Link to={`/profile/${users[1].email}`}>
                      <Avatar src={users[1].pic} />
                    </Link>
                    <p>{users[1].name}</p>
                    <p>{users[1].bloodGroup}</p>
                    <p>Blood Donated : {users[1].totalBloodDonated} Units</p>
                  </div>
                  <div className="leader_image_box">
                    <img
                      src={`/images/second.svg`}
                      alt="The Second-Hero"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
                <div className="second_leader">
                  <div className="leader_detail">
                    <Link to={`/profile/${users[0].email}`}>
                      <Avatar src={users[0].pic} />
                    </Link>
                    <p>{users[0].name}</p>
                    <p>{users[0].bloodGroup}</p>
                    <p>Blood Donated : {users[0].totalBloodDonated} Units</p>
                  </div>
                  <div className="leader_image_box">
                    <img
                      src={`/images/first.svg`}
                      alt="The First-Hero"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
                <div className="third_leader">
                  <div className="leader_detail">
                    <Link to={`/profile/${users[2].email}`}>
                      <Avatar src={users[2].pic} />
                    </Link>
                    <p>{users[2].name}</p>
                    <p>{users[2].bloodGroup}</p>
                    <p>Blood Donated : {users[2].totalBloodDonated} Units</p>
                  </div>
                  <div className="leader_image_box">
                    <img
                      src={`/images/third.svg`}
                      alt="The Second-Hero"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
              <div className="leaderboard__bottom">
                {/* 4th place donor */}
                <div className="first_runnerup_leader">
                  <div className="leader_image_box_bottom">
                    <img
                      src={`/images/medal-of-honor.svg`}
                      alt="The Second-Hero"
                      height="40px"
                      width="40px"
                    />
                  </div>
                  <div className="leader_detail__bottom">
                    <p>4.</p>
                    <Link to={`/profile/${users[3].email}`}>
                      <Avatar src={users[3].pic} />
                    </Link>
                    <p>{users[3].name}</p>
                    <p>{users[3].bloodGroup}</p>
                    <p>Blood Donated : {users[3].totalBloodDonated} Units</p>
                  </div>
                </div>

                {/* 5th place donor */}
                <div className="second_runnerup_leader">
                  <div className="leader_image_box_bottom">
                    <img
                      src={`/images/medal.svg`}
                      alt="The Second-Hero"
                      height="40px"
                      width="40px"
                    />
                  </div>
                  <div className="leader_detail__bottom">
                    <p>5.</p>
                    <Link to={`/profile/${users[4].email}`}>
                      <Avatar src={users[4].pic} />
                    </Link>
                    <p>{users[4].name}</p>
                    <p>{users[4].bloodGroup}</p>
                    <p>Blood Donated : {users[4].totalBloodDonated} Units</p>
                  </div>
                </div>
                {/* More than 5th rank donor is a normal donor */}
                {users.map((user, i) => {
                  if (i < 5) return "";
                  return (
                    <div className="normal_leader">
                      <div className="leader_image_box_bottom">
                        <img
                          src={`/images/normal-medal.svg`}
                          alt="The Second-Hero"
                          height="40px"
                          width="40px"
                        />
                      </div>
                      <div className="leader_detail__bottom">
                        <p>{i + 1}</p>
                        <Link to={`/profile/${users[i].email}`}>
                          <Avatar src={users[i].pic} />
                        </Link>
                        <p>{users[i].name}</p>
                        <p>{users[i].bloodGroup}</p>
                        <p>
                          Blood Donated : {users[i].totalBloodDonated} Units
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* leader_detail__bottom section ends here */}
            </div>
            {/* left__col_leader ends here */}

            {/* form and map column starts */}
            <div className="right_col_form-map">
              <div className="donate__blood_form">
                <div className="donate__blood_image">
                  <h2>Donated? tell everyone</h2>
                  <img
                    src={`/images/blood-donate.svg`}
                    alt=""
                    height="50px"
                    width="50px"
                  />
                </div>
                <div className="donate__blood_form_feilds">
                  <form className={classes.root} noValidate autoComplete="off">
                    <div>
                      <TextField
                        id="outlined-multiline-static"
                        label="Write your thoughts!"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        value={donationMessage}
                        onChange={(e) => setDonationMessage(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        id="date"
                        label="Date Of Donation"
                        type="date"
                        defaultValue=""
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={donationDate}
                        onChange={(e) => setDonationDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        id="number"
                        label="Amount Donated (Units)"
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        accept=""
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{ display: `none` }}
                        onChange={handleImageChange}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          {donationImg ? donationImg.name : "Upload Documents"}
                        </Button>
                      </label>
                    </div>
                    <div>
                      {progress > 0 ? (
                        <progress value={progress} max="100" />
                      ) : (
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          endIcon={<Icon></Icon>}
                          onClick={handleDonationPublish}
                        >
                          Publish
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="donation__center__box">
                <h5>Find Donation Centers Near You !</h5>
                <img
                  src={`/images/map.svg`}
                  alt=""
                  height="30px"
                  width="30px"
                />
              </div>
            </div>
          </div>
          {/* Page Content ended */}
        </div>
      )}
    </>
  );
}

export default BloodDonation;
