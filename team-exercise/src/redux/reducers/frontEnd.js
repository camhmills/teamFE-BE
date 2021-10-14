import { REMOVE_FRONTEND, FRONTEND, RESET } from "../action-types/moveStudents";
const initialState = [];

const FrontEnd = (state = initialState, action) => {
  switch (action.type) {
    case FRONTEND:
      return [...state, action.payload];
    case REMOVE_FRONTEND:
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
export default FrontEnd;
