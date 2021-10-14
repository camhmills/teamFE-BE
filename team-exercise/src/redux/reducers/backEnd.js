import { REMOVE_BACKEND, BACKEND, RESET } from "../action-types/moveStudents";
const initialState = [];

const BackEnd = (state = initialState, action) => {
  switch (action.type) {
    case BACKEND:
      return [...state, action.payload];
    case REMOVE_BACKEND:
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
export default BackEnd;
