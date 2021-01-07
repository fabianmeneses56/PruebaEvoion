export const addItemToCart = (title, price, genre) => ({
   
    type:'ADD_TO_CART',
    payload:{title,price,genre}
    
})
