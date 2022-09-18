import { combineReducers } from "redux";
import addIncrement from "./dataReducer";
import allUser from "./allUserReducer";
const rootReduser = combineReducers({
  addIncrement,
  allUser
});

export default rootReduser;
