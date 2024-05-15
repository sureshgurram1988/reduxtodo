// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// import other reducers here if you have any

const reducer = combineReducers({
  cart: cartReducer,
  // other reducers go here
});

export default reducer;
