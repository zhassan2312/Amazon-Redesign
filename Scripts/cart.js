export let cart ;

loadFromStorage();

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
    updateCartQuantity(); // Update cart quantity after adding an item
    saveToStorage();
}

export function loadFromStorage() {
    cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [
        {
            id:'1',
            quantity:2
        }
    
    ];
    updateCartQuantity();
}
export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    } else {
        console.error('Element with class .js-cart-quantity not found.');
    }
}

export function removeFromCart(productId) {
    const updatedCart = cart.filter(cartItem => cartItem.id !== productId);
    cart = updatedCart;
    updateCartQuantity(); // Update cart quantity after removing an item
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
