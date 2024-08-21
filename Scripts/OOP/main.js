import { UI } from './UI.js';
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();

    if (window.location.pathname === '/' || window.location.pathname === '/homePage.html') {
        // Homepage-specific code
        console.log('Displaying clothes products');
        ui.clothes.displayProducts('.js-popularApparelProducts-containers');
        console.log('Displaying baby products');
        ui.babyProducts.displayProducts('.js-topSellerBabyProducts-containers');
        ui.updateCartQuantity();

        document.querySelectorAll('.js-product-cart-button').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                const selectedVariant = getSelectedVariant(button);
                ui.cart.addToCart(productId, selectedVariant);
                ui.updateCartQuantity();
            });
        });
    } else if (window.location.pathname === '/cart.html') {
        // Cart page-specific code
        ui.displayCartItems();
        ui.phones.displayProducts('.js-carousel-cart-container');
        ui.renderPaymentSummary();
        ui.updateCartQuantity();

        // Add event listeners for the iPhone case products
        document.querySelectorAll('.js-product-cart-button').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                const selectedVariant = getSelectedVariant(button);
                ui.cart.addToCart(productId, selectedVariant);
                ui.updateCartQuantity();
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

function getSelectedVariant(button) {
    const variantSelect = button.closest('.productContainer').querySelector('.productSelectOption');
    return variantSelect ? variantSelect.value : 'Default';
}