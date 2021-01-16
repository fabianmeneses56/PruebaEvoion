export const sumItems =(cartItems)=>{
    const itemCount=cartItems.reduce((total,product)=>total+product.inventory,0);
    let total = cartItems.reduce((total, product) => total + product.price * product.inventory, 0).toFixed(2);
    return { itemCount, total } 
}

const initialState = {
    cartItems:[],
    sumItems:[],
    check:false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cartItems:[action.payload,...state.cartItems],sumItems:[action.payload.price,...state.sumItems]}
        case 'REMOVE_FROM_CART':
            return{
           /*      console.log(state.cartItems), */
                cartItems: state.cartItems.filter(cartItem => cartItem._id.$oid !== action.payload.product),
                sumItems: state.sumItems.filter(cartItemM => cartItemM !== action.payload.price)
            }
        case 'CLEAN_CART':
            return{cartItems:[]} 
    }

    return state
}

export default cartReducer