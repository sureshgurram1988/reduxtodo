
export const add_to_cart = (value) => async dispatch => {
  dispatch({
    type: "ADD_TO_CART", 
    payload: value
  });
}
export const remove_from_cart = (value) => async dispatch => {
  dispatch({
    type: "REMOVE_FROM_CART", 
    payload: {name:value}
  });
}