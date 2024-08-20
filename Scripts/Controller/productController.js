import { addToCart } from '../Models/cart.js';
import { displayIphoneCasesProducts,displayProducts } from '../Views/productView.js';
import { topSellerBabyProducts,popularApparelProducts } from '../Models/products.js';

export function renderCartItemsSummary() {
    displayIphoneCasesProducts();
    displayCartItems(cart);

    document.querySelectorAll('.js-product-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            displayCartItems(cart); // Refresh cart display
        });
    });
}

export function renderProductSummary()
{
    
    displayProducts(topSellerBabyProducts, '.js-popularApparelProducts-container');
    displayProducts(popularApparelProducts, '.js-topSellerBabyProducts-container');
    document.querySelectorAll('.js-product-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            displayCartItems(cart); // Refresh cart display
        });
    });
}