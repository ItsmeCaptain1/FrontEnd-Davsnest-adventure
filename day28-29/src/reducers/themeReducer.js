const themeReducer = (state = false, action) => {
  console.log("THEME REDUCER");
  if (action.type === "TOGGLE_THEME") {
    return !state;
  }
  return state;
};
export default themeReducer;
