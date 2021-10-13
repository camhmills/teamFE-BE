import React from "react";
import "./Teams.css";
export default function NoTeam(props) {
  const { student } = props;

  return (
    <div>
      <h1>No Team</h1>
      <div className="no-team">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>

              <button>Team Frontend</button>
              <button>Team Backend</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
