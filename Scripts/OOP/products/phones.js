import { Product } from './product-class.js';


export class Phones extends Product {
    constructor() {
        super([
            {
                id: `9`,
                image: "Assets/Images/Products/iphone case.png",
                name: "Comboproof for iPhone 15 Pro Max Case ...",
                rating: {
                    stars: 4,
                    count: 12
                },
                priceCents: 1545,
                available: "Available",
                variant:
                {
                    option1: "Black",
                    option2: "Blue",
                    option3: "Red",
                    option4: "Green",
                    option5: "Yellow",
                }
            
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
                available: "Available",
                variant:
                {
                    option1: "Black",
                    option2: "Blue",
                    option3: "Red",
                    option4: "Green",
                    option5: "Yellow",
                }
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
                available: "Available",
                variant:
                {
                    option1: "Black",
                    option2: "Blue",
                    option3: "Red",
                    option4: "Green",
                    option5: "Yellow",
                }
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
                available: "Available",
                variant:
                {
                    option1: "Black",
                    option2: "Blue",
                    option3: "Red",
                    option4: "Green",
                    option5: "Yellow",
                }
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
                available: "Available",
                variant:
                {
                    option1: "Black",
                    option2: "Blue",
                    option3: "Red",
                    option4: "Green",
                    option5: "Yellow",
                }
            },
        ]);
    }
}
