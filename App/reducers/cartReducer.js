export const sumItems = (cartItems) => {
  const itemCount = cartItems.reduce(
    (total, product) => total + product.inventory,
    0,
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.inventory, 0)
    .toFixed(2);
  return {itemCount, total};
};

const initialState = {
  cartItems: [],
  sumItems: [],
  check: false,
  quantity:0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
       /*  console.log(action.payload); */
      return {
        ...state,
        cartItems:[action.payload,...state.cartItems],
            
            sumItems: [action.payload.price, ...state.sumItems],
            quantity:1
        
      };
    case 'REMOVE_FROM_CART':
      return {
          ...state,
        /*      console.log(state.cartItems), */
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id.$oid !== action.payload.product,
        ),
        sumItems: state.sumItems.filter(
          (cartItemM) => cartItemM !== action.payload.price,
        ),
      };
    case 'INCREASE':
        console.log(action.payload);
      /*   state.cartItems.filter((cardItem)=>cardItem._id.$oid === action.payload._id.$oid?action.payload:cardItem); */
        return{
             ...state,
            cartItems: state.cartItems.filter((cardItem)=>cardItem._id.$oid === action.payload._id.$oid?action.payload:cardItem),
            quantity:state.quantity+1
        };
    case 'CLEAN_CART':
      return {cartItems: []};
    
  }

  return state;
};

export default cartReducer;
