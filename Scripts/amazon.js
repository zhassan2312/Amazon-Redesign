
import { cart,addToCart,updateCartQuantity } from './cart.js';
import { popularApparelProducts,topSellerBabyProducts } from './products.js';



document.addEventListener
('DOMContentLoaded', function() 
    {
        

        displayPopularApparelProducts();
        displayTopSellerBabyProducts();
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
    }
);
    



function displayPopularApparelProducts() 
{
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
                        <button class="cartButton"
                        data-product-name="${product.name}">
                            <img src="Assets/Icons/addToCart.svg" alt="Cart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector('.js-popularApparelProducts-containers').innerHTML = productsHTML;
}

function displayTopSellerBabyProducts() 
{
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
                        <button class="cartButton"
                        data-product-name="${product.name}">
                            <img src="Assets/Icons/addToCart.svg" alt="Cart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector('.js-topSellerBabyProducts-containers').innerHTML = productsHTML;
}


