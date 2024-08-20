export let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

export function addToCart(productId) {
    let matchingItem = cart.find(cartItem => cartItem.id === productId);
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    updateCartQuantity();
    saveToStorage();
}

export function updateCartQuantity() {
    let cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    } else {
        console.error('Element with class .js-cart-quantity not found.');
    }
}

export function removeFromCart(productId) {
    cart = cart.filter(cartItem => cartItem.id !== productId);
    updateCartQuantity();
    saveToStorage();
}

export function decreaseQuantity(productId) {
    let matchingItem = cart.find(cartItem => cartItem.id === productId);
    if (matchingItem && matchingItem.quantity > 1) {
        matchingItem.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    updateCartQuantity();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}