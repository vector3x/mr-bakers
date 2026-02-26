import { MenuCategory } from "@/types";

export const menu: MenuCategory[] = [

    // ================= PIZZA (ALL TYPES) =================
    {
        category: "Pizza",
        items: [
            // --- Supreme Pizza ---
            {
                id: "makhani-paneer",
                name: "Makhani Paneer",
                subCategory: "Supreme Pizza",
                sizes: [
                    { label: "Regular", price: 180 },
                    { label: "Medium", price: 330 },
                    { label: "Large", price: 470 }
                ]
            },
            {
                id: "deluxe-veggie",
                name: "Deluxe Veggie",
                subCategory: "Supreme Pizza",
                sizes: [
                    { label: "Regular", price: 180 },
                    { label: "Medium", price: 330 },
                    { label: "Large", price: 470 }
                ]
            },
            {
                id: "veg-extravaganza",
                name: "Veg Extravaganza",
                subCategory: "Supreme Pizza",
                sizes: [
                    { label: "Regular", price: 180 },
                    { label: "Medium", price: 330 },
                    { label: "Large", price: 470 }
                ]
            },
            {
                id: "super-deluxe-veggie",
                name: "Super Deluxe Veggie",
                subCategory: "Supreme Pizza",
                sizes: [
                    { label: "Regular", price: 180 },
                    { label: "Medium", price: 330 },
                    { label: "Large", price: 470 }
                ]
            },
            {
                id: "schezwan-veg",
                name: "Schezwan Veg",
                subCategory: "Supreme Pizza",
                sizes: [
                    { label: "Regular", price: 180 },
                    { label: "Medium", price: 330 },
                    { label: "Large", price: 470 }
                ]
            },
            // --- Signature Pizza ---
            {
                id: "achari-paneer",
                name: "Achari Paneer",
                subCategory: "Signature Pizza",
                sizes: [
                    { label: "Regular", price: 150 },
                    { label: "Medium", price: 280 },
                    { label: "Large", price: 419 }
                ]
            },
            {
                id: "veggie-paradise",
                name: "Veggie Paradise",
                subCategory: "Signature Pizza",
                sizes: [
                    { label: "Regular", price: 150 },
                    { label: "Medium", price: 280 },
                    { label: "Large", price: 419 }
                ]
            },
            {
                id: "tanduri-paneer",
                name: "Tandoori Paneer",
                subCategory: "Signature Pizza",
                sizes: [
                    { label: "Regular", price: 150 },
                    { label: "Medium", price: 280 },
                    { label: "Large", price: 419 }
                ]
            },
            {
                id: "double-cheese-margherita",
                name: "Double Cheese Margherita",
                subCategory: "Signature Pizza",
                sizes: [
                    { label: "Regular", price: 150 },
                    { label: "Medium", price: 280 },
                    { label: "Large", price: 419 }
                ]
            },
            {
                id: "farm-house",
                name: "Farm House",
                subCategory: "Signature Pizza",
                sizes: [
                    { label: "Regular", price: 150 },
                    { label: "Medium", price: 280 },
                    { label: "Large", price: 419 }
                ]
            },
            // --- Spicy Veg Pizza ---
            {
                id: "vegetarian",
                name: "Vegetarian",
                subCategory: "Spicy Veg Pizza",
                sizes: [
                    { label: "Regular", price: 130 },
                    { label: "Medium", price: 240 },
                    { label: "Large", price: 380 }
                ]
            },
            {
                id: "kids-delight",
                name: "Kids Delight Pizza",
                subCategory: "Spicy Veg Pizza",
                sizes: [
                    { label: "Regular", price: 130 },
                    { label: "Medium", price: 240 },
                    { label: "Large", price: 380 }
                ]
            },
            {
                id: "fresh-veggie",
                name: "Fresh Veggie",
                subCategory: "Spicy Veg Pizza",
                sizes: [
                    { label: "Regular", price: 130 },
                    { label: "Medium", price: 240 },
                    { label: "Large", price: 380 }
                ]
            },
            {
                id: "crisp-n-lite",
                name: "Crisp N Lite",
                subCategory: "Spicy Veg Pizza",
                sizes: [
                    { label: "Regular", price: 130 },
                    { label: "Medium", price: 240 },
                    { label: "Large", price: 380 }
                ]
            },
            // --- Classic Pizza ---
            {
                id: "classic-pizza",
                name: "Classic Pizza",
                subCategory: "Classic Pizza",
                sizes: [
                    { label: "Regular", price: 110 },
                    { label: "Medium", price: 180 },
                    { label: "Large", price: 240 }
                ]
            },
            {
                id: "cheese-corn",
                name: "Cheese & Corn",
                subCategory: "Classic Pizza",
                sizes: [
                    { label: "Regular", price: 110 },
                    { label: "Medium", price: 180 },
                    { label: "Large", price: 240 }
                ]
            },
            {
                id: "margherita",
                name: "Margherita",
                subCategory: "Classic Pizza",
                sizes: [
                    { label: "Regular", price: 110 },
                    { label: "Medium", price: 180 },
                    { label: "Large", price: 240 }
                ]
            },
            {
                id: "veggie-lover",
                name: "Veggie Lover",
                subCategory: "Classic Pizza",
                sizes: [
                    { label: "Regular", price: 110 },
                    { label: "Medium", price: 180 },
                    { label: "Large", price: 240 }
                ]
            }
        ]
    },

    // ================= BURGERS =================
    {
        category: "Burgers",
        items: [
            { id: "aloo-tikki", name: "Aloo Tikki", price: 49 },
            { id: "crispy-veg-supreme", name: "Crispy Veg Supreme", price: 59 },
            { id: "paneer-veg", name: "Paneer Veg", price: 65 },
            { id: "spicy-paneer-veg", name: "Spicy Paneer Veg", price: 79 },
            { id: "mushroom-burger", name: "Mushroom Burger", price: 79 }
        ]
    },

    // ================= GARLIC BREAD =================
    {
        category: "Garlic Bread",
        items: [
            { id: "stuff-garlic-bread", name: "Stuff Garlic Bread", price: 110 },
            { id: "chilli-cheese-toast", name: "Chilli Cheese Toast", price: 79 },
            { id: "corn-chilli-cheese-toast", name: "Corn Chilli Cheese Toast", price: 110 },
            { id: "french-fries", name: "French Fries", price: 59 }
        ]
    },

    // ================= SANDWICH =================
    {
        category: "Sandwich",
        items: [
            { id: "grilled-potato", name: "Grilled Potato", price: 59 },
            { id: "paneer-sandwich", name: "Paneer Sandwich", price: 49 },
            { id: "veg-grilled", name: "Veg Grilled", price: 39 },
            { id: "cheese-sandwich", name: "Cheese Sandwich", price: 39 }
        ]
    },

    // ================= CAKES =================
    {
        category: "Cakes",
        items: [
            { id: "red-velvet", name: "Red Velvet", sizes: [{ label: "500g", price: 400 }, { label: "1kg", price: 800 }] },
            { id: "strawberry", name: "Strawberry", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }] },
            { id: "white-forest", name: "White Forest", sizes: [{ label: "500g", price: 300 }, { label: "1kg", price: 600 }] },
            { id: "butter-scotch", name: "Butter Scotch", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }] },
            { id: "choco-chips", name: "Choco Chips", sizes: [{ label: "500g", price: 350 }, { label: "1kg", price: 700 }] },
            { id: "pineapple", name: "Pine Apple", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }] },
            { id: "fruit-cake", name: "Fruit Cake", sizes: [{ label: "500g", price: 400 }, { label: "1kg", price: 800 }] },
            { id: "vanilla", name: "Vanilla", sizes: [{ label: "500g", price: 250 }, { label: "1kg", price: 450 }] },
            { id: "dark-chocolate", name: "Dark Chocolate", sizes: [{ label: "500g", price: 320 }, { label: "1kg", price: 600 }] },
            { id: "black-forest", name: "Black Forest", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }] },
            { id: "mango-cake", name: "Mango Cake", sizes: [{ label: "500g", price: 300 }, { label: "1kg", price: 650 }] },
            { id: "chocolate-truffle", name: "Chocolate Truffle", sizes: [{ label: "500g", price: 450 }, { label: "1kg", price: 900 }] }
        ]
    }

];
