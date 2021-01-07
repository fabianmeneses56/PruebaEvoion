


const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.title !== action.payload)
        case 'CLEAN_CART':
            return state=[]
    }

    return state
}

export default cartReducer