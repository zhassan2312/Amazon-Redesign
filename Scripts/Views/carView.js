import { popularApparelProducts, topSellerBabyProducts, iphoneCasesProducts } from '../Models/products.js';

export function displayCartItems(cart) {
    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
        const productId = cartItem.id;
        let matchingProduct = popularApparelProducts.find(product => product.id === productId) ||
                              topSellerBabyProducts.find(product => product.id === productId) ||
                              iphoneCasesProducts.find(product => product.id === productId);

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
    } else {
        console.error('Element with class .js-cart-items-container not found.');
    }
}