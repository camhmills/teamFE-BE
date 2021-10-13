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

const initialState = [
  { name: "Tim", image: Tim },
  { name: "Deanna", image: Deanna },
  { name: "Matt", image: Matt },
  { name: "Jamie", image: Jamie },
  { name: "Dustin", image: Dustin },
  { name: "Justin", image: Justin },
  { name: "Brande", image: Brande },
  { name: "Britt", image: Britt },
  { name: "Jose", image: Jose },
  { name: "Cameron", image: Cameron },
  { name: "Ron", image: Ron },
  { name: "Pamela", image: Pamela },
  { name: "Jordan", image: Jordan },
  { name: "Jenny", image: Jenny },
  { name: "Zak", image: Zak },
  { name: "Xavier", image: Xavier },
];

const StudentData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default StudentData;
