import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Home from "../Home/Home";
import SmartBMI from "../SmartBMI/SmartBMI";
import DiseaseDetection from "../DiseaseDetection/DiseaseDetection";
import EmotionDetection from "../EmotionDetection/EmotionDetection";
import NearbyHospitals from "../NearbyHospitals/NearbyHospitals";
import BloodDonation from "../BloodDonation/BloodDonation";
import Yoga from "../Yoga/Yoga";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Covid from "../Covid/Covid";
import Chatbot from "../Chatbot/Chatbot";

function App() {
  const [user] = useContext(UserContext);

  return (
    <div className="app">
      <Router>
        <Header />
        <Chatbot />
        <div className="app__body">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/smartBMI">
              <SmartBMI />
            </Route>
            <Route path="/diseaseDetection">
              <DiseaseDetection />
            </Route>
            <Route path="/myEmotion">
              <EmotionDetection />
            </Route>
            <Route path="/nearbyHospitals">
              <NearbyHospitals />
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
            <Route path="/">
              {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
