import { addToCart, updateCartQuantity } from './cart.js';
import { popularApparelProducts, topSellerBabyProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    displayPopularApparelProducts();
    displayTopSellerBabyProducts();

    document.querySelectorAll('.js-product-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity(); // Update cart quantity on homepage
        });
    });

    // Call the function to add event listeners to the cart buttons
    updateCartQuantity();

    // Add event listener to the cart container to open cart.html
    document.querySelector('.js-cart-button-container').addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
});

function displayPopularApparelProducts() {
    let productsHTML = '';

    popularApparelProducts.forEach((product) => {
        productsHTML += `
        <div class="productContainer">
            <img class="productImage" src="${product.image}" alt="Product">
            <p class="productName">${product.name}</p>
            <div class="productInfoContainer">
                <div class="ratingPriceContainer">
                    <div class="starContainer">
                        <div class="star">
                            <img src="Assets/Images/HomePage/rating-${product.rating.stars}-star.png" alt="Star">
                        </div>
                        <p class="ratingInNumbers">${product.rating.count}</p>
                    </div>
                    <p class="price">$${(product.priceCents / 100).toFixed(2)}</p>
                </div>
                <p class="productAvailibilityText">${product.available}</p>
                <div class="productButtonContainer">
                    <select class="productSelectOption">
                        <option value="Default">See Options</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div class="productAddToCartContainer">
                        <button class="wishListButton">
                            <img src="Assets/Icons/wishList.svg" alt="wishList">
                        </button>
                        <button class="cartButton js-product-cart-button" data-product-id="${product.id}">
                            <img src="Assets/Icons/addToCart.svg" alt="Cart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    const container = document.querySelector('.js-popularApparelProducts-containers');
    if (container) {
        container.innerHTML = productsHTML;
    } else {
        console.error('Element with class .js-popularApparelProducts-container not found.');
    }
}

function displayTopSellerBabyProducts() {
    let productsHTML = '';

    topSellerBabyProducts.forEach((product) => {
        productsHTML += `
        <div class="productContainer">
            <img class="productImage" src="${product.image}" alt="Product">
            <p class="productName">${product.name}</p>
            <div class="productInfoContainer">
                <div class="ratingPriceContainer">
                    <div class="starContainer">
                        <div class="star">
                            <img src="Assets/Images/HomePage/rating-${product.rating.stars}-star.png" alt="Star">
                        </div>
                        <p class="ratingInNumbers">${product.rating.count}</p>
                    </div>
                    <p class="price">$${(product.priceCents / 100).toFixed(2)}</p>
                </div>
                <p class="productAvailibilityText">${product.available}</p>
                <div class="productButtonContainer">
                    <select class="productSelectOption">
                        <option value="Default">See Options</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div class="productAddToCartContainer">
                        <button class="wishListButton">
                            <img src="Assets/Icons/wishList.svg" alt="wishList">
                        </button>
                        <button class="cartButton js-product-cart-button" data-product-id="${product.id}">
                            <img src="Assets/Icons/addToCart.svg" alt="Cart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    const container = document.querySelector('.js-topSellerBabyProducts-containers');
    if (container) {
        container.innerHTML = productsHTML;
    } else {
        console.error('Element with class .js-topSellerBabyProducts-container not found.');
    }
}