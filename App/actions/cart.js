export const addItemToCart = (title, price, genre) => ({
   
    type:'ADD_TO_CART',
    payload:{title,price,genre}
    
})
export const removeItem = (product) => ({
    type:'REMOVE_FROM_CART',
    payload:product
    
})
export const cleanItem = () => ({
    type:'CLEAN_CART'
    
})
