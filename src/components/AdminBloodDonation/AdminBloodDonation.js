import React, { useState, useEffect } from "react";
import "./AdminBloodDonation.css";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSnackbar } from "notistack";

function AdminBloodDonation() {
  const { enqueueSnackbar } = useSnackbar();
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
            enqueueSnackbar("Request approved", { variant: "success" });

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
        enqueueSnackbar("Error on blood donation approval", {
          variant: "error",
        });
      });
  };

  const handleDonationRejection = (id) => {
    db.collection("bloodDonation")
      .doc(id)
      .delete()
      .then(() => {
        enqueueSnackbar("Approval denied", { variant: "success" });
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
        enqueueSnackbar("Error on blood donation rejection", {
          variant: "error",
        });
      });
  };

  return (
    <div className="admin__main__container">
      {donations?.map((donation) => (
        <div key={donation.id} className="admin__blood_donation_container">
          <div className="donor__profile__image">
            <img
              src={donation.donorPic}
              alt={donation.donorName}
              width="100%"
            />
          </div>
          <p className="donor__profile__name">{donation.donorName}</p>
          <div className="admin_email-date-box">
            <p>
              <a
                href={"mailto:" + donation.donorEmail}
                title="Click to send an Email"
              >
                {donation.donorEmail}
              </a>
            </p>

            <p className="donor__profile__date">{donation.date}</p>
          </div>
          <p className="donor__profile__message">{donation.message}</p>
          <div className="admin_donation_amount_box">
            <img
              src={`/images/blood-donate.svg`}
              alt=""
              width="32px"
              height="32px"
            />
            <p> Amount Donated : {donation.amount} Units</p>
          </div>
          <div class="img-magnifier-container">
            <img
              src={donation.imgUrl}
              alt="blood donation document"
              width="100%"
              id="myimage"
            />
          </div>
          <br />
          <div className="admin_buttons">
            <div className="admin_approve_box">
              <div className="approve-img-box">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzJGQjNCOyIgZD0iTTUwNS4xODIsMTEzLjc5NWwtNjUuODM2LTY1LjgzNGMtOS4wODktOS4wOS0yMy44MjctOS4wODktMzIuOTE3LDBMMjU2LDE5OC4zOTJsLTg0LjU5NCw4NC41OTQNCglsLTY1LjgzOS02NS44MzljLTQuMzY1LTQuMzY1LTEwLjI4NS02LjgxNy0xNi40NTktNi44MTdjLTYuMTczLDAtMTIuMDk0LDIuNDUyLTE2LjQ1OCw2LjgxOEw2LjgxOCwyODIuOTg4DQoJYy05LjA5LDkuMDktOS4wOSwyMy44MjcsMCwzMi45MTdsMTQ4LjEyNCwxNDguMTMzYzQuMzYzLDQuMzY1LDEwLjI4NSw2LjgxNywxNi40NTgsNi44MTdjNi4xNzQsMCwxMi4wOTQtMi40NTMsMTYuNDU4LTYuODE3DQoJbDY4LjE0MS02OC4xNDFsMjQ5LjE4NC0yNDkuMTg0YzQuMzY1LTQuMzY1LDYuODE4LTEwLjI4NSw2LjgxOC0xNi40NThDNTExLjk5OSwxMjQuMDgxLDUwOS41NDcsMTE4LjE2LDUwNS4xODIsMTEzLjc5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5Q0REMDU7IiBkPSJNMTU0Ljk0Miw0NjQuMDM5YzQuMzYzLDQuMzY1LDEwLjI4NSw2LjgxOCwxNi40NTgsNi44MThjNi4xNzQsMCwxMi4wOTQtMi40NTMsMTYuNDU4LTYuODE4DQoJbDY4LjE0MS02OC4xNDFWMTk4LjM5NGwtODQuNTk0LDg0LjU5NGwtNjUuODM5LTY1LjgzOWMtNC4zNjUtNC4zNjUtMTAuMjg1LTYuODE3LTE2LjQ1OC02LjgxN2MtNi4xNzMsMC0xMi4wOTQsMi40NTItMTYuNDU4LDYuODE4DQoJTDYuODE4LDI4Mi45ODhjLTkuMDksOS4wOS05LjA5LDIzLjgyNywwLDMyLjkxN0wxNTQuOTQyLDQ2NC4wMzl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  alt=""
                  height="35px"
                />
              </div>
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
                Approve
              </button>
            </div>
            <div className="admin_reject_box">
              <div className="reject-img-box">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOS4yNDhwdCIgdmlld0JveD0iMCAwIDUwOS4yNDggNTA5LjI0OCIgd2lkdGg9IjUwOS4yNDhwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzkzLjgyNDIxOSA1MDkuMjQ2MDk0LTEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5IDEzOS4xOTkyMTktMTE1LjQyNTc4MS0xMTUuNDIxODc1IDEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyNTc4MS0xMTUuNDI1NzgxIDEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyMTg3NSAxMTUuNDI1NzgxLTEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5IDEzOS4xOTkyMTl6bTAgMCIgZmlsbD0iI2U3NmU1NCIvPjwvc3ZnPg=="
                  alt=""
                  height="35px"
                />
              </div>
              <button onClick={() => handleDonationRejection(donation.id)}>
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminBloodDonation;
