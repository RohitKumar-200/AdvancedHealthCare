import React from "react";
import "./DiseaseDetection.css";
import Breast from './images/cancer.svg';
import Diabetes from './images/diabetes.svg';
import Heart from './images/heart.svg';
import Kidney from './images/kidney.svg';

function DiseaseDetection() {
  return (
    <>
     <div class="heading">
        <h1>Disease Detection</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="imgBx">
              <img src={Breast} />
            </div>
            <div class="content">
                <h2>Breast Cancer</h2>
                <p>With more that 1 million cases in India every year, leading to dangerous complication if left
                    unchecked.</p>
                <a href="https://cancerapii.herokuapp.com" target="blank">Predict Now</a>
            </div>
        </div>


        <div class="card">
            <div class="imgBx">
            <img src={Diabetes} />
            </div>
            <div class="content">
                <h2>Diabetes Checkup </h2>
                <p>Regular blood sugar monitoring is the most important thing you can do to manage type 1 or type 2
                    diabetes.</p>
                <a href="https://diabetesapii.herokuapp.com/" target="blank">Predict Now</a>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
            <img src={Heart} />
            </div>
            <div class="content">
                <h2>Heart Diseases</h2>
                <p>Use our AI powered algorithm to test and diagnose if anything is serious and whether you need to
                    consult a physician or not.</p>
                <a href="https://heartaapi.herokuapp.com" target="blank">Predict Now</a>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
            <img src={Kidney} />
            </div>
            <div class="content">
                <h2>Kidney Diseases</h2>
                <p>Kidneys filter the blood. As kidneys fail, waste builds up. Symptoms develop slowly and aren't
                    specific to the disease.</p>
                <a href="https://kidneyapi.herokuapp.com" target="blank">Predict Now</a>
            </div>
        </div>
    </div>
  </>
    );
}

export default DiseaseDetection;
