import React from "react";
import "./Teams.css";
export default function TeamFrontEnd(props) {
  const { student } = props;
  return (
    <div>
      <h1>Team Front End</h1>
      <div className="frontend">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>
              <div>
                <button>Team Frontend</button>
                <button>Team Backend</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
