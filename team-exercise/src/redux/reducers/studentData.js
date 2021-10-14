import Tim from "../../assets/tim.png";
import Deanna from "../../assets/deanna.png";
import Matt from "../../assets/matt.png";
import Jamie from "../../assets/jamie.png";
import Dustin from "../../assets/dustin.png";
import Justin from "../../assets/justin.png";
import Brande from "../../assets/brande.png";
import Britt from "../../assets/britt.png";
import Jose from "../../assets/jose.png";
import Cameron from "../../assets/cameron.png";
import Ron from "../../assets/ron.png";
import Pamela from "../../assets/pam.png";
import Jordan from "../../assets/jordan.png";
import Jenny from "../../assets/jenny.png";
import Zak from "../../assets/zak.png";
import Xavier from "../../assets/xavier.png";
import { REMOVE_NOTEAM, RESET } from "../action-types/moveStudents";

const initialState = [
  { name: "Tim", image: Tim, team: "noteam" },
  { name: "Deanna", image: Deanna, team: "noteam" },
  { name: "Matt", image: Matt, team: "noteam" },
  { name: "Jamie", image: Jamie, team: "noteam" },
  { name: "Dustin", image: Dustin, team: "noteam" },
  { name: "Justin", image: Justin, team: "noteam" },
  { name: "Brande", image: Brande, team: "noteam" },
  { name: "Britt", image: Britt, team: "noteam" },
  { name: "Jose", image: Jose, team: "noteam" },
  { name: "Cameron", image: Cameron, team: "noteam" },
  { name: "Ron", image: Ron, team: "noteam" },
  { name: "Pamela", image: Pamela, team: "noteam" },
  { name: "Jordan", image: Jordan, team: "noteam" },
  { name: "Jenny", image: Jenny, team: "noteam" },
  { name: "Zak", image: Zak, team: "noteam" },
  { name: "Xavier", image: Xavier, team: "noteam" },
];

const StudentData = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_NOTEAM:
      const noTeam = state;
      const noTeamFiltered = noTeam.filter(
        (student) => student.name !== action.payload.name
      );
      return noTeamFiltered;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default StudentData;
