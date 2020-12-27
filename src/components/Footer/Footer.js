import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__left">
          <div className="footer__brand-logo">
            <Link to="/home">
              <img
                src={"/images/healthcare.svg"}
                alt="AHC logo"
                height=" 50px "
                width="50px"
              />
            </Link>
          </div>
          <div className="footer__brand-name">
            <Link to="/home">Advanced Health Care</Link>
          </div>
          <div className="footer__left-body">
            <Link to="#">
              <i class="fab fa-facebook" />
            </Link>
            <Link to="#">
              <i class="fab fa-twitter" />
            </Link>
            <Link to="#">
              <i class="fab fa-linkedin" />
            </Link>
            <Link to="#">
              <i class="fab fa-google" />
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right-services">
            <section className="footer__services">
              <h3><Link to="covid-19">Covid-19 Support</Link></h3>
            </section>
          </div>
          <div className="footer__right-support">
            <div>
              <i class="fas fa-phone-square-alt"></i>
            </div>
            <div>
              <h4> 0512-123456</h4>
            </div>
          </div>
        </div>
        <div className="copyright"> AHC © 2020. All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
