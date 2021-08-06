const usernameReducer = (state = "", action) => {
  if (action.type === "changeName") return action.data;
  return state;
};
export default usernameReducer;
