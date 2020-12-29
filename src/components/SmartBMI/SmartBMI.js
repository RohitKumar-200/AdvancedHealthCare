import React from "react";
import "./SmartBMI.css";

function SmartBMI() {
  // Bmi calculator function starts
  function BMI_calculator() {
    var age = Number(document.getElementById("age").value);
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    height = height / 100;
    var bmi = weight / (height * height);
    bmi = Math.round((bmi + Number.EPSILON) * 100) / 100;

    var r_wgt = height * height * 21;
    r_wgt = Math.round((r_wgt + Number.EPSILON) * 100) / 100;
    var body_health = "";
    if (bmi <= 16) {
      body_health = "Severely Thin";
    } else if (bmi > 16 && bmi <= 17) {
      body_health = "Moderately Thin";
    } else if (bmi > 17 && bmi <= 18.5) {
      body_health = "Mild Thin";
    } else if (bmi > 18.5 && bmi <= 25) {
      body_health = "Normal";
    } else if (bmi > 25 && bmi <= 30) {
      body_health = "Over Weight";
    } else {
      body_health = "Obese";
    }

    if (age >= 2 && height !== undefined && weight !== undefined) {
      document.getElementById("before__male_image").style.display = "none";
      document.getElementById("before__female_image").style.display = "none";
      document.getElementById("body_bmi-1").style.display = "flex";
      document.getElementById("body_bmi-2").style.display = "flex";
      document.getElementById("body_bmi-3").style.display = "flex";
      document.getElementById("body_bmi-4").style.display = "flex";
      document.getElementById("body_bmi-5").style.display = "flex";
      document.getElementById("body_bmi-6").style.display = "flex";
    }

    document.getElementById("set_age").innerHTML = age + " Yrs";
    document.getElementById("set_height").innerHTML = height + " m";
    document.getElementById("set_weight").innerHTML = weight + " Kgs";

    document.getElementById("body_bmi-2_p").innerHTML = "Your BMI : " + bmi;
    document.getElementById("calculated-bmi-value").innerHTML =
      "You are " + body_health;

    document.getElementById("bmi__body_weightp1").innerHTML =
      "Recommended Body Weight : " + r_wgt;
    document.getElementById("r_diet").innerHTML =
      "Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk, stay within your daily calorie needs";
  }
  // Bmi calculator function ends
  return (
    <div
      className="smartBMI"
      style={{ backgroundImage: `url(/images/fitness-bg.jpg)` }}
    >
      <div className="bmi__main_container">
        <div className="main_container_left-col">
          <div className="left-col_heading">
            <p>BMI & Fitness Tracker</p>
          </div>
          <div className="bmi__calculator">
            <form>
              <input
                placeholder="Height (cm)"
                required
                type="number"
                id="height"
              />
              <input
                name="Weight"
                placeholder="Weight (Kgs)"
                type="number"
                id="weight"
              />
              <input
                name="Age"
                placeholder="Age (Yrs)"
                type="number"
                id="age"
              />
              <button type="button" id="calc" onClick={BMI_calculator}>
                Calculate
              </button>
            </form>
          </div>
        </div>
        <div className="main_container_right-col">
          <div className="before__male_image" id="before__male_image">
            <img src={`/images/man.svg`} alt="Male" height="200px" />
          </div>
          <div className="before__female_image" id="before__female_image">
            <img src={`/images/woman.svg`} alt="Female" height="200px" />
          </div>

          <div className="bmi__body_details" id="body_bmi-1">
            <img src={`/images/age.svg`} alt="" height="30px" />
            <p id="set_age"></p>
            <img src={`/images/height.svg`} alt="" height="30px" />{" "}
            <p id="set_height"></p>
            <img src={`/images/scale.svg`} alt="" height="30px" />{" "}
            <p id="set_weight"></p>
          </div>
          <div className="bmi__calculated" id="body_bmi-2">
            <p id="body_bmi-2_p" style={{ fontSize: `2em` }}></p>
            <p id="calculated-bmi-value"></p>
          </div>
          <div className="bmi__body_water" id="body_bmi-3">
            <img src={`/images/water.svg`} alt="" height="100px" />
            <p> Drink At least 8 litres of water daily</p>
          </div>
          <div className="bmi__body_calorie" id="body_bmi-4">
            <p> Recommended Calories : </p>
            <p>2500 - 3000 per day</p>
          </div>
          <div className="bmi__body_weight" id="body_bmi-5">
            <p id="bmi__body_weightp1"></p>
          </div>
          <div className="bmi__body_diet" id="body_bmi-6">
            <p>Recommended Diet : </p>
            <p id="r_diet"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartBMI;
