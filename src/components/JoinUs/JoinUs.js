import React, { useState, useContext } from "react";
import "./JoinUs.css";
import { UserContext } from "../../Context/userContext";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

function JoinUs() {
  const [, setUser] = useContext(UserContext);
  const history = useHistory();

  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        db.collection("users")
          .where("email", "==", result.user.email)
          .get()
          .then((res) => {
            if (res.docs.map((doc) => doc.data()).length > 0) {
              localStorage.setItem(
                "ahc_userDetails",
                JSON.stringify({
                  name: result.user.displayName,
                  email: result.user.email,
                  pic: result.user.photoURL,
                })
              );
              setUser({
                name: result.user.displayName,
                email: result.user.email,
                pic: result.user.photoURL,
              });
              history.push("/home");
            } else {
              alert("you don't have account, Sign Up to continue");
            }
          });
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (DOB === "" || gender === "" || bloodGroup === "") {
      alert("Sign up form cannot be empty");
      return;
    }

    auth
      .signInWithPopup(provider)
      .then((result) => {
        db.collection("users")
          .add({
            name: result.user.displayName,
            email: result.user.email,
            pic: result.user.photoURL,
            gender,
            bloodGroup,
            DOB,
          })
          .then(() => {
            localStorage.setItem(
              "mysuru-tourism-user",
              JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                pic: result.user.photoURL,
              })
            );
            setUser({
              name: result.user.displayName,
              email: result.user.email,
              pic: result.user.photoURL,
            });
            history.push("/home");
          });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="joinUs">
      <div className="joinUs__signInContainer">
        <button onClick={handleSignIn}>Sign In with google</button>
      </div>
      <div className="joinUs__or">or</div>
      <div className="joinUs__signUpContainer">
        <div className="joinUs__signUpHeading">Sign Up</div>
        <form onSubmit={handleSignUp}>
          <div className="joinUs__signUpDOB">
            DOB
            <input
              type="date"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div
            className="joinUs__signUpGender"
            onChange={(e) => setGender(e.target.value)}
          >
            Gender
            <input type="radio" id="male" name="gender" value="Male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="Other" />
            <label for="other">Other</label>
          </div>
          <div className="joinUs__signUpBloodGroup">
            <label for="bloodGroup">Blood group</label>
            <select
              name="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="joinUs__signUpSubmitContainer">
            <button type="submit" onClick={handleSignUp}>
              Sign Up with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
