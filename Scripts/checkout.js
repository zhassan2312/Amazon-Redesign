import { cart } from './cart.js';
import { popularApparelProducts,iphoneCasesProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => 
    {
    let cartSummaryHTML = '';
    displayIphoneCasesProducts();
    cart.forEach((cartItem) => {
        const productName = cartItem.productName;
        const matchingProduct = popularApparelProducts.find(product => product.name === productName);

        if (!matchingProduct) {
            console.error(`Product not found: ${productName}`);
            return;
        }

        cartSummaryHTML += `
            <div class="cartItemContainer">        
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
                                <button class="cartItemQuantityButton">-</button>
                                <input type="text" value="${cartItem.quantity}" class="cartItemQuantityInput">
                                <button class="cartItemQuantityButton">+</button>
                            </div>
                            <button class="cartItemDeleteButton">Delete</button>
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

    document.querySelector('.js-cart-items-container').innerHTML = cartSummaryHTML;

    document.querySelectorAll('.cartButton')
        .forEach
        ((button) => 
            {
                button.addEventListener
                ('click', () => 
                {
                    const productName= button.dataset.productName;
                    addToCart(productName);
                    
                }
                );
            }
        );
        // Call the function to add event listeners to the cart buttons
        updateCartQuantity();
});





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
                        <button class="cartButton js-cart-button" data-product-name="${product.name}">
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
        console.log('iPhone cases products displayed');
    } else {
        console.error('Element with class .js-carousel-cart-container not found.');
    }
}

