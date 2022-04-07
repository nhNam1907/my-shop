import cartSlice from "./cartslice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartSlice,
})

export default rootReducer;