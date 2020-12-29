import React, { useState } from "react";
import "./Covid.css";

function Covid() {
  const [percentage, setPercentage] = useState(0);
  console.log(percentage);

  const handleSymptomChecker = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const togglePercentage = (bool, value) => {
    setPercentage(percentage + (bool ? value : -value));
  };

  return (
    <div className="covid">
      <section id="top">
        <p className="covid-buttons"> Covid Stats </p>
        <div className="covid-visualizer">
          <iframe
            src="https://covidvisualizer.com/"
            title="Free 3D covid Visualizer from covidvisualizer.com"
            height="460px"
            width="100%"
            frameborder="0"
          ></iframe>
        </div>
        <div className="covid-buttons">
          <a href="#sec-1">Covid Symptoms </a>
        </div>
      </section>

      <section id="sec-1">
        {/* Symptoms Checker  */}
        <div className="covid-check-list">
          <div className="covid-check-list-left">
            <h1>Have you feeling any of the below symptoms</h1>
            <form onSubmit={handleSymptomChecker}>
              {/* Symptoms */}
              {/* symptom : 1 */}
              <div className="symptom">
                <input
                  id="box-1"
                  type="checkbox"
                  name="box-1"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 20)}
                />
                <label htmlFor="box-1">
                  Feeling feverish or have an elevated, measured temperature
                </label>
              </div>
              {/* symptom : 2 */}
              <div className="symptom">
                <input
                  id="box-2"
                  type="checkbox"
                  name="box-2"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 20)}
                />
                <label htmlFor="box-2">Loss of taste or smell</label>
              </div>
              {/* symptom : 3 */}
              <div className="symptom">
                <input
                  id="box-3"
                  type="checkbox"
                  name="box-3"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 3)}
                />
                <label htmlFor="box-3">Cough</label>
              </div>
              {/* symptom : 4 */}
              <div className="symptom">
                <input
                  id="box-4"
                  type="checkbox"
                  name="box-4"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 7)}
                />
                <label htmlFor="box-4">Difficulty breathing</label>
              </div>
              {/* symptom : 5 */}
              <div className="symptom">
                <input
                  id="box-5"
                  type="checkbox"
                  name="box-5"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 7)}
                />
                <label htmlFor="box-5">Shortness of breath</label>
              </div>
              {/* symptom : 6 */}
              <div className="symptom">
                <input
                  id="box-6"
                  type="checkbox"
                  name="box-6"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 20)}
                />
                <label htmlFor="box-6">Shaking or exaggerated shivering</label>
              </div>
              {/* symptom : 7 */}
              <div className="symptom">
                <input
                  id="box-7"
                  type="checkbox"
                  name="box-7"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 3)}
                />
                <label htmlFor="box-7">Congestion or runny nose</label>
              </div>
              {/* symptom : 8 */}
              <div className="symptom">
                <input
                  id="box-8"
                  type="checkbox"
                  name="box-8"
                  className="check"
                  onChange={(e) => togglePercentage(e.target.checked, 20)}
                />
                <label htmlFor="box-8">
                  Significant muscle pain or Fatigue
                </label>
                <br />
                <br />
                {/* <button className="calc-covid" type="submit">
                  {" "}
                  Calculate
                </button> */}
              </div>
            </form>
          </div>
          {/* Left side ends here */}
          {/* right side starts */}
          <div className="covid-check-list-right">
            {/* Show calculated Result here */}
            <div className="percent-show">
              {percentage === 100 ? 99 : percentage}%
            </div>
            <div className="result-text">
              Possibility of having Covid 19
              {/* If percentage is more than 40 % then show "PLease consult a doctor". */}
              {/* else show that "Stay safe and keep going with proper diet and simple painkiller and stress medication you will get well soon" */}
            </div>
          </div>
          {/* right side ends */}
        </div>
        <div className="covid-buttons">
          <a href="#sec-2"> Covid Precautions </a>
        </div>
      </section>
      <section id="sec-2">
        <h1 style={{ fontSize: "48px" }}> Precautions </h1>
        <div className="precautions-grid">
          <div className="precaution">
            <img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iSWNvbnMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNTEyIDI1NmMwIDE0MS4zOC0xMTQuNjIgMjU2LTI1NiAyNTYtMTI4LjQ2IDAtMjM0Ljg0LTk0LjY0LTI1My4xOS0yMThhMjU3LjQ1IDI1Ny40NSAwIDAgMSAtMi44MS0zOGMwLTE0MS4zOCAxMTQuNjItMjU2IDI1Ni0yNTYgMTM2LjQ1IDAgMjQ4IDEwNi43NiAyNTUuNTggMjQxLjMuMjggNC44Ni40MiA5Ljc3LjQyIDE0Ljd6IiBmaWxsPSIjYWEwZGQxIi8+PHBhdGggZD0ibTUxMiAyNTZjMCAxNDEuMzgtMTE0LjYyIDI1Ni0yNTYgMjU2LTEyOC40NiAwLTIzNC44NC05NC42NC0yNTMuMTktMjE4IDEuNTEtLjU0IDMtMS4xNSA0LjQ5LTEuODEgOS45My00LjQ1IDE4LjYtMTEuNDEgMjguNjktMTUuNDdhNTUuODEgNTUuODEgMCAwIDEgNDIuNjYuNjNjMTIuOTQgNS42NSAyNC4xOSAxNi40MyAzOC4zNSAxNy4yNSAxMS42Ni42OCAyMi43MS01Ljg0IDMwLjg3LTE0LjE5czE0LjEzLTE4LjU0IDIxLjEzLTI3LjgxYzkuNzctMTIuNzggMjIuMDctMjQuMTEgMzctMzBzMzIuODctNS43NyA0Ni40MSAyLjkyYzEyLjYyIDguMTEgMTkuODcgMjIuMTUgMjkuNTkgMzMuNTYgMTMuODIgMTYuMjMgMzUuNjUgMjcuNzkgNTYuMzYgMjIuNjYgMTYuNzQtNC4xNSAzMS4xLTE4LjU0IDQ4LjI3LTE2Ljg5czI4LjUzIDE4LjYyIDQzLjgzIDI2LjgzYzIwLjEzIDEwLjggNDggMy42MyA2MC40My0xNS41MyA3LjIyLTExLjE4IDExLjQxLTI2Ljg2IDIwLjYxLTM0LjgzLjM2IDQuODQuNSA5Ljc1LjUgMTQuNjh6IiBmaWxsPSIjOGQwMGFmIi8+PHBhdGggZD0ibTM4Ni41MiA0NzYuMjdhMjU2LjI2IDI1Ni4yNiAwIDAgMSAtMjYxIDAgNzMuNDIgNzMuNDIgMCAwIDEgNzMuMzctNzEuNDRoMTE0LjI2YTczLjQyIDczLjQyIDAgMCAxIDczLjM3IDcxLjQ0eiIgZmlsbD0iIzUzYjk3NiIvPjxwYXRoIGQ9Im05Ni4wNyA1OS40MWgzMTkuODZhMCAwIDAgMCAxIDAgMHY2Ni45M2ExMDguNDggMTA4LjQ4IDAgMCAxIC0xMDguNDcgMTA4LjQ3aC0xMDIuOTJhMTA4LjQ4IDEwOC40OCAwIDAgMSAtMTA4LjQ3LTEwOC40OHYtNjYuOTJhMCAwIDAgMCAxIDAgMHoiIGZpbGw9IiMzZDIzMjIiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAtMSA1MTIgMjk0LjIxKSIvPjxwYXRoIGQ9Im0yOTguNjkgMzc2LjkydjI3Ljk0YTQyLjY5IDQyLjY5IDAgMCAxIC00Mi42OSA0Mi43IDQyLjcgNDIuNyAwIDAgMSAtNDIuNy00Mi43di0yNy45NHoiIGZpbGw9IiM5OTU0NDQiLz48cGF0aCBkPSJtMjk4LjY5IDM3Ni45MnYyNC4xM2E2Mi4zOCA2Mi4zOCAwIDAgMSAtODUuMzkgMHYtMjQuMTN6IiBmaWxsPSIjNmQ0MTNjIi8+PHBhdGggZD0ibTM4Ni41NSAxNjguMTN2OTIuODdhODguMzkgODguMzkgMCAwIDEgLTMwLjkxIDY3LjE1bC01Ni45NSA0OC44YTYxLjY1IDYxLjY1IDAgMCAxIC0xNi42OSAxMS4xNWMtMSAuNDYtMi4wNS44OS0zLjA3IDEuMzFhNjIuNDUgNjIuNDUgMCAwIDEgLTY1LjYzLTEyLjQ5bC01Ny00OC44YTg4LjM2IDg4LjM2IDAgMCAxIC0zMC44My02Ny4xMnYtOTIuODdhNjIuMTUgNjIuMTUgMCAwIDEgNjIuMTQtNjIuMTNoMTM2Ljc3YTYyLjE4IDYyLjE4IDAgMCAxIDYyLjE3IDYyLjEzeiIgZmlsbD0iIzc3NDc0MiIvPjxwYXRoIGQ9Im0zODYuNTUgMTY4LjEzdjkyLjg3YTg4LjM5IDg4LjM5IDAgMCAxIC0zMC45MSA2Ny4xNWwtNTYuOTUgNDguOGE2MS42NSA2MS42NSAwIDAgMSAtMTYuNjkgMTEuMTUgNjIgNjIgMCAwIDEgLTE2LjY5LTExLjE4bC01Ni45NS00OC44YTg4LjM2IDg4LjM2IDAgMCAxIC0zMC44OC02Ny4xMnYtOTIuODdhNjIuMTcgNjIuMTcgMCAwIDEgNjIuMTQtNjIuMTNoODQuNzZhNjIuMTggNjIuMTggMCAwIDEgNjIuMTcgNjIuMTN6IiBmaWxsPSIjOTk1NDQ0Ii8+PHBhdGggZD0ibTM4Ni41NCAyMDguNjRoMy4yMmEyNi4xNyAyNi4xNyAwIDAgMSAyNi4xNyAyNi4xNyAyNi4xNyAyNi4xNyAwIDAgMSAtMjYuMTcgMjYuMTloLTMuMjJhMCAwIDAgMCAxIDAgMHYtNTIuMzZhMCAwIDAgMCAxIDAgMHoiIGZpbGw9IiM5OTU0NDQiLz48cGF0aCBkPSJtOTYuMDcgMjA4LjY0aDMuMjJhMjYuMTcgMjYuMTcgMCAwIDEgMjYuMTcgMjYuMTcgMjYuMTcgMjYuMTcgMCAwIDEgLTI2LjE3IDI2LjE5aC0zLjIyYTAgMCAwIDAgMSAwIDB2LTUyLjM2YTAgMCAwIDAgMSAwIDB6IiBmaWxsPSIjNzc0NzQyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMjIxLjUzIDQ2OS42MikiLz48cmVjdCBmaWxsPSIjNzc0NzQyIiBoZWlnaHQ9IjIwLjgiIHJ4PSIxMC40IiB3aWR0aD0iNDMuMTgiIHg9IjIzNC40MSIgeT0iMjYwLjk4Ii8+PGcgZmlsbD0iIzNkMjMyMiI+PGVsbGlwc2UgY3g9IjMxNi4zNCIgY3k9IjI0Ny44MyIgcng9IjEzLjY3IiByeT0iMTcuOTEiLz48ZWxsaXBzZSBjeD0iMTk1LjU2IiBjeT0iMjQ3LjgzIiByeD0iMTMuNjciIHJ5PSIxNy45MSIvPjxwYXRoIGQ9Im0zNDEuNTggMjQyLjU5YTYgNiAwIDAgMSAtMi44OS0uNzYgNDUuMTIgNDUuMTIgMCAwIDAgLTQ0LjYxLS4wNSA2IDYgMCAxIDEgLTUuNzgtMTAuNDMgNTYuOSA1Ni45IDAgMCAxIDU2LjE5LjA2IDYgNiAwIDAgMSAtMi45MSAxMS4xOHoiLz48cGF0aCBkPSJtMjIwLjggMjQyLjU5YTYgNiAwIDAgMSAtMi44OS0uNzYgNDUuMTQgNDUuMTQgMCAwIDAgLTQ0LjYyLS4wNSA2IDYgMCAxIDEgLTUuNzctMTAuNDMgNTYuOSA1Ni45IDAgMCAxIDU2LjE5LjA2IDYgNiAwIDAgMSAtMi45MSAxMS4xOHoiLz48L2c+PHBhdGggZD0ibTM1MCAyMTcuMjlhNS45IDUuOSAwIDAgMSAtMi4xMi0uNCA4OS44NiA4OS44NiAwIDAgMCAtNjMuMDcgMCA2IDYgMCAxIDEgLTQuMjMtMTEuMTUgMTAxLjcgMTAxLjcgMCAwIDEgNzEuNTUgMCA2IDYgMCAwIDEgLTIuMTMgMTEuNTV6IiBmaWxsPSIjNTEyZjJkIi8+PHBhdGggZD0ibTIyOS4yNyAyMTcuMjlhNS45MSA1LjkxIDAgMCAxIC0yLjEzLS40IDg5Ljg2IDg5Ljg2IDAgMCAwIC02My4wNyAwIDYgNiAwIDEgMSAtNC4yMy0xMS4xNSAxMDEuNyAxMDEuNyAwIDAgMSA3MS41NSAwIDYgNiAwIDAgMSAtMi4xMiAxMS41NHoiIGZpbGw9IiM1MTJmMmQiLz48cGF0aCBkPSJtMzM1LjkyIDI3N2EzLjQ3IDMuNDcgMCAwIDEgLTIuMjMtLjgxIDMuNSAzLjUgMCAwIDEgLS40Ni00LjkzbDQ1LjY1LTU1YTMuNSAzLjUgMCAwIDEgNS4zOSA0LjQ3bC00NS42NSA1NWEzLjQ4IDMuNDggMCAwIDEgLTIuNyAxLjI3eiIgZmlsbD0iI2Y5ZjJmOSIvPjxwYXRoIGQ9Im0zMzIuNDYgMzUxLjJhMy41IDMuNSAwIDAgMSAtMi4yLTYuMjNsNS41OS00LjVjMS42NC0xLjQxIDMuNC0yLjg3IDUuMjQtNC4zOSAxNy43LTE0LjY3IDQyLTM0Ljc3IDQyLTc1LjFhMy41IDMuNSAwIDAgMSA3IDBjMCA0My42Mi0yNi43NyA2NS44MS00NC40OSA4MC40OS0xLjgyIDEuNTEtMy41NiAyLjk1LTUuMTggNC4zNWwtLjA4LjA2LTUuNjMgNC41NGEzLjUyIDMuNTIgMCAwIDEgLTIuMjUuNzh6IiBmaWxsPSIjZjlmMmY5Ii8+PHBhdGggZD0ibTE3Ni4wOSAyNzdhMy40OCAzLjQ4IDAgMCAxIC0yLjctMS4yN2wtNDUuNjUtNTVhMy41IDMuNSAwIDAgMSA1LjM5LTQuNDdsNDUuNjUgNTVhMy41MSAzLjUxIDAgMCAxIC0yLjY5IDUuNzR6IiBmaWxsPSIjZjlmMmY5Ii8+PHBhdGggZD0ibTE3OS41NSAzNTEuMmEzLjQ4IDMuNDggMCAwIDEgLTIuMTktLjc4bC01LjcyLTQuNmMtMS42Mi0xLjQtMy4zNi0yLjg0LTUuMTgtNC4zNS0xNy43Mi0xNC42OC00NC40Ni0zNi44Ny00NC40Ni04MC40N2EzLjUgMy41IDAgMCAxIDcgMGMwIDQwLjMzIDI0LjI1IDYwLjQzIDQyIDc1LjEgMS44MyAxLjUyIDMuNTkgMyA1LjIzIDQuMzlsNS41OSA0LjVhMy41IDMuNSAwIDAgMSAtMi4yIDYuMjN6IiBmaWxsPSIjZjlmMmY5Ii8+PHBhdGggZD0ibTM0NCAyODkuNTMtNy42MSA3MS44N2EyNS4wOSAyNS4wOSAwIDAgMSAtMS42NCA2LjcgMjUuNTYgMjUuNTYgMCAwIDEgLTE3Ljg0IDE1LjQ5bC0yNC43NSA1LjkzYTE1NSAxNTUgMCAwIDEgLTcyLjI0IDBsLTI0Ljc1LTUuOTNhMjUuNTggMjUuNTggMCAwIDEgLTE5LjQ4LTIyLjE5bC03LjY5LTcxLjg3YTI1LjgzIDI1LjgzIDAgMCAxIDE2LjEtMjYuNzEgMjUuNTUgMjUuNTUgMCAwIDEgOS41OS0xLjg0aDEyNC41OGEyNS44MyAyNS44MyAwIDAgMSAyNS43MyAyOC41NXoiIGZpbGw9IiNkZWNlZTUiLz48cGF0aCBkPSJtMzQ0IDI4OS41My03LjYxIDcxLjg3YTI1LjA5IDI1LjA5IDAgMCAxIC0xLjY0IDYuNyAyNC40NyAyNC40NyAwIDAgMSAtMy40MyAxLjA5bC0yNC43NyA1LjkzYTE1NS4xNyAxNTUuMTcgMCAwIDEgLTcyLjIyIDBsLTI0Ljc2LTUuOTNhMjUuNTggMjUuNTggMCAwIDEgLTE5LjU3LTIyLjE5bC03LjYtNzEuODhhMjUuNTcgMjUuNTcgMCAwIDEgMS43LTEyLjMgMjUuNTUgMjUuNTUgMCAwIDEgOS41OS0xLjg0aDEyNC41OGEyNS44MyAyNS44MyAwIDAgMSAyNS43MyAyOC41NXoiIGZpbGw9IiNmNGU2ZjQiLz48ZWxsaXBzZSBjeD0iMjYyLjMxIiBjeT0iMjcwLjU3IiBmaWxsPSIjZjlmMmY5IiByeD0iMjQuOTciIHJ5PSI3Ljg3Ii8+PGVsbGlwc2UgY3g9IjMwOS40NyIgY3k9IjI3MC41NyIgZmlsbD0iI2Y5ZjJmOSIgcng9IjE3Ljk0IiByeT0iNS42NSIvPjxwYXRoIGQ9Im0yOTkgMjk4IDkuNDItMy45MmMyLjg3LTEuMi43OC0zLjIxLTMuMzQtMy4yMWgtOTguMTdjLTQuMTIgMC02LjIxIDItMy4zNCAzLjIxbDkuNDMgMy45MmMyMy41NSA5Ljg2IDYyLjQ1IDkuODYgODYgMHoiIGZpbGw9IiNkZWNlZTUiLz48cGF0aCBkPSJtMzA1LjE5IDMzMi4xOSAxMC44MS01Ljg1YzMuMjktMS43OC44OS00Ljc3LTMuODItNC43N2gtMTEyLjMyYy00LjcxIDAtNy4xMSAzLTMuODIgNC43N2wxMC43NyA1Ljg1YzI2Ljk0IDE0LjYzIDcxLjQ0IDE0LjYzIDk4LjM4IDB6IiBmaWxsPSIjZGVjZWU1Ii8+PHBhdGggZD0ibTIyMi44MyA3Ni4zMyAyMi4zNCAxMS43N2EyMy4yNyAyMy4yNyAwIDAgMCAyMS42OSAwbDIyLjI3LTExLjc1YTMzLjE3IDMzLjE3IDAgMCAxIDI5LS45NGwyOS4yNyAxMy4wN2E2OC43IDY4LjcgMCAwIDEgNDAuNiA2MC4zNGwyLjU3IDc0LjA1YTguODUgOC44NSAwIDAgMSAtMTQuNSA3LjExbC0xMDcuMTQtODguOThhMjAuMjEgMjAuMjEgMCAwIDAgLTI1LjgzIDBsLTEwNy4yIDg5YTguODQgOC44NCAwIDAgMSAtMTQuNDktNy4xMWwyLjU5LTc0LjA4YTY4LjY5IDY4LjY5IDAgMCAxIDQwLjYzLTYwLjM0bDI5LjIzLTEzLjA3YTMzLjE1IDMzLjE1IDAgMCAxIDI4Ljk3LjkzeiIgZmlsbD0iIzUxMmYyZCIvPjwvc3ZnPg=="
              alt=""
              width="80px"
              height="80px"
            />
            <p> Always Wear Mask </p>
          </div>
          <div className="precaution">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3773/3773761.svg"
              alt=""
              width="80px"
              height="80px"
            />
            <p> Maintain Social Distance </p>
          </div>
          <div className="precaution">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3773/3773781.svg"
              alt=""
              width="80px"
              height="80px"
            />
            <p> Always Wash Hands with Soap </p>
          </div>
          <div className="precaution">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3773/3773731.svg"
              alt=""
              width="80px"
              height="80px"
            />
            <p> Sanitize The House and Clothes Properly on weekly Basis </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Covid;
