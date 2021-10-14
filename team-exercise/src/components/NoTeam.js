import React from "react";
import "./Teams.css";
import { useDispatch } from "react-redux";
export default function NoTeam(props) {
  const { student, moveStudents } = props;
  const dispatch = useDispatch();
  return (
    <div class="holding-container">
      <h1>No Team</h1>
      <div className="no-team">
        {student?.map((student, index) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>

              <button
                name="frontend"
                onClick={(e) =>
                  moveStudents(student, dispatch, student.team, e.target.name)
                }
              >
                Team Frontend
              </button>
              <button
                name="backend"
                onClick={(e) =>
                  moveStudents(student, dispatch, student.team, e.target.name)
                }
              >
                Team Backend
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
