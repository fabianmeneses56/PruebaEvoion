export const addItemToCart = (title, price, genre,_id) => ({
   
    type:'ADD_TO_CART',
    payload:{title,price,genre,_id}
    
})
export const removeItem = (product) => ({
    type:'REMOVE_FROM_CART',
    payload:product
    
})
export const cleanItem = () => ({
    type:'CLEAN_CART'
    
})
