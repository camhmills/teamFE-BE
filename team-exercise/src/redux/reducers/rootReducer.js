import { combineReducers } from "redux";
import StudentData from "./studentData";
import FrontEnd from "./frontEnd";
import Backend from "./backEnd";

const rootReducer = combineReducers({
  // insert your reducers here
  StudentData,
  FrontEnd,
  Backend,
});

export default rootReducer;
