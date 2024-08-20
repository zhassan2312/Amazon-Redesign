import {  iphoneCasesProducts } from '../Models/products.js';

export function displayIphoneCasesProducts() {
    let productsHTML = '';
    iphoneCasesProducts.forEach((product) => {
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

    const container = document.querySelector('.js-carousel-cart-container');
    if (container) {
        container.innerHTML = productsHTML;
    } else {
        console.error('Element with class .js-carousel-cart-container not found.');
    }
}



export function displayProducts(products, containerSelector) {
    const productsHTML = products.map(generateProductHTML).join('');
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = productsHTML;
    } else {
        console.error(`Element with selector ${containerSelector} not found.`);
    }
}

function generateProductHTML(product) {
    return `
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
                <p class="productAvailabilityText">${product.available}</p>
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
}