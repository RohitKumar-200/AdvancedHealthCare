import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Home from "../Home/Home";
import SmartBMI from "../SmartBMI/SmartBMI";
import BloodDonation from "../BloodDonation/BloodDonation";
import Yoga from "../Yoga/Yoga";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Covid from "../Covid/Covid";
import Chatbot from "../Chatbot/Chatbot";
import Admin from "../Admin/Admin";

function App() {
  const [user] = useContext(UserContext);

  return (
    <div className="app">
      <Router>
        <Header />
        <Chatbot />
        <div className="app__body">
          <main className="main">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/smartBMI">
                <SmartBMI />
              </Route>
              <Route path="/bloodDonation">
                <BloodDonation />
              </Route>
              <Route path="/yogaAasans">
                <Yoga />
              </Route>
              <Route path="/profile/:email">
                <Profile />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/covid-19">
                <Covid />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
