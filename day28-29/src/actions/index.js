const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=66e4ea1c6f3c46efba9122738210608&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        return dispatch({ type: "UPDATE_PLACE_DATA", payload: data });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { updatePlace, updatePlaceData, toggleTheme };
