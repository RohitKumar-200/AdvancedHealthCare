import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import JoinUs from "../JoinUs/JoinUs";

function Login() {
  return (
    <div className="login">
      <section id="top_page">
        <div className="landing__page__container">
          <div className="wrapper__wave">
            <div className="wave"></div>
          </div>
          <div className="Ahc__logo animate__animated animate__fadeInDown">
            AHC
          </div>
          <div className="Ahc__brand__name animate__animated animate__fadeInDown">
            Advanced Health Care{" "}
          </div>
          <div className="Ahc__services__button">
            <a href="#our-services">
              <p> Our Services</p>
            </a>
          </div>
        </div>
      </section>
      <section id="our-services" className="Ahc__services">
        <div className="heading__our-services">Our Services</div>
        <div className="services__grid">
          {/* A flipping cell  */}
          <Link to="/bloodDonation">
            {" "}
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img
                    src={`/images/blood-donation.svg`}
                    alt="blood-donation"
                  />
                  <h6> Blood Donation Community</h6>
                </div>
                <div className="flip__card-back">
                  <h2>Blood Donation</h2>
                  <p>
                    We are building a health centered community to provide
                    reliable Blood Donors. Join Us and become a Hero !
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* A flipping cell  */}
          <Link to="/smartBMI">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img src={`/images/bmi.svg`} alt="Smart-BMI Calculator" />
                </div>
                <div className="flip__card-back">
                  <h2>Fitness Tracker</h2>
                  <p>
                    Calculator your Body Mass Index smartly through Image no
                    need to calculate measurements !
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* A flipping cell  */}
          <Link to="/covid-19">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img
                    src={`/images/covid_support.svg`}
                    alt="Covid-19 Support"
                  />
                  <h6> Covid Support </h6>
                </div>
                <div className="flip__card-back">
                  <h2>Covid-19 Support</h2>
                  <p>
                    We are with you in this havoc. Find nearby covid Hotspots
                    and get latest updates on Covid-19 vaccination
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* A flipping cell  */}
          <Link to="/diseaseDetection">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img
                    src={`/images/disease_detection.svg`}
                    alt="Disease-Detection"
                  />
                  <h6> Advanced Disease Detection </h6>
                </div>
                <div className="flip__card-back">
                  <h2>Advanced Disease Detection</h2>
                  <p>
                    Find the right medication for mild disease detector, no need
                    to consult doctor for it !
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* A flipping cell  */}
          <Link to="/nearbyHospitals">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img
                    src={`/images/place_service.svg`}
                    alt="Hospitals Near You"
                  />
                  <h6> Hospitals Near You</h6>
                </div>
                <div className="flip__card-back">
                  <h2>Hospitals Near You</h2>
                  <p>
                    Prepare yourself for any Emergency, find nearest hospitals
                    to you.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* A flipping cell  */}
          <Link to="/yogaAasans">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img src={`/images/lotus.svg`} alt="3D Yoga Asanas" />
                  <h6> 3D Yoga Asanas </h6>
                </div>
                <div className="flip__card-back">
                  <h2>3D Yoga Asanas</h2>
                  <p>
                    We promote healthy life, watch our 3D yoga asanas and know
                    thier benifits.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/home">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img src={`/images/chat-bot.svg`} alt="Chat-bot" />
                  <h6> Medi-BoT</h6>
                </div>
                <div className="flip__card-back">
                  <h2>Medi-BoT</h2>
                  <p>
                    Medi-Bot is hear to assist your ans resolve your first hand
                    queries in no-time. Its your personal health assistant.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/emotionDetection">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img src={`/images/blog.svg`} alt="blog-feed" />
                  <h6> Share Your Thoughts !</h6>
                </div>
                <div className="flip__card-back">
                  <h2>Share Your Thoughts!</h2>
                  <p>
                    We welcome you to join our community and share your
                    expiriences about life, health or anything that calms your
                    mind.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/myEmotion">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img
                    src={`/images/emotions.svg`}
                    alt="Smart Emotion Detection"
                  />
                  <h6> Smart Emotion Detection</h6>
                </div>
                <div className="flip__card-back">
                  <h2>Smart Emotion Detection</h2>
                  <p>
                    Our Tool can detect the emotion by analyzing a photo or
                    image using ML. Use it Its Fun and Intresting.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="Join__us_button">
          <a href="#join-us">
            <p> Join Us </p>
          </a>
        </div>
      </section>
      <section
        id="join-us"
        className="Join__us"
        style={{ backgroundImage: `url(/images/city__welcome.jpg)` }}
      >
        <div className="Join__us_container">
          <div className="Join__us_heading"> Join Us </div>
          <div className="buttons__box">
            {/* <div className="sign__in_box">
              <button class="w3-button w3-khaki w3-hover-teal w3-xxxlarge">
                Login
              </button>
            </div>
            <div className="sign__up_box">
              <button class="w3-button w3-khaki w3-hover-teal w3-xxxlarge">
                Sign Up
              </button>
            </div> */}
            <JoinUs />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
