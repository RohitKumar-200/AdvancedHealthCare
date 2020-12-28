import React, { useState, useEffect } from "react";
import "./AdminBloodDonation.css";
import { db } from "../../firebase";
import firebase from "firebase";

function AdminBloodDonation() {
  const [donations, setDonations] = useState(null);

  useEffect(() => {
    db.collection("bloodDonation")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setDonations(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          })
        );
      });
  }, []);

  const handleDonationApproval = (id, email, amount, date, message) => {
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((res) => {
        const userDetails = res.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        })[0];

        const totalBlood = parseInt(
          parseInt(userDetails.totalBloodDonated) + parseInt(amount)
        );

        db.collection("users")
          .doc(userDetails.id)
          .update({
            totalBloodDonated: totalBlood,
          })
          .then(() => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              authorEmail: "medibot@example.com",
              authorName: "Medi bot",
              refEmail: email,
              authorPic:
                "https://firebasestorage.googleapis.com/v0/b/advanced-health-care.appspot.com/o/images%2FchatbotIcon.png?alt=media&token=af166b5b-d901-4a68-8d35-d7cb6fec179f",
              title: "New Blood Donation",
              message: `Hey! ${userDetails.name} donated ${amount} unit of blood on ${date}. Message from him "${message}"`,
              imgUrl:
                "https://www.wockhardthospitals.com/wp-content/uploads/2019/11/2971635.jpg",
              likes: [],
              comments: [],
            });

            db.collection("bloodDonation")
              .doc(id)
              .delete()
              .catch(function(error) {
                console.error("Error removing document: ", error);
              });
          });
      })
      .catch(function(error) {
        console.error("Error on blood donation approval : ", error);
      });
  };

  const handleDonationRejection = (id) => {
    db.collection("bloodDonation")
      .doc(id)
      .delete()
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      {donations?.map((donation) => (
        <div key={donation.id}>
          <img src={donation.donorPic} alt={donation.donorName} />
          <p>{donation.donorName}</p>
          <p>{donation.donorEmail}</p>
          <p>{donation.date}</p>
          <p>{donation.message}</p>
          <p>{donation.amount}</p>
          <img src={donation.imgUrl} alt="blood donation document" /> <br />
          <button
            onClick={() =>
              handleDonationApproval(
                donation.id,
                donation.donorEmail,
                donation.amount,
                donation.date,
                donation.message
              )
            }
          >
            approve
          </button>
          <button onClick={() => handleDonationRejection(donation.id)}>
            reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminBloodDonation;
