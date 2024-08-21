
import { Product } from './product-class.js';


export class BabyProducts extends Product {
    constructor() {
        super([
            {
                id: `5`,
                image: "Assets/Images/HomePage/Pampers.png",
                name: "Pampers-Diapers-94pc",
                rating: {
                    stars: 4,
                    count: 28
                },
                priceCents: 1999,
                available: "Available",
                variant:{
                    option1: "New Born",
                    option2: "Small",
                    option3: "Medium",
                    option4: "Large",
                    option5: "Extra Large",
                }
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
                available: "Available",
                variant:{
                    option1: "New Born",
                    option2: "Small",
                    option3: "Medium",
                    option4: "Large",
                    option5: "Extra Large",
                }
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
                available: "Available",
                variant:{
                    option1: "New Born",
                    option2: "Small",
                    option3: "Medium",
                    option4: "Large",
                    option5: "Extra Large",
                }
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
                available: "Available",
                variant:{
                    option1: "New Born",
                    option2: "Small",
                    option3: "Medium",
                    option4: "Large",
                    option5: "Extra Large",
                }
            },
        ]);
    }
}