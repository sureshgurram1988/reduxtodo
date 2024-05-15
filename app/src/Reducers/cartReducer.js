const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
   switch(type) {
     case 'ADD_TO_CART':
       return [...state, payload];
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.name !== payload.name);
        default:
          return state;
   }
}
export default cartReducer