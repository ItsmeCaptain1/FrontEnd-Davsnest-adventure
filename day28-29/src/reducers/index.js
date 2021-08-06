import updatePlace from "./updatePlace";
import updatePlaceData from "./updatePlaceData";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  place: updatePlace,
  placeData: updatePlaceData,
  theme: themeReducer,
});
export default rootReducers;
