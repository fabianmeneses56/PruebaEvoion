/* export const sumItems = */

const initialState = {
    cartItems:[],
    sumItems:[],
    check:false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cartItems:[action.payload,...state.cartItems]}
        case 'REMOVE_FROM_CART':
            return{
           /*      console.log(state.cartItems), */
                cartItems: state.cartItems.filter(cartItem => cartItem.title !== action.payload)
            }
        case 'CLEAN_CART':
            return{cartItems:[]} 
    }

    return state
}

export default cartReducer