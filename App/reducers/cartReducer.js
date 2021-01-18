const initialState = {
  cartItems: [],
  sumItems: [],
  check: false,
  quantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!state.cartItems.find(item => item._id.$oid === action.payload._id.$oid)) {
        state.cartItems.push({
            ...action.payload,
            quantity: 1
        })
    }
      return {
        ...state,
        cartItems: [...state.cartItems],
        sumItems: [action.payload.price, ...state.sumItems],
       /*  quantity: 1, */
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id.$oid !== action.payload.product,
        ),
        sumItems: state.sumItems.filter(
          (cartItemM) => cartItemM !== action.payload.price,
        ),
      };
    case 'INCREASE':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cardItem) => cardItem._id.$oid === action.payload._id.$oid
        ),
        quantity: state.quantity + 1,
      };
    case 'CLEAN_CART':
      return {cartItems: []};
  }

  return state;
};

export default cartReducer;
