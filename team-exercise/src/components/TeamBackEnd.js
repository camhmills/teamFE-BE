import React from "react";
import "./Teams.css";
import { useDispatch } from "react-redux";
export default function TeamBackend(props) {
  const { student, moveStudents } = props;
  const dispatch = useDispatch();
  return (
    <div class="holding-container">
      <h1>Team Backend</h1>
      <div className="backend">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>
              <div>
                <button
                  name="frontend"
                  onClick={(e) =>
                    moveStudents(student, dispatch, student.team, e.target.name)
                  }
                >
                  Team Frontend
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
