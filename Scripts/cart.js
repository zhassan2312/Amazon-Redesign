export let cart = [
    {
        id: '1', // Add a unique id
        productName: 'Men’s Leather Jacket',
        quantity: 3
    }
];

export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id === productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }
}

export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quanity').innerHTML = cartQuantity;
}

export function removeFromCart(productId) {
    const updatedCart = cart.filter(cartItem => cartItem.id !== productId);
    cart = updatedCart;
}