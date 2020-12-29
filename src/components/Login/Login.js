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
                  <h2> Blood Donation</h2>
                </div>
                <div className="flip__card-back">
                  <h2>Blood Donation</h2>
                  <p>
                    We are Building a Health Centered Community to Sustain and
                    Increase Reliable Blood Donors. Donated Blood? Join Us, Let
                    others know your kindful Work!
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
                  <h2>Smart BMI</h2>
                  <p>
                    Calculate your Body Mass Index smartly. Our smart calcultor
                    also suggest your Health status, Preferred weight, Daily
                    intake calorie and much more
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
                  <h2> Covid Support </h2>
                </div>
                <div className="flip__card-back">
                  <h2>Covid-19 Support</h2>
                  <p>
                    We are with you in this havoc. Get Latest Covid Stats, Know
                    the Precautions and Use our Symptom checker for Covid for
                    better help.
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
                  <h2> 3D Yoga Asanas </h2>
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
                  <h2> Medi-BoT</h2>
                </div>
                <div className="flip__card-back">
                  <h2>Medi-BoT</h2>
                  <p>
                    Medi-BoT is here to Assist you. It can answer your first
                    hand queries in no-time with lot of other features.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/home">
            <div className="services__grid-cell flip__card">
              <div className="flip__card-inner">
                <div className="flip__card-front">
                  <img src={`/images/blog.svg`} alt="blog-feed" />
                  <h2> Share Your Thoughts! </h2>
                </div>
                <div className="flip__card-back">
                  <h2> Share Your Thoughts!</h2>
                  <p>
                    We welcome you to join our community and share your
                    experiences about life, health or anything that calms your
                    mind.
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
