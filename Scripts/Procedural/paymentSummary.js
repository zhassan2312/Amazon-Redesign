import { getProduct } from '../products.js';
import { cart } from '../cart.js';

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let cartTotalQuantity = 0;
    cart.forEach((cartItem) => {
        let productId = cartItem.id;
        let matchingProduct = getProduct(productId);
        cartTotalQuantity += cartItem.quantity;
        productPriceCents += (matchingProduct.priceCents * cartItem.quantity);
    });

    document.querySelector('.js-subtotal-text').innerHTML = `${(productPriceCents / 100).toFixed(2)}`;

    document.querySelector('.js-subtotal-item').innerHTML = `${cartTotalQuantity}`;

    let shippingCents = 299;
    let taxCents = (productPriceCents * 0.05);
    let subTotalCents = shippingCents + productPriceCents;
    let totalCents = subTotalCents + taxCents;
    generatePriceSummaryHTML(cartTotalQuantity, productPriceCents, shippingCents, subTotalCents, taxCents, totalCents);
}

function generatePriceSummaryHTML(cartTotalQuantity, productPriceCents, shippingCents, subTotalCents, taxCents, totalCents) {
    let productPriceHTML = `
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

    document.querySelector('.js-cart-bill-container').innerHTML = productPriceHTML;
}
