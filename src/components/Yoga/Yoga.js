import React from "react";
import "./Yoga.css";
import aasans from "./aasans";

function Yoga() {
  return (
    <div className="yoga">
      {aasans.map((e) => (
        <div className="yoga__card">
          <img src={`/images/yoga/${e.name}.gif`} alt={e.name} width="100%" />{" "}
          <br />
          <h2 className="yoga_pose_title">{e.name}</h2>
          <p className="yoga_pose_detail">{e.description}</p> <br />
        </div>
      ))}
    </div>
  );
}

export default Yoga;
