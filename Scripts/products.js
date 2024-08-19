document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            image: "Assets/Images/HomePage/Leather.png",
            name: "Men’s Leather Jacket",
            rating: {
                stars: 5,
                count: 732
            },
            priceCents: 9699,
            available: "Available"
        },
        {
            image: "Assets/Images/HomePage/Gloves.png",
            name: "Men’s Woolen Gloves",
            rating: {
                stars: 4,
                count: 718
            },
            priceCents: 1299,
            available: "Available"
        },
        {
            image: "Assets/Images/HomePage/Cap.png",
            name: "Tommy Hilfiger Cap | Woolen",
            rating: {
                stars: 4,
                count: 522
            },
            priceCents: 2199,
            available: "Available"
        },
        {
            image: "Assets/Images/HomePage/White Jacket.png",
            name: "White Jacket",
            rating: {
                stars: 4,
                count: 7800
            },
            priceCents: 12099,
            available: "Available"
        },
    ];

    let productsHTML = '';

    products.forEach((product) => {
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

    document.querySelector('.js-product-containers').innerHTML = productsHTML;

    document.querySelectorAll('.cartButton')
        .forEach((button) => 
        {
        button.addEventListener('click', () => 
        {
            const productName= button.dataset.productName;
            let matchingItem;
            cart.forEach((item) => 
            {
                if (item.name === productName) 
                {
                    matchingItem = item;
                }
            });

            if (matchingItem) 
            {
                matchingItem.quantity += 1;
            } 
            else 
            {
                cart.push({
                    name: productName,
                    quantity: 1
                });
            }

            let cartQuantity=0;
            cart.forEach((item) => 
            {
                cartQuantity += item.quantity;
            });

            document.querySelector('.js-cart-quanity').innerHTML = cartQuantity;
        });
    });
});


