import React from "react";
import "./Teams.css";
export default function TeamBackend(props) {
  const { student } = props;
  console.log(student);
  return (
    <div>
      <h1>Team Backend</h1>
      <div className="backend">
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
