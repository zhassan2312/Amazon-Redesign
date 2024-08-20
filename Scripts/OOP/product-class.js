// Product.js
export class Product {
    constructor() {
        this.popularApparelProducts = [
            {
                id: "1",
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
                id: "2",
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
                id: `3`,
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
                id: `4`,
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
        this.topSellerBabyProducts = [
            {
                id: `5`,
                image: "Assets/Images/HomePage/Pampers.png",
                name: "Pampers-Diapers-94pc",
                rating: {
                    stars: 4,
                    count: 28
                },
                priceCents: 1999,
                available: "Available"
            },
            {
                id: `6`,
                image: "Assets/Images/HomePage/Baby Walker.png",
                name: "Baby Walker",
                rating: {
                    stars: 4,
                    count: 78
                },
                priceCents: 8099,
                available: "Available"
            },
            {
                id: `7`,
                image: "Assets/Images/HomePage/Baby Shampoo.png",
                name: "Johnson's Baby Shampoo",
                rating: {
                    stars: 4,
                    count: 2700
                },
                priceCents: 2299,
                available: "Available"
            },
            {
                id: `8`,
                image: "Assets/Images/HomePage/Swing.png",
                name: "Baby Electric Swing",
                rating: {
                    stars: 4,
                    count: 78
                },
                priceCents: 11999,
                available: "Available"
            },
        ];
        this.iphoneCasesProducts = [
            {
                id: `9`,
                image: "Assets/Images/Products/iphone case.png",
                name: "Comboproof for iPhone 15 Pro Max Case ...",
                rating: {
                    stars: 4,
                    count: 12
                },
                priceCents: 1545,
                available: "Available"
            },
            {
                id: `10`,
                image: "Assets/Images/Products/iphone case 2.png",
                name: "Waterproof Case for iPhone 15 Pro...",
                rating: {
                    stars: 4,
                    count: 12
                },
                priceCents: 2145,
                available: "Available"
            },
            {
                id: `11`,
        
                image: "Assets/Images/Products/iphone case 7.png",
                name: "iPhone 15 Pro Max Clear Case with MagSafe",
                rating: {
                    stars: 4,
                    count: 78
                },
                priceCents: 2145,
                available: "Available"
            },
            {
                id: `12`,
        
                image: "Assets/Images/Products/iphone case 4.png",
                name: "AI Case for iPhone 15 pro max with apple logo hole...",
                rating: {
                    stars: 4,
                    count: 675
                },
                priceCents: 1245,
                available: "Available"
            },
            {
                id: `13`,
        
                image: "Assets/Images/Products/iphone case 5.png",
                name: "SPIGEN MAGNETIC TOro Armor MagFit Desgin",
                rating: {
                    stars: 4,
                    count: 67
                },
                priceCents: 1345,
                available: "Available"
            },
        ];
    }

    getProduct(productId) {
        let matchingProduct = this.popularApparelProducts.find(product => product.id === productId);
        if (!matchingProduct) {
            matchingProduct = this.topSellerBabyProducts.find(product => product.id === productId);
            if (!matchingProduct) {
                matchingProduct = this.iphoneCasesProducts.find(product => product.id === productId);
            }
        }
        return matchingProduct;
    }

    displayPopularApparelProducts() {
        let productsHTML = '';
        this.popularApparelProducts.forEach((product) => {
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

    displayTopSellerBabyProducts() {
        let productsHTML = '';
        this.topSellerBabyProducts.forEach((product) => {
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

    displayIphoneCasesProducts() {
        let productsHTML = '';
        this.iphoneCasesProducts.forEach((product) => {
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
}