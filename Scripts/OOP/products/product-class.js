// BaseProduct.js
export class Product {
    constructor(products) {
        this.products = products;
    }

    getProduct(productId) {
        return this.products.find(product => product.id === productId);
    }

    displayProducts(containerSelector) {
        let productsHTML = '';
        this.products.forEach((product) => {
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
                        <div class="productButtonContainer js-product-button-container">
                            <select class="productSelectOption">
                                ${Object.values(product.variant).map(variant => `<option value="${variant}">${variant}</option>`).join('')}
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

        const container = document.querySelector(containerSelector);
        if (container) {
            container.innerHTML = productsHTML;
        } else {
            console.error(`Element with selector ${containerSelector} not found.`);
        }
    }
}