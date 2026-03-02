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
                description: "Paneer in Makhani Sauce, Capsicum, Onion, Red Paprika, Golden Corn",
                sizes: [
                    { label: "Quarter", price: 180 },
                    { label: "Half", price: 330 },
                    { label: "Full", price: 470 }
                ]
            },
            {
                id: "deluxe-veggie",
                name: "Deluxe Veggie",
                subCategory: "Supreme Pizza",
                description: "Onion, Tomato, Capsicum, Golden Corn, Grilled Mushroom, Paneer",
                sizes: [
                    { label: "Quarter", price: 180 },
                    { label: "Half", price: 330 },
                    { label: "Full", price: 470 }
                ]
            },
            {
                id: "veg-extravaganza",
                name: "Veg Extravaganza",
                subCategory: "Supreme Pizza",
                description: "Onion, Tomato, Capsicum, Golden Corn, Grilled Mushroom, Jalapeno, Black Olives & Extra Cheese",
                sizes: [
                    { label: "Quarter", price: 180 },
                    { label: "Half", price: 330 },
                    { label: "Full", price: 470 }
                ]
            },
            {
                id: "super-deluxe-veggie",
                name: "Super Deluxe Veggie",
                subCategory: "Supreme Pizza",
                description: "Onion, Capsicum, Golden Corn, Jalapeno, Black Olives, Paneer, Baby Corn",
                sizes: [
                    { label: "Quarter", price: 180 },
                    { label: "Half", price: 330 },
                    { label: "Full", price: 470 }
                ]
            },
            {
                id: "schezwan-veg",
                name: "Schezwan Veg",
                subCategory: "Supreme Pizza",
                description: "Onion, Capsicum, Black Olives, Baby Corn, Paneer in hot Schezwan Sauce",
                sizes: [
                    { label: "Quarter", price: 180 },
                    { label: "Half", price: 330 },
                    { label: "Full", price: 470 }
                ]
            },
            // --- Signature Pizza ---
            {
                id: "achari-paneer",
                name: "Achari Paneer",
                subCategory: "Signature Pizza",
                description: "Onion, Capsicum, Red Paprika, Paneer with Achari Sauce",
                image: "achari pizza.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 150 },
                    { label: "Half", price: 280 },
                    { label: "Full", price: 419 }
                ]
            },
            {
                id: "veggie-paradise",
                name: "Veggie Paradise",
                subCategory: "Signature Pizza",
                description: "Capsicum, Golden Corn, Red Paprika, Black Olive, Jalapeno",
                image: "_Veggie_Paradise_.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 150 },
                    { label: "Half", price: 280 },
                    { label: "Full", price: 419 }
                ]
            },
            {
                id: "tanduri-paneer",
                name: "Tandoori Paneer",
                subCategory: "Signature Pizza",
                description: "Capsicum, Golden Corn, Tomato, Onion, Tandoori Paneer",
                image: "tandoori-paneer-pizza.webp",
                sizes: [
                    { label: "Quarter", price: 150 },
                    { label: "Half", price: 280 },
                    { label: "Full", price: 419 }
                ]
            },
            {
                id: "double-cheese-margherita",
                name: "Double Cheese Margherita",
                subCategory: "Signature Pizza",
                description: "Classic delight with extra 100% Real Mozzarella Cheese",
                image: "doubel cheese margherita.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 150 },
                    { label: "Half", price: 280 },
                    { label: "Full", price: 419 }
                ]
            },
            {
                id: "farm-house",
                name: "Farm House",
                subCategory: "Signature Pizza",
                description: "Capsicum, Golden Corn, Tomato, Onion, Mushroom",
                image: "farm house.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 150 },
                    { label: "Half", price: 280 },
                    { label: "Full", price: 419 }
                ]
            },
            // --- Spicy Veg Pizza ---
            {
                id: "vegetarian",
                name: "Vegetarian",
                subCategory: "Spicy Veg Pizza",
                description: "Capsicum, Golden Corn, Paneer, Red Paprika",
                image: "vegitarian.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 130 },
                    { label: "Half", price: 240 },
                    { label: "Full", price: 380 }
                ]
            },
            {
                id: "kids-delight",
                name: "Kids Delight Pizza",
                subCategory: "Spicy Veg Pizza",
                description: "Capsicum, Golden Corn, Paneer",
                image: "kids deligjht poizza.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 130 },
                    { label: "Half", price: 240 },
                    { label: "Full", price: 380 }
                ]
            },
            {
                id: "fresh-veggie",
                name: "Fresh Veggie",
                subCategory: "Spicy Veg Pizza",
                image: "fresh veggie.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 130 },
                    { label: "Half", price: 240 },
                    { label: "Full", price: 380 }
                ]
            },
            {
                id: "crisp-n-lite",
                name: "Crisp N Lite",
                subCategory: "Spicy Veg Pizza",
                description: "Chopped Onion, Capsicum Chilli Mix with Cheese on thin & crispy base",
                image: "crisp n lite.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 130 },
                    { label: "Half", price: 240 },
                    { label: "Full", price: 380 }
                ]
            },
            // --- Classic Pizza ---
            {
                id: "classic-pizza",
                name: "Classic Pizza",
                subCategory: "Classic Pizza",
                description: "Sausage & pesto pizza",
                image: "classic- pizza.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 110 },
                    { label: "Half", price: 180 },
                    { label: "Full", price: 240 }
                ]
            },
            {
                id: "cheese-corn",
                name: "Cheese & Corn",
                subCategory: "Classic Pizza",
                description: "Cheese, Golden Corn",
                image: "corn  piza79 rs.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 110 },
                    { label: "Half", price: 180 },
                    { label: "Full", price: 240 }
                ]
            },
            {
                id: "margherita",
                name: "Margherita",
                subCategory: "Classic Pizza",
                description: "Classic delight",
                image: "margherita.avif",
                sizes: [
                    { label: "Quarter", price: 110 },
                    { label: "Half", price: 180 },
                    { label: "Full", price: 240 }
                ]
            },
            {
                id: "veggie-lover",
                name: "Veggie Lover",
                subCategory: "Classic Pizza",
                description: "Onion & Capsicum",
                image: "veggie lover.jpg.jpeg",
                sizes: [
                    { label: "Quarter", price: 110 },
                    { label: "Half", price: 180 },
                    { label: "Full", price: 240 }
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

    // ================= GARLIC BREAD & SIDES =================
    {
        category: "Garlic Bread and Fries",
        items: [
            { id: "stuff-garlic-bread", name: "Stuff Garlic Bread", price: 110 },
            { id: "chilli-cheese-toast", name: "Chilli Cheese Toast", price: 79 },
            { id: "corn-chilli-cheese-toast", name: "Corn Chilli Cheese Toast", price: 110 },
            { id: "french-fries", name: "French Fries", sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 100 }], image: "french -Fries-.webp" },
            { id: "chilli-potato", name: "Chilli Potato", sizes: [{ label: "Half", price: 80 }, { label: "Full", price: 150 }], image: "chilli-potato.webp" }
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

    // ================= NOODLES =================
    {
        category: "Noodles",
        items: [
            { id: "veg-noodles", name: "Veg Noodles", sizes: [{ label: "Quarter", price: 30 }, { label: "Half", price: 50 }, { label: "Full", price: 80 }], image: "veg noodles.jpg.jpeg" },
            { id: "paneer-noodles", name: "Paneer Noodles", sizes: [{ label: "Quarter", price: 40 }, { label: "Half", price: 70 }, { label: "Full", price: 120 }], image: "paneer_noodles.avif" },
            { id: "schezwan-noodles", name: "Schezwan Noodles", sizes: [{ label: "Quarter", price: 50 }, { label: "Half", price: 80 }, { label: "Full", price: 140 }], image: "sejwan noodles.jpg.jpeg" },
            { id: "paneer-schezwan-noodles", name: "Paneer Schezwan Noodles", sizes: [{ label: "Quarter", price: 60 }, { label: "Half", price: 90 }, { label: "Full", price: 150 }], image: "paneer sejwan noodles.jpg.jpeg" }
        ]
    },

    // ================= FRIED RICE =================
    {
        category: "Fried Rice",
        items: [
            { id: "veg-fried-rice", name: "Veg Fried Rice", sizes: [{ label: "Quarter", price: 30 }, { label: "Half", price: 50 }, { label: "Full", price: 80 }], image: "veg fried rice.webp" },
            { id: "paneer-fried-rice", name: "Paneer Fried Rice", sizes: [{ label: "Quarter", price: 50 }, { label: "Half", price: 80 }, { label: "Full", price: 120 }], image: "paneer-fried-rice.webp" },
            { id: "veg-schezwan-fried-rice", name: "Veg Schezwan Fried Rice", sizes: [{ label: "Quarter", price: 70 }, { label: "Half", price: 100 }, { label: "Full", price: 150 }], image: "schezwan-veg-fried-rice.webp" },
            { id: "paneer-schezwan-fried-rice", name: "Paneer Schezwan Fried Rice", sizes: [{ label: "Quarter", price: 80 }, { label: "Half", price: 120 }, { label: "Full", price: 160 }], image: "paneer-fried-rice.webp" }
        ]
    },

    // ================= MANCHURIAN =================
    {
        category: "Manchurian",
        items: [
            { id: "veg-manchurian-dry", name: "Veg Manchurian Dry", sizes: [{ label: "Quarter", price: 50 }, { label: "Half", price: 70 }, { label: "Full", price: 100 }], image: "veg manchurian dry.jpg.jpeg" },
            { id: "veg-manchurian-gravy", name: "Veg Manchurian Gravy", sizes: [{ label: "Quarter", price: 60 }, { label: "Half", price: 80 }, { label: "Full", price: 110 }], image: "veg-manchurian gravy.jpg.jpeg" }
        ]
    },

    // ================= CHILLI =================
    {
        category: "Chilli",
        items: [
            { id: "paneer-chilli-dry", name: "Paneer Chilli Dry", sizes: [{ label: "Quarter", price: 60 }, { label: "Half", price: 90 }, { label: "Full", price: 160 }], image: "chilli-paneer- dry.webp" },
            { id: "paneer-chilli-gravy", name: "Paneer Chilli Gravy", sizes: [{ label: "Quarter", price: 70 }, { label: "Half", price: 100 }, { label: "Full", price: 170 }], image: "paneer chilly gravy.jpg.jpeg" },
            { id: "mushroom-chilli", name: "Mushroom Chilli", sizes: [{ label: "Quarter", price: 100 }, { label: "Full", price: 180 }], image: "Chilli-Mushroom.webp" }
        ]
    },

    // ================= MAGGIE =================
    {
        category: "Maggie",
        items: [
            { id: "plain-maggie", name: "Plain Maggie", sizes: [{ label: "Half", price: 20 }, { label: "Full", price: 40 }], image: "plain-maggie-.png" },
            { id: "veg-maggie", name: "Veg Maggie", sizes: [{ label: "Quarter", price: 40 }, { label: "Full", price: 60 }], image: "veg maggi-.jpg.jpeg" },
            { id: "paneer-maggie", name: "Paneer Maggie", sizes: [{ label: "Quarter", price: 50 }, { label: "Full", price: 70 }], image: "paneer maggie.avif" }
        ]
    },

    // ================= ROLL =================
    {
        category: "Roll",
        items: [
            { id: "veg-roll", name: "Veg Roll", price: 40, image: "veg-roll-.jpg.jpeg" },
            { id: "paneer-roll", name: "Paneer Roll", price: 60, image: "_paneer__roll.avif" },
            { id: "chilli-paneer-roll", name: "Chilli Paneer Roll", price: 90, image: "chilli paneer roll.jpg.jpeg" }
        ]
    },

    // ================= SNACKS =================
    {
        category: "Snacks",
        items: [
            { id: "smilys", name: "Smilys", description: "6 pc", price: 50, image: "smilys.jpg.jpeg" },
            { id: "veg-finger", name: "Veg Finger", description: "4 pc", price: 50, image: "-veggie-fingers.jpg.jpeg" },
            { id: "veg-nuggets", name: "Veg Nuggets", description: "6 pc", price: 60, image: "veg nuggets.jpg.jpeg" },
            { id: "cheese-shots", name: "Cheese Shots", description: "6 pc", price: 60, image: "-cheese-shots_.webp" }
        ]
    },

    // ================= CAKES =================
    {
        category: "Cakes",
        items: [
            { id: "red-velvet", name: "Red Velvet", sizes: [{ label: "500g", price: 400 }, { label: "1kg", price: 800 }], image: "_Red-Velvet-1-kg-cake.jpeg" },
            { id: "strawberry", name: "Strawberry", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }], image: "-strawberry-cake-.jpg.jpeg" },
            { id: "white-forest", name: "White Forest", sizes: [{ label: "500g", price: 300 }, { label: "1kg", price: 600 }], image: "White-Forest-Cake.jpg.jpeg" },
            { id: "butter-scotch", name: "Butter Scotch", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }], image: "butter scotch.jpg.jpeg" },
            { id: "choco-chips", name: "Choco Chips", sizes: [{ label: "500g", price: 350 }, { label: "1kg", price: 700 }], image: "1_kg_choco_chips_fresh_cream_cake.jpg.jpeg" },
            { id: "pineapple", name: "Pine Apple", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }], image: "pineapple-cake-.webp" },
            { id: "fruit-cake", name: "Fruit Cake", sizes: [{ label: "500g", price: 400 }, { label: "1kg", price: 800 }], image: "-fruit-cake-.webp" },
            { id: "vanilla", name: "Vanilla", sizes: [{ label: "500g", price: 250 }, { label: "1kg", price: 450 }], image: "vanila.webp" },
            { id: "dark-chocolate", name: "Dark Chocolate", sizes: [{ label: "500g", price: 320 }, { label: "1kg", price: 600 }], image: "dark choclete.jpeg" },
            { id: "black-forest", name: "Black Forest", sizes: [{ label: "500g", price: 280 }, { label: "1kg", price: 550 }], image: "black forest.webp" },
            { id: "mango-cake", name: "Mango Cake", sizes: [{ label: "500g", price: 300 }, { label: "1kg", price: 650 }], image: "mango cake '.jpg.jpeg" },
            { id: "chocolate-truffle", name: "Chocolate Truffle", sizes: [{ label: "500g", price: 450 }, { label: "1kg", price: 900 }], image: "Chocolate_Nougat.jpg.jpeg" }
        ]
    }

];
