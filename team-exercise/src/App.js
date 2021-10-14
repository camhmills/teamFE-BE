import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TeamBackend from "./components/TeamBackEnd";
import TeamFrontEnd from "./components/TeamFrontEnd";
import NoTeam from "./components/NoTeam";
import { moveStudents } from "./redux/actions/moveStudents";
function App() {
  const student = useSelector((state) => state.StudentData);
  const frontEnd = useSelector((state) => state.FrontEnd);
  const backEnd = useSelector((state) => state.Backend);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <div className="teams-container">
        <NoTeam moveStudents={moveStudents} student={student} />
        <TeamBackend moveStudents={moveStudents} student={backEnd} />
        <TeamFrontEnd moveStudents={moveStudents} student={frontEnd} />
      </div>
    </div>
  );
}

export default App;
