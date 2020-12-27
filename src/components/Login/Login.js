import React, { useContext } from "react";
import "./Login.css";
import { UserContext } from "../../Context/userContext";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [, setUser] = useContext(UserContext);
  const history = useHistory();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
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

        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  );
}

export default Login;
