// Clothes.js
import { Product } from './product-class.js';

export class Clothes extends Product {
    constructor() {
        super([
            {
                id: "1",
                image: "Assets/Images/HomePage/Leather.png",
                name: "Men’s Leather Jacket",
                rating: {
                    stars: 5,
                    count: 732
                },
                priceCents: 9699,
                available: "Available",
                variant:
                {
                    option1: "S",
                    option2: "M",
                    option3: "L",
                    option4: "XL",
                    option5: "XXL",
                }
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
                available: "Available",
                variant:
                {
                    option1: "S",
                    option2: "M",
                    option3: "L",
                    option4: "XL",
                    option5: "XXL",
                }
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
                available: "Available",
                variant:
                {
                    option1: "S",
                    option2: "M",
                    option3: "L",
                    option4: "XL",
                    option5: "XXL",
                }
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
                available: "Available",
                variant:
                {
                    option1: "S",
                    option2: "M",
                    option3: "L",
                    option4: "XL",
                    option5: "XXL",
                }
            },
        ]);
    }
}
