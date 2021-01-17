export const addItemToCart = (title, price, genre,_id) => ({
   
    type:'ADD_TO_CART',
    payload:{title,price,genre,_id}
    
})
export const removeItem = (product,price) => ({
    type:'REMOVE_FROM_CART',
    payload:{product,price}
    
})
export const cleanItem = () => ({
    type:'CLEAN_CART'
    
})
