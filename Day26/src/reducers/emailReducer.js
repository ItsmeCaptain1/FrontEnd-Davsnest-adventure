const emailReducer = (state = "", action) => {
  if (action.type === "changeEmail") return action.data;
  return state;
};
export default emailReducer;
