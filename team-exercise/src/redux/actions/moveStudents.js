export const moveStudents = (student, dispatch, currentTeam, futureTeam) => {
  const upperCurrentTeam = currentTeam.toUpperCase();
  const upperFutureTeam = futureTeam.toUpperCase();
  dispatch({
    type: upperFutureTeam,
    payload: { ...student, team: futureTeam },
  });
  dispatch({ type: `REMOVE_${upperCurrentTeam}`, payload: student });
};
