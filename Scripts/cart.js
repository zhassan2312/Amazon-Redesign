export const cart = 
[
    
];



export function addToCart(productName)
{
    let matchingItem;
    cart.forEach
    (
        (cartItem) => 
        {
            if (cartItem.name === productName) 
            {
                matchingItem = cartItem;
            }
        }
    );

    if (matchingItem) 
    {
        matchingItem.quantity += 1;
    } 
    else 
    {
        cart.push
        (
            {
                name: productName,
                quantity: 1
            }
        );
    }

}


export function updateCartQuantity()
{
    let cartQuantity=0;
    cart.forEach
    (
        (item) => 
        {
            cartQuantity += item.quantity;
        }
    );

    document.querySelector('.js-cart-quanity').innerHTML = cartQuantity;
}