const recipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "American",
        category: "breakfast",
        ingredients: [
            "1½ cups all-purpose flour",
            "3½ teaspoons baking powder",
            "¼ teaspoon salt",
            "1 tablespoon sugar",
            "1¼ cups milk",
            "1 egg",
            "3 tablespoons melted butter"
        ],
        instructions: [
            "In a large bowl, whisk together flour, baking powder, salt, and sugar",
            "In another bowl, whisk together milk, egg, and melted butter",
            "Pour wet ingredients into dry ingredients and mix until just combined",
            "Heat a griddle or pan over medium heat",
            "Pour ¼ cup batter for each pancake",
            "Cook until bubbles form on surface, then flip and cook other side"
        ],
        nutrition: {
            calories: 230,
            protein: "6g",
            carbohydrates: "30g",
            fat: "9g"
        },
        servings: 4,
        tips: "For fluffier pancakes, don't overmix the batter and let it rest for 5 minutes before cooking."
    },
    {
        id: 2,
        name: "Chicken Biryani",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
        cookingTime: 60,
        difficulty: "medium",
        cuisine: "Indian",
        category: "dinner",
        ingredients: [
            "2 cups basmati rice",
            "500g chicken",
            "2 onions",
            "2 tomatoes",
            "Biryani spices",
            "Yogurt",
            "Fresh herbs"
        ],
        instructions: [
            "Marinate chicken with yogurt and spices",
            "Cook rice until 70% done",
            "Layer rice and chicken mixture",
            "Cook on low heat for 20 minutes",
            "Garnish with fresh herbs"
        ],
        nutrition: {
            calories: 450,
            protein: "25g",
            carbohydrates: "45g",
            fat: "15g"
        },
        servings: 6,
        tips: "Let the biryani rest for 10 minutes after cooking for best results."
    },
    {
        id: 3,
        name: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
        cookingTime: 45,
        difficulty: "medium",
        cuisine: "International",
        category: "desserts",
        ingredients: [
            "2 cups flour",
            "2 cups sugar",
            "¾ cup cocoa powder",
            "2 eggs",
            "1 cup milk",
            "½ cup vegetable oil",
            "2 teaspoons vanilla extract"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C)",
            "Mix dry ingredients in a bowl",
            "Add wet ingredients and mix well",
            "Pour into greased cake pan",
            "Bake for 30-35 minutes"
        ],
        nutrition: {
            calories: 380,
            protein: "5g",
            carbohydrates: "52g",
            fat: "18g"
        },
        servings: 12,
        tips: "Insert a toothpick in the center - it should come out clean when the cake is done."
    },
    {
        id: 4,
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800",
        cookingTime: 15,
        difficulty: "easy",
        cuisine: "Italian",
        category: "lunch",
        ingredients: [
            "Romaine lettuce",
            "Croutons",
            "Parmesan cheese",
            "Caesar dressing",
            "Black pepper",
            "Chicken breast",
            "Lemon juice"
        ],
        instructions: [
            "Wash and chop lettuce",
            "Grill chicken and slice",
            "Toss lettuce with dressing",
            "Add croutons and cheese",
            "Top with sliced chicken"
        ],
        nutrition: {
            calories: 320,
            protein: "22g",
            carbohydrates: "12g",
            fat: "14g"
        },
        servings: 2,
        tips: "For extra crunch, make fresh croutons by toasting bread cubes with olive oil and garlic."
    },
    {
        id: 5,
        name: "Sushi Rolls",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
        cookingTime: 40,
        difficulty: "hard",
        cuisine: "Japanese",
        category: "dinner",
        ingredients: [
            "Sushi rice",
            "Nori sheets",
            "Fresh salmon",
            "Cucumber",
            "Avocado",
            "Rice vinegar",
            "Wasabi"
        ],
        instructions: [
            "Cook sushi rice and season with vinegar",
            "Place nori on bamboo mat",
            "Spread rice on nori",
            "Add fish and vegetables",
            "Roll tightly and slice"
        ],
        nutrition: {
            calories: 280,
            protein: "10g",
            carbohydrates: "38g",
            fat: "9g"
        },
        servings: 4,
        tips: "Wet your hands with vinegar water to prevent rice from sticking while rolling."
    },
    {
        id: 6,
        name: "Mediterranean Pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
        cookingTime: 25,
        difficulty: "easy",
        cuisine: "Mediterranean",
        category: "dinner",
        ingredients: [
            "Penne pasta",
            "Cherry tomatoes",
            "Black olives",
            "Feta cheese",
            "Olive oil",
            "Garlic",
            "Fresh basil"
        ],
        instructions: [
            "Cook pasta until al dente",
            "Sauté garlic in olive oil",
            "Add tomatoes and olives",
            "Toss with pasta",
            "Top with feta and basil"
        ],
        nutrition: {
            calories: 380,
            protein: "12g",
            carbohydrates: "48g",
            fat: "16g"
        },
        servings: 4,
        tips: "Reserve some pasta water to create a silkier sauce."
    },
    {
        id: 7,
        name: "Berry Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?w=800",
        cookingTime: 10,
        difficulty: "easy",
        cuisine: "International",
        category: "breakfast",
        ingredients: [
            "Mixed berries",
            "Banana",
            "Greek yogurt",
            "Honey",
            "Granola",
            "Chia seeds",
            "Almond milk"
        ],
        instructions: [
            "Blend berries, banana, and yogurt",
            "Add almond milk to achieve desired consistency",
            "Pour into bowl",
            "Top with granola and chia seeds",
            "Drizzle with honey"
        ],
        nutrition: {
            calories: 290,
            protein: "14g",
            carbohydrates: "45g",
            fat: "8g"
        },
        servings: 1,
        tips: "Freeze banana beforehand for a thicker consistency."
    },
    {
        id: 8,
        name: "Beef Tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
        cookingTime: 30,
        difficulty: "easy",
        cuisine: "Mexican",
        category: "dinner",
        ingredients: [
            "Ground beef",
            "Taco shells",
            "Lettuce",
            "Tomatoes",
            "Cheese",
            "Taco seasoning",
            "Sour cream"
        ],
        instructions: [
            "Brown ground beef",
            "Add taco seasoning",
            "Warm taco shells",
            "Assemble with toppings",
            "Serve immediately"
        ],
        nutrition: {
            calories: 320,
            protein: "18g",
            carbohydrates: "24g",
            fat: "16g"
        },
        servings: 6,
        tips: "Toast the taco shells for extra crispiness."
    },
    {
        id: 9,
        name: "Vegetable Stir Fry",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Asian",
        category: "dinner",
        ingredients: [
            "Mixed vegetables",
            "Tofu",
            "Soy sauce",
            "Ginger",
            "Garlic",
            "Sesame oil",
            "Rice"
        ],
        instructions: [
            "Press and cube tofu",
            "Chop vegetables",
            "Stir fry tofu until golden",
            "Add vegetables and sauce",
            "Serve over rice"
        ],
        nutrition: {
            calories: 280,
            protein: "14g",
            carbohydrates: "32g",
            fat: "12g"
        },
        servings: 4,
        tips: "Cut vegetables in similar sizes for even cooking."
    },
    {
        id: 10,
        name: "Apple Pie",
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800",
        cookingTime: 75,
        difficulty: "medium",
        cuisine: "American",
        category: "desserts",
        ingredients: [
            "Pie crust",
            "Apples",
            "Sugar",
            "Cinnamon",
            "Butter",
            "Lemon juice",
            "Flour"
        ],
        instructions: [
            "Prepare pie crust",
            "Slice and season apples",
            "Layer apples in crust",
            "Add top crust",
            "Bake until golden"
        ],
        nutrition: {
            calories: 320,
            protein: "3g",
            carbohydrates: "48g",
            fat: "14g"
        },
        servings: 8,
        tips: "Use a mix of tart and sweet apples for best flavor."
    },
    {
        id: 11,
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800",
        cookingTime: 15,
        difficulty: "easy",
        cuisine: "Greek",
        category: "lunch",
        ingredients: [
            "Cucumber",
            "Tomatoes",
            "Red onion",
            "Feta cheese",
            "Olives",
            "Olive oil",
            "Oregano"
        ],
        instructions: [
            "Chop vegetables",
            "Combine in bowl",
            "Add feta and olives",
            "Dress with olive oil",
            "Season with oregano"
        ],
        nutrition: {
            calories: 220,
            protein: "8g",
            carbohydrates: "12g",
            fat: "16g"
        },
        servings: 4,
        tips: "Let sit for 10 minutes before serving to blend flavors."
    },
    {
        id: 12,
        name: "French Toast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "French",
        category: "breakfast",
        ingredients: [
            "Bread slices",
            "Eggs",
            "Milk",
            "Vanilla",
            "Cinnamon",
            "Butter",
            "Maple syrup"
        ],
        instructions: [
            "Whisk eggs, milk, and spices",
            "Dip bread in mixture",
            "Cook in butter until golden",
            "Serve with syrup",
            "Add fresh fruits"
        ],
        nutrition: {
            calories: 340,
            protein: "12g",
            carbohydrates: "42g",
            fat: "15g"
        },
        servings: 4,
        tips: "Use slightly stale bread for better absorption."
    },
    {
        id: 13,
        name: "Mushroom Risotto",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800",
        cookingTime: 45,
        difficulty: "medium",
        cuisine: "Italian",
        category: "dinner",
        ingredients: [
            "Arborio rice",
            "Mushrooms",
            "Onion",
            "White wine",
            "Parmesan",
            "Butter",
            "Stock"
        ],
        instructions: [
            "Sauté mushrooms and onions",
            "Add rice and wine",
            "Gradually add hot stock",
            "Stir until creamy",
            "Finish with parmesan"
        ],
        nutrition: {
            calories: 380,
            protein: "10g",
            carbohydrates: "52g",
            fat: "14g"
        },
        servings: 4,
        tips: "Keep stock hot while adding to rice for best results."
    },
    {
        id: 14,
        name: "Chicken Noodle Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
        cookingTime: 50,
        difficulty: "medium",
        cuisine: "American",
        category: "lunch",
        ingredients: [
            "Chicken breast",
            "Egg noodles",
            "Carrots",
            "Celery",
            "Onion",
            "Chicken broth",
            "Fresh herbs"
        ],
        instructions: [
            "Cook chicken in broth",
            "Sauté vegetables",
            "Add noodles",
            "Simmer until done",
            "Season to taste"
        ],
        nutrition: {
            calories: 280,
            protein: "24g",
            carbohydrates: "28g",
            fat: "8g"
        },
        servings: 6,
        tips: "Add fresh herbs at the end for best flavor."
    },
    {
        id: 15,
        name: "Tiramisu",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
        cookingTime: 30,
        difficulty: "medium",
        cuisine: "Italian",
        category: "desserts",
        ingredients: [
            "Ladyfingers",
            "Mascarpone",
            "Coffee",
            "Eggs",
            "Sugar",
            "Cocoa powder",
            "Rum (optional)"
        ],
        instructions: [
            "Prepare coffee mixture",
            "Beat mascarpone and eggs",
            "Dip ladyfingers",
            "Layer ingredients",
            "Dust with cocoa"
        ],
        nutrition: {
            calories: 420,
            protein: "8g",
            carbohydrates: "38g",
            fat: "24g"
        },
        servings: 8,
        tips: "Chill for at least 4 hours before serving."
    },
    {
        id: 16,
        name: "Eggs Benedict",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "American",
        category: "breakfast",
        ingredients: [
            "English muffins",
            "Poached eggs",
            "Canadian bacon",
            "Hollandaise sauce",
            "Butter",
            "Fresh chives",
            "Black pepper"
        ],
        instructions: [
            "Toast English muffins",
            "Cook Canadian bacon",
            "Poach eggs until whites are set",
            "Prepare hollandaise sauce",
            "Assemble and garnish with chives"
        ],
        nutrition: {
            calories: 350,
            protein: "20g",
            carbohydrates: "25g",
            fat: "18g"
        },
        servings: 2,
        tips: "For perfect poached eggs, use fresh eggs and add a splash of vinegar to the water."
    },
    {
        id: 17,
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800",
        cookingTime: 10,
        difficulty: "easy",
        cuisine: "Modern",
        category: "breakfast",
        ingredients: [
            "Sourdough bread",
            "Ripe avocados",
            "Cherry tomatoes",
            "Red pepper flakes",
            "Olive oil",
            "Sea salt",
            "Fresh lime"
        ],
        instructions: [
            "Toast bread until golden",
            "Mash avocado with lime juice",
            "Spread on toast",
            "Top with tomatoes and seasonings",
            "Drizzle with olive oil"
        ],
        nutrition: {
            calories: 280,
            protein: "8g",
            carbohydrates: "22g",
            fat: "16g"
        },
        servings: 2,
        tips: "Use ripe but firm avocados for the best texture."
    },
    {
        id: 18,
        name: "Overnight Oats",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800",
        cookingTime: 5,
        difficulty: "easy",
        cuisine: "International",
        category: "breakfast",
        ingredients: [
            "Rolled oats",
            "Almond milk",
            "Chia seeds",
            "Honey",
            "Mixed berries",
            "Nuts",
            "Cinnamon"
        ],
        instructions: [
            "Mix oats and milk",
            "Add chia seeds and honey",
            "Refrigerate overnight",
            "Top with berries and nuts",
            "Add extra milk if needed"
        ],
        nutrition: {
            calories: 310,
            protein: "12g",
            carbohydrates: "45g",
            fat: "10g"
        },
        servings: 1,
        tips: "Prepare multiple servings at once for the week ahead."
    },
    {
        id: 19,
        name: "Belgian Waffles",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800",
        cookingTime: 30,
        difficulty: "medium",
        cuisine: "Belgian",
        category: "breakfast",
        ingredients: [
            "All-purpose flour",
            "Baking powder",
            "Sugar",
            "Eggs",
            "Milk",
            "Vanilla extract",
            "Melted butter"
        ],
        instructions: [
            "Mix dry ingredients",
            "Whisk wet ingredients separately",
            "Combine mixtures",
            "Cook in waffle iron",
            "Serve with toppings"
        ],
        nutrition: {
            calories: 380,
            protein: "10g",
            carbohydrates: "48g",
            fat: "16g"
        },
        servings: 4,
        tips: "Let the waffle iron heat completely before cooking for crispy results."
    },
    {
        id: 20,
        name: "Breakfast Burrito",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Mexican",
        category: "breakfast",
        ingredients: [
            "Flour tortillas",
            "Scrambled eggs",
            "Black beans",
            "Cheese",
            "Salsa",
            "Avocado",
            "Hot sauce"
        ],
        instructions: [
            "Warm tortillas",
            "Scramble eggs",
            "Heat beans",
            "Assemble burritos",
            "Roll tightly"
        ],
        nutrition: {
            calories: 420,
            protein: "22g",
            carbohydrates: "38g",
            fat: "20g"
        },
        servings: 2,
        tips: "Wrap in foil to keep warm and help hold shape."
    },
    {
        id: 21,
        name: "Greek Yogurt Parfait",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
        cookingTime: 10,
        difficulty: "easy",
        cuisine: "Greek",
        category: "breakfast",
        ingredients: [
            "Greek yogurt",
            "Granola",
            "Fresh berries",
            "Honey",
            "Almonds",
            "Chia seeds",
            "Mint leaves"
        ],
        instructions: [
            "Layer yogurt in glass",
            "Add granola layer",
            "Add berry layer",
            "Repeat layers",
            "Top with honey and nuts"
        ],
        nutrition: {
            calories: 290,
            protein: "15g",
            carbohydrates: "35g",
            fat: "12g"
        },
        servings: 1,
        tips: "Add granola just before eating to keep it crunchy."
    },
    {
        id: 22,
        name: "Shakshuka",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "Middle Eastern",
        category: "breakfast",
        ingredients: [
            "Eggs",
            "Tomatoes",
            "Bell peppers",
            "Onions",
            "Garlic",
            "Cumin",
            "Fresh herbs"
        ],
        instructions: [
            "Sauté vegetables",
            "Add tomatoes and spices",
            "Create wells for eggs",
            "Cook eggs in sauce",
            "Garnish with herbs"
        ],
        nutrition: {
            calories: 320,
            protein: "18g",
            carbohydrates: "22g",
            fat: "16g"
        },
        servings: 4,
        tips: "Serve with crusty bread to soak up the sauce."
    },
    {
        id: 23,
        name: "Breakfast Quinoa Bowl",
        image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Healthy",
        category: "breakfast",
        ingredients: [
            "Quinoa",
            "Almond milk",
            "Banana",
            "Maple syrup",
            "Cinnamon",
            "Pecans",
            "Blueberries"
        ],
        instructions: [
            "Cook quinoa in milk",
            "Add cinnamon and syrup",
            "Top with fruit",
            "Add nuts",
            "Serve warm"
        ],
        nutrition: {
            calories: 340,
            protein: "10g",
            carbohydrates: "52g",
            fat: "12g"
        },
        servings: 2,
        tips: "Cook quinoa the night before for quick morning prep."
    },
    {
        id: 24,
        name: "Breakfast Sandwich",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
        cookingTime: 15,
        difficulty: "easy",
        cuisine: "American",
        category: "breakfast",
        ingredients: [
            "English muffin",
            "Fried egg",
            "Cheese",
            "Bacon",
            "Avocado",
            "Butter",
            "Hot sauce"
        ],
        instructions: [
            "Toast muffin",
            "Cook bacon",
            "Fry egg",
            "Slice avocado",
            "Assemble sandwich"
        ],
        nutrition: {
            calories: 450,
            protein: "22g",
            carbohydrates: "28g",
            fat: "24g"
        },
        servings: 1,
        tips: "For a perfect fried egg, cover the pan briefly to cook the top."
    },
    {
        id: 25,
        name: "Protein Pancakes",
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Fitness",
        category: "breakfast",
        ingredients: [
            "Protein powder",
            "Banana",
            "Oats",
            "Egg whites",
            "Almond milk",
            "Baking powder",
            "Berries"
        ],
        instructions: [
            "Blend ingredients",
            "Heat pan",
            "Cook pancakes",
            "Flip when bubbling",
            "Top with berries"
        ],
        nutrition: {
            calories: 280,
            protein: "24g",
            carbohydrates: "32g",
            fat: "6g"
        },
        servings: 2,
        tips: "Use ripe bananas for natural sweetness."
    },
    // New Dinner Recipes (IDs 26-35)
    {
        id: 26,
        name: "Grilled Salmon",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "International",
        category: "dinner",
        ingredients: [
            "Salmon fillets",
            "Lemon",
            "Olive oil",
            "Garlic",
            "Fresh dill",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Marinate salmon with oil and seasonings",
            "Preheat grill to medium-high",
            "Grill salmon for 4-5 minutes per side",
            "Add lemon juice",
            "Garnish with fresh dill"
        ],
        nutrition: {
            calories: 380,
            protein: "34g",
            carbohydrates: "2g",
            fat: "24g"
        },
        servings: 4,
        tips: "Don't overcook - salmon should be slightly pink in the center."
    },
    {
        id: 27,
        name: "Beef Stroganoff",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
        cookingTime: 40,
        difficulty: "medium",
        cuisine: "Russian",
        category: "dinner",
        ingredients: [
            "Beef strips",
            "Mushrooms",
            "Sour cream",
            "Egg noodles",
            "Onion",
            "Beef broth",
            "Worcestershire sauce"
        ],
        instructions: [
            "Sauté beef until browned",
            "Cook mushrooms and onions",
            "Make cream sauce",
            "Cook noodles",
            "Combine all ingredients"
        ],
        nutrition: {
            calories: 450,
            protein: "28g",
            carbohydrates: "35g",
            fat: "22g"
        },
        servings: 6,
        tips: "Use tender cuts of beef for best results."
    },
    {
        id: 28,
        name: "Vegetarian Lasagna",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
        cookingTime: 70,
        difficulty: "medium",
        cuisine: "Italian",
        category: "dinner",
        ingredients: [
            "Lasagna noodles",
            "Spinach",
            "Ricotta cheese",
            "Marinara sauce",
            "Mozzarella",
            "Zucchini",
            "Mushrooms"
        ],
        instructions: [
            "Layer sauce and noodles",
            "Add vegetable mixture",
            "Layer cheese mixture",
            "Repeat layers",
            "Bake until bubbly"
        ],
        nutrition: {
            calories: 320,
            protein: "18g",
            carbohydrates: "42g",
            fat: "12g"
        },
        servings: 8,
        tips: "Let rest for 10 minutes before cutting."
    },
    {
        id: 29,
        name: "Thai Green Curry",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
        cookingTime: 35,
        difficulty: "medium",
        cuisine: "Thai",
        category: "dinner",
        ingredients: [
            "Coconut milk",
            "Green curry paste",
            "Chicken",
            "Bamboo shoots",
            "Thai basil",
            "Fish sauce",
            "Rice"
        ],
        instructions: [
            "Cook curry paste in oil",
            "Add coconut milk",
            "Add chicken and vegetables",
            "Simmer until cooked",
            "Serve with rice"
        ],
        nutrition: {
            calories: 410,
            protein: "24g",
            carbohydrates: "28g",
            fat: "26g"
        },
        servings: 4,
        tips: "Adjust curry paste amount for desired spiciness."
    },
    {
        id: 30,
        name: "Homemade Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800",
        cookingTime: 45,
        difficulty: "medium",
        cuisine: "Italian",
        category: "dinner",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella",
            "Basil",
            "Olive oil",
            "Toppings of choice",
            "Cornmeal"
        ],
        instructions: [
            "Preheat oven with pizza stone",
            "Roll out dough",
            "Add sauce and toppings",
            "Bake until crispy",
            "Garnish with fresh basil"
        ],
        nutrition: {
            calories: 285,
            protein: "12g",
            carbohydrates: "36g",
            fat: "11g"
        },
        servings: 8,
        tips: "Use high heat and preheated stone for crispy crust."
    },
    // New Lunch Recipes (IDs 36-45)
    {
        id: 36,
        name: "Quinoa Buddha Bowl",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        cookingTime: 25,
        difficulty: "easy",
        cuisine: "Healthy",
        category: "lunch",
        ingredients: [
            "Quinoa",
            "Roasted chickpeas",
            "Avocado",
            "Sweet potato",
            "Kale",
            "Tahini dressing",
            "Pumpkin seeds"
        ],
        instructions: [
            "Cook quinoa",
            "Roast vegetables",
            "Prepare dressing",
            "Assemble bowl",
            "Add toppings"
        ],
        nutrition: {
            calories: 380,
            protein: "12g",
            carbohydrates: "45g",
            fat: "18g"
        },
        servings: 2,
        tips: "Prep ingredients in advance for quick assembly."
    },
    {
        id: 37,
        name: "Caprese Sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
        cookingTime: 10,
        difficulty: "easy",
        cuisine: "Italian",
        category: "lunch",
        ingredients: [
            "Ciabatta bread",
            "Fresh mozzarella",
            "Tomatoes",
            "Basil leaves",
            "Balsamic glaze",
            "Olive oil",
            "Black pepper"
        ],
        instructions: [
            "Slice bread and tomatoes",
            "Layer ingredients",
            "Drizzle with oil and glaze",
            "Add fresh basil",
            "Season to taste"
        ],
        nutrition: {
            calories: 320,
            protein: "14g",
            carbohydrates: "28g",
            fat: "16g"
        },
        servings: 1,
        tips: "Use room temperature mozzarella for best flavor."
    },
    {
        id: 38,
        name: "Mediterranean Falafel Bowl",
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "Mediterranean",
        category: "lunch",
        ingredients: [
            "Falafel",
            "Quinoa",
            "Cherry tomatoes",
            "Cucumber",
            "Hummus",
            "Tahini sauce",
            "Mixed greens"
        ],
        instructions: [
            "Cook quinoa",
            "Prepare falafel",
            "Chop vegetables",
            "Arrange in bowl",
            "Drizzle with sauces"
        ],
        nutrition: {
            calories: 420,
            protein: "18g",
            carbohydrates: "52g",
            fat: "16g"
        },
        servings: 1,
        tips: "Make extra falafel and freeze for future meals."
    },
    {
        id: 39,
        name: "Mediterranean Wrap",
        image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?w=800",
        cookingTime: 15,
        difficulty: "easy",
        cuisine: "Mediterranean",
        category: "lunch",
        ingredients: [
            "Whole wheat wrap",
            "Hummus",
            "Falafel",
            "Mixed greens",
            "Tomatoes",
            "Red onion",
            "Tzatziki sauce"
        ],
        instructions: [
            "Warm wrap",
            "Spread hummus",
            "Add falafel and vegetables",
            "Drizzle with tzatziki",
            "Roll tightly"
        ],
        nutrition: {
            calories: 380,
            protein: "14g",
            carbohydrates: "52g",
            fat: "16g"
        },
        servings: 1,
        tips: "Warm the falafel before adding for better texture."
    },
    {
        id: 40,
        name: "Poke Bowl",
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800",
        cookingTime: 20,
        difficulty: "medium",
        cuisine: "Hawaiian",
        category: "lunch",
        ingredients: [
            "Sushi rice",
            "Fresh tuna",
            "Avocado",
            "Edamame",
            "Seaweed",
            "Soy sauce",
            "Sesame seeds"
        ],
        instructions: [
            "Cook rice",
            "Cube tuna",
            "Prepare vegetables",
            "Make sauce",
            "Assemble bowl"
        ],
        nutrition: {
            calories: 420,
            protein: "28g",
            carbohydrates: "45g",
            fat: "16g"
        },
        servings: 2,
        tips: "Use sushi-grade fish for best results and food safety."
    },
    {
        id: 41,
        name: "Chicken Pesto Panini",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800",
        cookingTime: 15,
        difficulty: "easy",
        cuisine: "Italian",
        category: "lunch",
        ingredients: [
            "Sourdough bread",
            "Grilled chicken",
            "Pesto",
            "Mozzarella",
            "Roasted peppers",
            "Spinach",
            "Olive oil"
        ],
        instructions: [
            "Spread pesto on bread",
            "Layer ingredients",
            "Brush with olive oil",
            "Grill in panini press",
            "Slice and serve"
        ],
        nutrition: {
            calories: 520,
            protein: "32g",
            carbohydrates: "38g",
            fat: "24g"
        },
        servings: 1,
        tips: "Press sandwich firmly for crispy exterior."
    },
    {
        id: 42,
        name: "Lentil Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
        cookingTime: 35,
        difficulty: "easy",
        cuisine: "Middle Eastern",
        category: "lunch",
        ingredients: [
            "Red lentils",
            "Onion",
            "Carrots",
            "Cumin",
            "Vegetable broth",
            "Lemon",
            "Fresh herbs"
        ],
        instructions: [
            "Sauté vegetables",
            "Add lentils and broth",
            "Simmer until tender",
            "Season to taste",
            "Add lemon juice"
        ],
        nutrition: {
            calories: 280,
            protein: "14g",
            carbohydrates: "42g",
            fat: "6g"
        },
        servings: 4,
        tips: "Add spinach at the end for extra nutrients."
    },
    {
        id: 43,
        name: "Tuna Nicoise Salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "French",
        category: "lunch",
        ingredients: [
            "Tuna steak",
            "Green beans",
            "Potatoes",
            "Eggs",
            "Olives",
            "Mixed greens",
            "Dijon vinaigrette"
        ],
        instructions: [
            "Cook potatoes and beans",
            "Sear tuna",
            "Boil eggs",
            "Arrange on plate",
            "Dress with vinaigrette"
        ],
        nutrition: {
            calories: 380,
            protein: "32g",
            carbohydrates: "28g",
            fat: "18g"
        },
        servings: 2,
        tips: "Leave tuna slightly pink in center for best flavor."
    },
    {
        id: 44,
        name: "Veggie Quesadilla",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Mexican",
        category: "lunch",
        ingredients: [
            "Flour tortillas",
            "Black beans",
            "Bell peppers",
            "Corn",
            "Cheese",
            "Avocado",
            "Salsa"
        ],
        instructions: [
            "Sauté vegetables",
            "Layer ingredients",
            "Cook until crispy",
            "Cut into wedges",
            "Serve with toppings"
        ],
        nutrition: {
            calories: 420,
            protein: "16g",
            carbohydrates: "48g",
            fat: "20g"
        },
        servings: 2,
        tips: "Use medium heat to melt cheese without burning tortilla."
    },
    {
        id: 45,
        name: "Asian Noodle Bowl",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Asian",
        category: "lunch",
        ingredients: [
            "Rice noodles",
            "Tofu",
            "Carrots",
            "Bean sprouts",
            "Peanuts",
            "Soy sauce",
            "Sesame oil"
        ],
        instructions: [
            "Cook noodles",
            "Stir-fry tofu",
            "Add vegetables",
            "Make sauce",
            "Combine and garnish"
        ],
        nutrition: {
            calories: 380,
            protein: "16g",
            carbohydrates: "54g",
            fat: "12g"
        },
        servings: 2,
        tips: "Don't overcook noodles - keep them slightly firm."
    },
    // New Dessert Recipes (IDs 46-55)
    {
        id: 46,
        name: "Crème Brûlée",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800",
        cookingTime: 45,
        difficulty: "hard",
        cuisine: "French",
        category: "desserts",
        ingredients: [
            "Heavy cream",
            "Vanilla bean",
            "Egg yolks",
            "Sugar",
            "Salt",
            "Additional sugar for topping",
            "Berries for garnish"
        ],
        instructions: [
            "Heat cream with vanilla",
            "Whisk egg yolks and sugar",
            "Temper and combine",
            "Bake in water bath",
            "Torch sugar topping"
        ],
        nutrition: {
            calories: 380,
            protein: "4g",
            carbohydrates: "26g",
            fat: "28g"
        },
        servings: 4,
        tips: "Chill thoroughly before adding sugar topping."
    },
    {
        id: 47,
        name: "Lemon Cheesecake",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
        cookingTime: 75,
        difficulty: "medium",
        cuisine: "American",
        category: "desserts",
        ingredients: [
            "Cream cheese",
            "Graham crackers",
            "Butter",
            "Sugar",
            "Eggs",
            "Lemon zest",
            "Heavy cream"
        ],
        instructions: [
            "Make crust",
            "Beat cream cheese mixture",
            "Add eggs and flavoring",
            "Bake in water bath",
            "Cool completely"
        ],
        nutrition: {
            calories: 420,
            protein: "7g",
            carbohydrates: "34g",
            fat: "28g"
        },
        servings: 12,
        tips: "Room temperature ingredients are essential for smooth texture."
    },
    {
        id: 48,
        name: "Chocolate Mousse",
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800",
        cookingTime: 30,
        difficulty: "medium",
        cuisine: "French",
        category: "desserts",
        ingredients: [
            "Dark chocolate",
            "Heavy cream",
            "Eggs",
            "Sugar",
            "Vanilla extract",
            "Salt",
            "Cocoa powder"
        ],
        instructions: [
            "Melt chocolate",
            "Whip cream",
            "Beat egg whites",
            "Fold ingredients together",
            "Chill until set"
        ],
        nutrition: {
            calories: 320,
            protein: "5g",
            carbohydrates: "22g",
            fat: "24g"
        },
        servings: 6,
        tips: "Use high-quality dark chocolate for best results."
    },
    {
        id: 49,
        name: "Fruit Tart",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800",
        cookingTime: 60,
        difficulty: "hard",
        cuisine: "French",
        category: "desserts",
        ingredients: [
            "Pastry dough",
            "Pastry cream",
            "Fresh fruits",
            "Apricot jam",
            "Vanilla bean",
            "Butter",
            "Powdered sugar"
        ],
        instructions: [
            "Bake tart shell",
            "Prepare pastry cream",
            "Fill shell with cream",
            "Arrange fruits",
            "Glaze with jam"
        ],
        nutrition: {
            calories: 340,
            protein: "6g",
            carbohydrates: "42g",
            fat: "16g"
        },
        servings: 8,
        tips: "Arrange fruits in a decorative pattern for visual appeal."
    },
    {
        id: 50,
        name: "Matcha Ice Cream",
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=800",
        cookingTime: 40,
        difficulty: "medium",
        cuisine: "Japanese",
        category: "desserts",
        ingredients: [
            "Heavy cream",
            "Matcha powder",
            "Milk",
            "Sugar",
            "Egg yolks",
            "Vanilla extract",
            "Salt"
        ],
        instructions: [
            "Make custard base",
            "Add matcha powder",
            "Chill mixture",
            "Churn in ice cream maker",
            "Freeze until firm"
        ],
        nutrition: {
            calories: 280,
            protein: "4g",
            carbohydrates: "26g",
            fat: "18g"
        },
        servings: 8,
        tips: "Sift matcha powder to avoid lumps."
    },
    {
        id: 51,
        name: "Baklava",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800",
        cookingTime: 90,
        difficulty: "hard",
        cuisine: "Middle Eastern",
        category: "desserts",
        ingredients: [
            "Phyllo dough",
            "Nuts",
            "Butter",
            "Sugar",
            "Honey",
            "Cinnamon",
            "Orange blossom water"
        ],
        instructions: [
            "Layer phyllo sheets",
            "Add nut mixture",
            "Cut into diamonds",
            "Bake until golden",
            "Pour syrup over hot baklava"
        ],
        nutrition: {
            calories: 420,
            protein: "8g",
            carbohydrates: "48g",
            fat: "24g"
        },
        servings: 24,
        tips: "Keep phyllo covered with damp cloth while working."
    },
    {
        id: 52,
        name: "Panna Cotta",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
        cookingTime: 20,
        difficulty: "easy",
        cuisine: "Italian",
        category: "desserts",
        ingredients: [
            "Heavy cream",
            "Gelatin",
            "Sugar",
            "Vanilla bean",
            "Milk",
            "Berry sauce",
            "Fresh berries"
        ],
        instructions: [
            "Bloom gelatin",
            "Heat cream mixture",
            "Combine ingredients",
            "Pour into molds",
            "Chill until set"
        ],
        nutrition: {
            calories: 260,
            protein: "3g",
            carbohydrates: "22g",
            fat: "18g"
        },
        servings: 6,
        tips: "Lightly grease molds for easier unmolding."
    },
    {
        id: 53,
        name: "Churros",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800",
        cookingTime: 35,
        difficulty: "medium",
        cuisine: "Spanish",
        category: "desserts",
        ingredients: [
            "Water",
            "Flour",
            "Butter",
            "Sugar",
            "Eggs",
            "Cinnamon",
            "Oil for frying"
        ],
        instructions: [
            "Make choux pastry",
            "Pipe into hot oil",
            "Fry until golden",
            "Drain on paper towels",
            "Roll in cinnamon sugar"
        ],
        nutrition: {
            calories: 280,
            protein: "4g",
            carbohydrates: "32g",
            fat: "16g"
        },
        servings: 6,
        tips: "Serve with chocolate sauce for dipping."
    },
    {
        id: 54,
        name: "Mango Sticky Rice",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
        cookingTime: 45,
        difficulty: "medium",
        cuisine: "Thai",
        category: "desserts",
        ingredients: [
            "Sticky rice",
            "Coconut milk",
            "Ripe mangoes",
            "Sugar",
            "Salt",
            "Sesame seeds",
            "Pandan leaf"
        ],
        instructions: [
            "Soak and steam rice",
            "Make coconut sauce",
            "Mix rice with sauce",
            "Slice mangoes",
            "Serve with extra sauce"
        ],
        nutrition: {
            calories: 340,
            protein: "5g",
            carbohydrates: "58g",
            fat: "12g"
        },
        servings: 4,
        tips: "Choose ripe, sweet mangoes for best flavor."
    },
    {
        id: 55,
        name: "Macarons",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800",
        cookingTime: 90,
        difficulty: "hard",
        cuisine: "French",
        category: "desserts",
        ingredients: [
            "Almond flour",
            "Powdered sugar",
            "Egg whites",
            "Granulated sugar",
            "Food coloring",
            "Filling of choice",
            "Salt"
        ],
        instructions: [
            "Make meringue",
            "Fold in dry ingredients",
            "Pipe onto baking sheets",
            "Rest and bake",
            "Fill and mature"
        ],
        nutrition: {
            calories: 180,
            protein: "4g",
            carbohydrates: "24g",
            fat: "8g"
        },
        servings: 24,
        tips: "Age egg whites for better results and let shells rest before baking."
    },
    // Add these Somali recipes to the recipes array
    {
        id: 56,
        name: "Canjeelo (Anjero)",
        image: "https://pbs.twimg.com/media/EUWQWjpXsAE7YCQ?format=jpg",
        cookingTime: 30,
        difficulty: "medium",
        cuisine: "Somali",
        category: "breakfast",
        ingredients: [
            "2 cups bur (flour)",
            "Water",
            "1 tablespoon sonkor (sugar)",
            "Salt",
            "Yeast",
            "Oil for cooking",
            "Ghee for serving"
        ],
        instructions: [
            "Isku dar burka, biyaha, sonkorta iyo khamiirka",
            "U daa 4-6 saacadood ilaa uu khamiiriyo",
            "Shiil birta canjeelada kulul ku shub",
            "Si wareeg ah ugu shub qiyaastii koob",
            "Sug ilaa swirka (daloolada) ay ka soo baxaan",
            "U daa ilaa duleeshiisu qalalo"
        ],
        nutrition: {
            calories: 250,
            protein: "6g",
            carbohydrates: "45g",
            fat: "4g"
        },
        servings: 6,
        tips: "Si swirka (daloolada) badan u hesho, khamiirka waa in si fiican loo dhaafo. Haddii aad habeen dhan u daayso way ka sii fiican tahay."
    },
    {
        id: 57,
        name: "Bariis Iskukaris (Somali Rice)",
        image: "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=800",
        cookingTime: 45,
        difficulty: "medium",
        cuisine: "Somali",
        category: "dinner",
        ingredients: [
            "Basmati rice",
            "Onions",
            "Garlic",
            "Cinnamon sticks",
            "Cardamom",
            "Cumin",
            "Raisins"
        ],
        instructions: [
            "Sauté onions and spices",
            "Add rice and toast lightly",
            "Add water and cook until tender",
            "Add raisins near the end",
            "Let steam for 10 minutes"
        ],
        nutrition: {
            calories: 320,
            protein: "6g",
            carbohydrates: "65g",
            fat: "5g"
        },
        servings: 6,
        tips: "Wash rice thoroughly before cooking for best results."
    },
    {
        id: 58,
        name: "Suugo Suqaar (Somali Sauce with Meat)",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800",
        cookingTime: 40,
        difficulty: "medium",
        cuisine: "Somali",
        category: "dinner",
        ingredients: [
            "Diced beef or lamb",
            "Onions",
            "Tomatoes",
            "Garlic",
            "Cumin",
            "Coriander",
            "Green peppers"
        ],
        instructions: [
            "Sauté meat until browned",
            "Add onions and garlic",
            "Add spices and tomatoes",
            "Simmer until meat is tender",
            "Serve with rice or pasta"
        ],
        nutrition: {
            calories: 380,
            protein: "28g",
            carbohydrates: "18g",
            fat: "22g"
        },
        servings: 4,
        tips: "Cut meat into small, uniform pieces for even cooking."
    },
    {
        id: 59,
        name: "Cambuulo (Black-Eyed Peas with Rice)",
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800",
        cookingTime: 50,
        difficulty: "easy",
        cuisine: "Somali",
        category: "dinner",
        ingredients: [
            "Black-eyed peas",
            "Rice",
            "Onions",
            "Ghee",
            "Cumin",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Soak black-eyed peas",
            "Cook peas until tender",
            "Cook rice separately",
            "Combine with spices and ghee",
            "Simmer together briefly"
        ],
        nutrition: {
            calories: 340,
            protein: "12g",
            carbohydrates: "58g",
            fat: "8g"
        },
        servings: 6,
        tips: "Soak peas overnight for faster cooking."
    },
    {
        id: 60,
        name: "Sambusa (Samosa)",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        cookingTime: 45,
        difficulty: "hard",
        cuisine: "Somali",
        category: "appetizer",
        ingredients: [
            "Ground beef",
            "Onions",
            "Spring roll wrappers",
            "Garlic",
            "Cumin",
            "Coriander",
            "Oil for frying"
        ],
        instructions: [
            "Prepare meat filling",
            "Fill and fold wrappers",
            "Seal edges with water",
            "Deep fry until golden",
            "Serve hot with sauce"
        ],
        nutrition: {
            calories: 220,
            protein: "8g",
            carbohydrates: "18g",
            fat: "14g"
        },
        servings: 12,
        tips: "Make sure edges are well sealed to prevent leaking while frying."
    },
    {
        id: 61,
        name: "Malawah (Somali Crepe)",
        image: "https://images.unsplash.com/photo-1639638545431-0e9ea5c8c8c1?w=800",
        cookingTime: 25,
        difficulty: "medium",
        cuisine: "Somali",
        category: "breakfast",
        ingredients: [
            "All-purpose flour",
            "Oil",
            "Salt",
            "Water",
            "Butter",
            "Sugar",
            "Cardamom (optional)"
        ],
        instructions: [
            "Mix flour, water, and salt",
            "Rest dough for 30 minutes",
            "Roll out very thin",
            "Cook on flat pan",
            "Serve with honey or sugar"
        ],
        nutrition: {
            calories: 280,
            protein: "4g",
            carbohydrates: "42g",
            fat: "10g"
        },
        servings: 4,
        tips: "Stretch the dough as thin as possible for flaky layers."
    },
    {
        id: 62,
        name: "Hilib Ari (Somali Goat Stew)",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800",
        cookingTime: 90,
        difficulty: "medium",
        cuisine: "Somali",
        category: "dinner",
        ingredients: [
            "Goat meat",
            "Onions",
            "Garlic",
            "Tomatoes",
            "Xawaash spice mix",
            "Cilantro",
            "Green chilies"
        ],
        instructions: [
            "Brown meat pieces",
            "Sauté onions and garlic",
            "Add spices and tomatoes",
            "Simmer until meat is tender",
            "Garnish with cilantro"
        ],
        nutrition: {
            calories: 350,
            protein: "32g",
            carbohydrates: "12g",
            fat: "18g"
        },
        servings: 6,
        tips: "Use young goat meat for tenderness."
    },
    {
        id: 63,
        name: "Xalwo (Halwa)",
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=800",
        cookingTime: 60,
        difficulty: "hard",
        cuisine: "Somali",
        category: "desserts",
        ingredients: [
            "Cornstarch",
            "Sugar",
            "Cardamom",
            "Nutmeg",
            "Ghee",
            "Food coloring",
            "Nuts for garnish"
        ],
        instructions: [
            "Mix cornstarch with water",
            "Cook with sugar and spices",
            "Add ghee gradually",
            "Stir continuously",
            "Pour and let set"
        ],
        nutrition: {
            calories: 290,
            protein: "2g",
            carbohydrates: "45g",
            fat: "12g"
        },
        servings: 12,
        tips: "Stir constantly to prevent sticking and burning."
    }
]; 