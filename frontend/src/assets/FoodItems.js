const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil.",
    category: "Dinner",
    price: 10.99,
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg"
  },
  {
    id: 2,
    name: "Cheeseburger",
    description: "Juicy beef patty with melted cheese in a soft bun.",
    category: "Lunch",
    price: 8.49,
    image: "https://www.safefood.net/getmedia/05ae6485-4416-48b2-873e-30364a272aa2/boiled-eggs.jpg?w=2048&h=1152&ext=.jpg&width=1360&resizemode=force"
  },
  {
    id: 3,
    name: "Sushi Platter",
    description: "Fresh assortment of sushi rolls with salmon, tuna, and avocado.",
    category: "Dinner",
    price: 15.99,
    image: "https://thumbs.dreamstime.com/b/traditional-ethiopian-cuisine-food-served-table-national-ai-generated-297051760.jpg"
  },
  {
    id: 4,
    name: "French Fries",
    description: "Golden crispy fries served with ketchup.",
    category: "Snack",
    price: 3.99,
    image: "https://media.istockphoto.com/id/1443993866/photo/french-fries-with-ketchup-and-cocktail-sauce.jpg?s=612x612&w=0&k=20&c=URpOsc5tds8tOfxK4ZO3Tkx6mwLho7fL_pTBSNdziBU="
  },
  {
    id: 5,
    name: "Spaghetti Bolognese",
    description: "Pasta tossed in rich tomato and beef sauce.",
    category: "Dinner",
    price: 12.49,
    image: "https://media.gettyimages.com/id/637214478/photo/pasta-plate.jpg?s=612x612&w=gi&k=20&c=XtzhHeWTsdrmZxrMN3cDxRY72KFnUNz_vPfICkmer-I="
  },
  {
    id: 6,
    name: "Chicken Tacos",
    description: "Soft tortillas filled with seasoned chicken and salsa.",
    category: "Lunch",
    price: 7.99,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490"
  },
  {
    id: 7,
    name: "Caesar Salad",
    description: "Crisp romaine with Caesar dressing, croutons, and parmesan.",
    category: "Lunch",
    price: 6.99,
    image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
  },
  {
    id: 8,
    name: "Pancakes",
    description: "Fluffy pancakes served with maple syrup.",
    category: "Breakfast",
    price: 5.99,
    image: "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0="
  },
  {
    id: 9,
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled with lemon butter sauce.",
    category: "Dinner",
    price: 16.99,
    image: "https://media.istockphoto.com/id/153784617/photo/supreme-pizza-slice-lift.jpg?s=612x612&w=0&k=20&c=Et5uDUJYv3sqDitb1jnUbnGrxhn015foBX_BS-1NFxs="
  },
  {
    id: 10,
    name: "Chocolate Cake",
    description: "Rich chocolate cake layered with ganache.",
    category: "Dessert",
    price: 4.99,
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg"
  },
  {
    id: 11,
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    category: "Dessert",
    price: 3.49,
    image: "https://www.safefood.net/getmedia/05ae6485-4416-48b2-873e-30364a272aa2/boiled-eggs.jpg?w=2048&h=1152&ext=.jpg&width=1360&resizemode=force"
  },
  {
    id: 12,
    name: "Egg Omelette",
    description: "Fluffy omelette with veggies and cheese.",
    category: "Breakfast",
    price: 4.99,
    image: "https://thumbs.dreamstime.com/b/traditional-ethiopian-cuisine-food-served-table-national-ai-generated-297051760.jpg"
  },
  {
    id: 13,
    name: "Falafel Wrap",
    description: "Crispy falafel balls wrapped with hummus and veggies.",
    category: "Lunch",
    price: 6.49,
    image: "https://media.istockphoto.com/id/1443993866/photo/french-fries-with-ketchup-and-cocktail-sauce.jpg?s=612x612&w=0&k=20&c=URpOsc5tds8tOfxK4ZO3Tkx6mwLho7fL_pTBSNdziBU="
  },
  {
    id: 14,
    name: "Beef Steak",
    description: "Grilled tender steak with pepper sauce.",
    category: "Dinner",
    price: 19.99,
    image: "https://media.gettyimages.com/id/637214478/photo/pasta-plate.jpg?s=612x612&w=gi&k=20&c=XtzhHeWTsdrmZxrMN3cDxRY72KFnUNz_vPfICkmer-I="
  },
  {
    id: 15,
    name: "Shiro Wat",
    description: "Ethiopian chickpea stew served with injera.",
    category: "Dinner",
    price: 8.99,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490"
  },
  {
    id: 16,
    name: "Veggie Burger",
    description: "Plant-based patty with fresh veggies in a bun.",
    category: "Lunch",
    price: 7.49,
    image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
  },
  {
    id: 17,
    name: "Apple Pie",
    description: "Classic American apple pie with cinnamon.",
    category: "Dessert",
    price: 4.49,
    image: "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0="
  },
  {
    id: 18,
    name: "Fried Rice",
    description: "Stir-fried rice with eggs, veggies, and soy sauce.",
    category: "Lunch",
    price: 6.99,
    image: "https://media.istockphoto.com/id/153784617/photo/supreme-pizza-slice-lift.jpg?s=612x612&w=0&k=20&c=Et5uDUJYv3sqDitb1jnUbnGrxhn015foBX_BS-1NFxs="
  },
  {
    id: 19,
    name: "Chicken Wings",
    description: "Spicy crispy wings with dipping sauce.",
    category: "Snack",
    price: 5.99,
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg"
  },
  {
    id: 20,
    name: "Greek Yogurt Bowl",
    description: "Creamy yogurt with honey, nuts, and berries.",
    category: "Breakfast",
    price: 4.29,
    image: "https://www.safefood.net/getmedia/05ae6485-4416-48b2-873e-30364a272aa2/boiled-eggs.jpg?w=2048&h=1152&ext=.jpg&width=1360&resizemode=force"
  }
];

export default foodItems;
