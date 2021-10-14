import React from "react";
import "./Teams.css";
import { useDispatch } from "react-redux";

export default function TeamFrontEnd(props) {
  const { student, moveStudents } = props;
  const dispatch = useDispatch();
  return (
    <div class="holding-container">
      <h1>Team Front End</h1>
      <div className="frontend">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>
              <div>
                <button
                  name="backend"
                  onClick={(e) =>
                    moveStudents(student, dispatch, student.team, e.target.name)
                  }
                >
                  Team Backend
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
