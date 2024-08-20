import { addToCart, updateCartQuantity, removeFromCart, cart } from './cart.js'; // Assuming getCart is a function that returns the cart array
import { popularApparelProducts, iphoneCasesProducts,topSellerBabyProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    displayIphoneCasesProducts();
    displayCartItems();

    // Event listener for adding products to the cart
    document.querySelectorAll('.js-product-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            displayCartItems(); // Refresh cart display
        });
    });
});

function displayCartItems() {
    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
        const productId = cartItem.id;
        let matchingProduct = popularApparelProducts.find(product => product.id === productId);
        if(!matchingProduct)
        {
            matchingProduct=topSellerBabyProducts.find(product=>product.id===productId);
            if(!matchingProduct)
            {
                matchingProduct=iphoneCasesProducts.find(product=>product.id===productId);

            }
        }
        cartSummaryHTML += `
            <div class="cartItemContainer js-cart-item-container-${matchingProduct.id}">        
                <div class="cartItem">
                    <input type="checkbox" id="selectItems" class="cartItemCheckBox">
                    <div class="cartItemImgContainer">
                        <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
                    </div>
                    <div class="cartItemDetails">
                        <p class="cartItemName">${matchingProduct.name}</p>
                        <p class="cartItemAvailibility">Available</p>
                        <p class="cartItemDeliveryInfo">FREE delivery Sun, Jul 21 on $35 of items shipped by Amazon</p>
                        <div class="cartItemFreeReturnOption">
                            <p>FREE Returns</p>
                            <img src="Assets/Icons/downIcon.svg" alt="Return">
                        </div>
                        <div class="cartItemGiftCheckContainer">
                            <input type="checkbox" id="giftCheck" class="cartItemGiftCheckBox">
                            <label for="giftCheck">This is a gift</label>
                            <a href="#">Learn more</a>
                        </div>
                        <p class="cartitemVariantInfo">Size: M</p>
                        <div class="cartItemButtonContainer">
                            <div class="cartItemQuantityContainer">
                                <button class="cartItemQuantityButton js-decrease-quantity" data-product-id="${matchingProduct.id}">-</button>
                                <input type="text" value="${cartItem.quantity}" class="cartItemQuantityInput">
                                <button class="cartItemQuantityButton js-increase-quantity" data-product-id="${matchingProduct.id}">+</button>
                            </div>
                            <button class="cartItemDeleteButton js-cart-item-delete-button" data-product-id="${matchingProduct.id}">Delete</button>
                            <div class="cartItemButtonContainerDivider"></div>
                            <button class="cartItemSaveButton">Save for later</button>
                            <div class="cartItemButtonContainerDivider"></div>
                            <button class="cartItemCompareButton">Compare with similar items</button>
                            <div class="cartItemButtonContainerDivider"></div>
                            <button class="cartItemShareButton">Share</button>
                        </div>
                    </div>
                </div>
                <p class="cartItemPrice"><span style="color: #FF9B02;">$</span>${(matchingProduct.priceCents / 100).toFixed(2)}</p>
            </div>
        `;
    });

    const container = document.querySelector('.js-cart-items-container');
    if (container) {
        container.innerHTML = cartSummaryHTML;
        setupCartEventListeners(); // Set up event listeners for cart items
    } else {
        console.error('Element with class .js-cart-items-container not found.');
    }
}

function setupCartEventListeners() {
    document.querySelectorAll('.js-cart-item-delete-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            removeFromCart(productId);
            displayCartItems(); // Refresh cart display
        });
    });

    document.querySelectorAll('.js-increase-quantity').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            displayCartItems(); // Refresh cart display
        });
    });

    document.querySelectorAll('.js-decrease-quantity').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            decreaseQuantity(productId);
            displayCartItems(); // Refresh cart display
        });
    });
}

function displayIphoneCasesProducts() {
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

function decreaseQuantity(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id === productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem && matchingItem.quantity > 1) {
        matchingItem.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    updateCartQuantity();
    saveToStorage();
}