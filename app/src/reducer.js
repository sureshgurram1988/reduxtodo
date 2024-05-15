import { combineReducers } from "redux";
import cartReducer from "./Reducers/cartReducer";


const reducer = combineReducers({
    cart: cartReducer
})
export default reducer