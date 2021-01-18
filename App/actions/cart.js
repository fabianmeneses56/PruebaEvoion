export const addItemToCart = (movie) => ({
   
    type:'ADD_TO_CART',
    payload:movie
    
})
export const increaseMovie = (movie) => ({
   
    type:'INCREASE',
    payload:movie
    
})
export const removeItem = (product,price) => ({
    type:'REMOVE_FROM_CART',
    payload:{product,price}
    
})
export const cleanItem = () => ({
    type:'CLEAN_CART'
    
})
