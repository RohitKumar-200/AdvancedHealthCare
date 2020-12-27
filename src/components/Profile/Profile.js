import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { db } from "../../firebase";

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
          <img src={userDetails.pic} alt={userDetails.pic} />
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
          <p>{userDetails.gender}</p>
          {/* DOB is not shown to other person */}
          {userDetails.email === user.email ? <p>{userDetails.DOB}</p> : ""}
          <p>{userDetails.bloodGroup}</p>
          <p>{userDetails.totalBloodDonated}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
