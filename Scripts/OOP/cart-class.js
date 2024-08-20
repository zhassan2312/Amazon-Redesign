// Cart.js
export class Cart {
    constructor() {
        this.cart = [];
        this.loadFromStorage();
    }

    addToCart(productId) {
        let matchingItem = this.cart.find(cartItem => cartItem.id === productId);
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cart.push({ id: productId, quantity: 1 });
        }
        this.updateCartQuantity();
        this.saveToStorage();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== productId);
        this.updateCartQuantity();
        this.saveToStorage();
    }

    updateCartQuantity() {
        let cartQuantity = this.cart.reduce((total, item) => total += item.quantity, 0);
        const cartQuantityElement = document.querySelector('.js-cart-quantity');
        if (cartQuantityElement) {
            cartQuantityElement.innerHTML = cartQuantity;
        } else {
            console.error('Element with class .js-cart-quantity not found.');
        }
    }

    loadFromStorage() {
        this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        this.updateCartQuantity();
    }
    getTotalQuantity() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    decreaseQuantity(productId) {
        let matchingItem = this.cart.find(cartItem => cartItem.id === productId);
        if (matchingItem && matchingItem.quantity > 1) {
            matchingItem.quantity -= 1;
        } else {
            this.removeFromCart(productId);
        }
        this.updateCartQuantity();
        this.saveToStorage();
    }
}