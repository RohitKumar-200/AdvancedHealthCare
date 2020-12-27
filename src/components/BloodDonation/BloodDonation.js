import React from "react";
import "./BloodDonation.css";
import Button from "@material-ui/core/Button";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
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
  const classes = useStyles();
  return (
    <div className="bloodDonation">
      {/* animated background */}

      {/* Page content */}
      <div className="blood_Donation_container">
        {/* Leader-board column */}
        <div className="left__col_leader-board">
          <div className="leaderboard__top">
            <div className="first_leader">
              <div className="leader_detail">
                <Avatar />
                <p>Abhishek Sengar</p>
                <p>B+</p>
                <p>Blood Donated : 69 Units</p>
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
                <Avatar />
                <p>Rohit Kumar</p>
                <p>AB+</p>
                <p>Blood Donated : 101 Units</p>
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
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
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
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
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
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
              </div>
            </div>
            {/* More than 5th rank donor is a normal donor */}
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
                <p>6.</p>
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
              </div>
            </div>
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
                <p>7.</p>
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
              </div>
            </div>
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
                <p>8.</p>
                <Avatar />
                <p>Harshal</p>
                <p>O+</p>
                <p>Blood Donated : 51 Units</p>
              </div>
            </div>
            {/* normal donors end here */}
          </div>
          {/* leader_detail__bottom section ends here */}
        </div>
        {/* left__col_leader ends here */}

        {/* form and map column starts */}
        <div className="right_col_form-map">
          <div className="donate__blood_form">
            <div className="donate__blood_image">
              <h2>Donate Now!</h2>
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
                  />
                </div>
                <div>
                  <TextField
                    id="number"
                    label="Amount Donated (Units)"
                    type="number"
                    defaultValue="1"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div>
                  <input
                    accept=""
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{display: `none`}}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload Documents
                    </Button>
                  </label>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<Icon></Icon>}
                  >
                    Publish
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="donation__center__box">
            <h5>Find Donation Centers Near You !</h5>
            <img src={`/images/map.svg`} alt="" height="30px" width="30px" />
          </div>
        </div>
      </div>
      {/* Page Content ended */}
    </div>
  );
}

export default BloodDonation;
