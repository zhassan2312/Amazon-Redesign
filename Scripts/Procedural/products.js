export const popularApparelProducts = [
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


export const topSellerBabyProducts = 
[
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


export const iphoneCasesProducts=
[
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



export function getProduct(productId)
{
    let matchingProduct = popularApparelProducts.find(product => product.id === productId);
        if(!matchingProduct)
        {
            matchingProduct=topSellerBabyProducts.find(product=>product.id===productId);
            if(!matchingProduct)
            {
                matchingProduct=iphoneCasesProducts.find(product=>product.id===productId);

            }
        }

        return matchingProduct;
}