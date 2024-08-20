import { UI } from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();

    if (window.location.pathname === '/homePage.html' || window.location.pathname === '/') {
        // Homepage-specific code
        ui.product.displayPopularApparelProducts();
        ui.product.displayTopSellerBabyProducts();
        ui.updateCartQuantity();

        document.querySelectorAll('.js-product-cart-button').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                ui.cart.addToCart(productId);
                ui.updateCartQuantity();
            });
        });
    } else if (window.location.pathname === '/cart.html') {
        // Cart page-specific code
        ui.displayCartItems();
        ui.product.displayIphoneCasesProducts();
        ui.renderPaymentSummary();
        ui.updateCartQuantity();

        // Add event listeners for the iPhone case products
        document.querySelectorAll('.js-product-cart-button').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                ui.cart.addToCart(productId);
                ui.updateCartQuantity();
                ui.displayCartItems();
            });
        });
    }

    const cartButtonContainer = document.querySelector('.js-cart-button-container');
    if (cartButtonContainer) {
        cartButtonContainer.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    } else {
        console.error('Element with class .js-cart-button-container not found.');
    }
});