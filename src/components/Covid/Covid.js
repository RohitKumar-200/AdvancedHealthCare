import React from "react";
import "./Covid.css";

function Covid() {
  return (
    <div className="covid">
      <div className="covid-visualizer">
        <iframe
          src="https://covidvisualizer.com/"
          title="Free 3D covid Visualizer from covidvisualizer.com"
          height="510px"
          width="100%"
          allowFullScreen="true"
          frameborder="0"
        ></iframe>
        <div className="vaccination-update-button">
          <a href="#sec-1"> Vaccination Update </a>
        </div>
      </div>
      <section id="sec-1">
        <div className="covid-vaccination-update">
          <iframe
            src="https://timesofindia.indiatimes.com/india/covid-19-oxford-vaccine-may-get-nod-in-a-few-days/articleshow/79982699.cms"
            frameborder="2"
            title="Updates on covid vaccination from most trusted Timesofindia"
            height="500px"
            width="90%"
          ></iframe>
        </div>
        <div className="vaccination-update-button">
          <a href="#sec-2"> Covid Symptoms </a>
        </div>
      </section>
      <section id="sec-2">
        <div className="covid-symptoms">
          <h1> Covid Self Check List</h1>
          <h3> Have you feeling any of the below symptoms</h3>
          <ul>
            <li>
              {" "}
              Feeling feverish or have an elevated, measured temperature{" "}
            </li>
            <li>Loss of taste or smell</li>
            <li>Cough</li>
            <li>Difficulty breathing </li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
            <li>Congestion or runny nose</li>
            <li>Shaking or exaggerated shivering </li>
            <li>Significant muscle pain or ache </li>
          </ul>
          <h4> Yes ? You should report to hospital for checkup </h4>
          <h4> No ! very well then have a good day.</h4>
        </div>
        <div className="vaccination-update-button">
          <a href="#sec-3"> Covid Precautions </a>
        </div>
      </section>
      <section id="sec-3">
        <div className="covid-precautions">
          <h2>Wear Mask</h2>
          <h2>Maintain social Distance</h2>
          <h2>Keep hygiene</h2>
          <h2>Avoid Crowded Areas</h2>
        </div>
      </section>
    </div>
  );
}
export default Covid;
