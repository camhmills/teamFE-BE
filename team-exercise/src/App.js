import "./App.css";
import { useSelector } from "react-redux";
import TeamBackend from "./components/TeamBackEnd";
import TeamFrontEnd from "./components/TeamFrontEnd";
import NoTeam from "./components/NoTeam";
function App() {
  const student = useSelector((state) => state.StudentData);
  const frontEnd = useSelector((state) => state.frontEnd);
  const backEnd = useSelector((state) => state.backEnd);

  return (
    <div className="App">
      <div className="teams-container">
        <NoTeam student={student} />
        <TeamBackend student={backEnd} />
        <TeamFrontEnd student={frontEnd} />
      </div>
    </div>
  );
}

export default App;
