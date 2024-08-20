import { addToCart, removeFromCart, decreaseQuantity, cart } from '../Models/cart.js';
import { displayCartItems } from '../Views/cartView.js';

export function setupCartEventListeners() {
    document.querySelectorAll('.js-cart-item-delete-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            removeFromCart(productId);
            displayCartItems(cart); // Refresh cart display
        });
    });

    document.querySelectorAll('.js-increase-quantity').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            displayCartItems(cart); // Refresh cart display
        });
    });

    document.querySelectorAll('.js-decrease-quantity').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            decreaseQuantity(productId);
            displayCartItems(cart); // Refresh cart display
        });
    });
}