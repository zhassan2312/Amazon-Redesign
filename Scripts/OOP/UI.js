import { BabyProducts } from './products/baby-products.js';
import { Phones } from './products/phones.js';
import { Clothes } from './products/clothes.js';
import { Cart } from './cart-class.js';

export class UI {
    constructor() {
        this.clothes = new Clothes();
        this.phones = new Phones();
        this.babyProducts = new BabyProducts();
        this.cart = new Cart();
    }

    renderPaymentSummary() {
        let productPriceCents = 0;
        let cartTotalQuantity = 0;
        this.cart.cart.forEach((cartItem) => {
            let productId = cartItem.id;
            let matchingProduct = this.getProduct(productId);
            cartTotalQuantity += cartItem.quantity;
            productPriceCents += (matchingProduct.priceCents * cartItem.quantity);
        });

        const subtotalTextElement = document.querySelector('.js-subtotal-text');
        const subtotalItemElement = document.querySelector('.js-subtotal-item');

        if (subtotalTextElement && subtotalItemElement) {
            subtotalTextElement.innerHTML = `${(productPriceCents / 100).toFixed(2)}`;
            subtotalItemElement.innerHTML = `${cartTotalQuantity}`;
        } else {
            console.error('Subtotal elements not found.');
        }

        let shippingCents = 0;

        if(cartTotalQuantity > 0) {
            shippingCents = 299;
        }

        let taxCents = (productPriceCents * 0.05);
        let subTotalCents = shippingCents + productPriceCents;
        let totalCents = subTotalCents + taxCents;
        this.generatePriceSummaryHTML(cartTotalQuantity, productPriceCents, shippingCents, subTotalCents, taxCents, totalCents);
    }

    updateCartQuantity() {
        const cartQuantityElement = document.querySelector('.js-cart-quantity');
        if (cartQuantityElement) {
            cartQuantityElement.innerHTML = this.cart.getTotalQuantity();
        } else {
            console.error('Element with class .js-cart-quantity not found.');
        }
    }

    generatePriceSummaryHTML(cartTotalQuantity, productPriceCents, shippingCents, subTotalCents, taxCents, totalCents) {
        let productPriceHTML  = `
        <div class="cartBillHeader">
            <img class="cartBillInfoIcon" src="Assets/Icons/infoIcon.svg">
            <p class="cartBillHeadingText">Add $26.10 of eligible items to your order to qualify for FREE Shipping.</p>
        </div>
        <button class="cartBillDetailsButton">
            Details
        </button>
        <div class="cartBillSubTotalContainer">
            <p class="cartBillSubTotalHeading">Items (${cartTotalQuantity}):</p>
            <p class="cartBillSubTotal">$${(productPriceCents / 100).toFixed(2)}</p>
        </div>
        <div class="cartBillSubTotalContainer">
            <p class="cartBillSubTotalHeading">Shipping:</p>
            <p class="cartBillSubTotal">$${(shippingCents / 100).toFixed(2)}</p>
        </div>
        <div class="cartBillSubTotalContainer">
            <p class="cartBillSubTotalHeading">Total Before Tax:</p>
            <p class="cartBillSubTotal">$${(subTotalCents / 100).toFixed(2)}</p>
        </div>
        <div class="cartBillSubTotalContainer">
            <p class="cartBillSubTotalHeading">Estimated Tax(5%):</p>
            <p class="cartBillSubTotal">$${(taxCents / 100).toFixed(2)}</p>
        </div>
        <div style="height: 2px;" class="cartItemHorizontalDivider"></div>
        <div class="cartBillTotalContainer">
            <p class="cartBillTotalHeading">Subtotal (${cartTotalQuantity} item):</p>
            <p class="cartBillTotal">$${(totalCents / 100).toFixed(2)}</p>
        </div>
        <div class="wishListItemGiftCheckContainer">
            <input type="checkbox" id="giftCheck" class="wishListItemGiftCheckBox">
            <label for="giftCheck">This is a gift</label>
        </div>
        <button class="proceedToPayButton">
            Proceed To Pay
        </button>
    `;
        const cartBillContainer = document.querySelector('.js-cart-bill-container');
        if (cartBillContainer) {
            cartBillContainer.innerHTML = productPriceHTML;
        } else {
            console.error('Element with class .js-cart-bill-container not found.');
        }
    }

    displayCartItems() {
        let cartSummaryHTML = '';
        this.cart.cart.forEach((cartItem) => {
            const productId = cartItem.id;
            const matchingProduct = this.getProduct(productId);
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
                            <p class="cartitemVariantInfo">Variant: ${cartItem.variant}</p>
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
            this.setupCartEventListeners();
        } else {
            console.error('Element with class .js-cart-items-container not found.');
        }
    }

    setupCartEventListeners() {
        document.querySelectorAll('.js-cart-item-delete-button').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                this.cart.removeFromCart(productId);
                this.renderPaymentSummary();
                this.displayCartItems();
            });
        });

        document.querySelectorAll('.js-increase-quantity').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                this.cart.addToCart(productId);
                this.renderPaymentSummary();
                this.displayCartItems();
            });
        });

        document.querySelectorAll('.js-decrease-quantity').forEach((button) => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                this.cart.decreaseQuantity(productId);
                this.renderPaymentSummary();
                this.displayCartItems();
            });
        });
    }

    getProduct(productId) {
        return (
            this.clothes.getProduct(productId) ||
            this.phones.getProduct(productId) ||
            this.babyProducts.getProduct(productId)
        );
    }
}