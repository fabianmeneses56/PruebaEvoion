const initialState = {
  cartItems: [],
  sumItems: [],
  checkout: false,
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
        checkout: false,
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
      state.cartItems[state.cartItems.findIndex(item => item._id.$oid === action.payload._id.$oid)].quantity++
      return {
        ...state,
        cartItems:[...state.cartItems]
      };
    case 'CHECKOUT':
      return{
        cartItems: [],
        sumItems:[],
        checkout:true
      };
    case 'CLEAN_CART':
      return {
        cartItems: [],
        sumItems:[]
      };
  }

  return state;
};

export default cartReducer;
