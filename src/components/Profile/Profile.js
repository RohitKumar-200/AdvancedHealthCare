import React, {useContext, useEffect, useState} from "react";
import "./Profile.css";
import {useParams} from "react-router-dom";
import {UserContext} from "../../Context/userContext";
import {db} from "../../firebase";

function Profile() {
  const [user] = useContext(UserContext);
  const params = useParams();
  const email = params.email;
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((result) => {
        setUserDetails(result.docs.map((doc) => doc.data())[0]);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      {userDetails ? (
        <div className="profile">
          <div className="profile_card">
            <img src={userDetails.pic} alt={userDetails.pic} width="100%" />
            <p className="name">{userDetails.name}</p>
            <p className="email">{userDetails.email}</p>
            <p>{userDetails.gender}</p>
            {/* DOB is not shown to other person */}
            {userDetails.email === user.email ? <p>{userDetails.DOB}</p> : ""}
            <p className="blood-group">{userDetails.bloodGroup}</p>
            <p>
              {" "}
              Blood Donated :{" "}
              <p className="blood-amount">
                {userDetails.totalBloodDonated}
              </p>{" "}
              Units
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
