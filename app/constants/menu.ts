export const PRODUCTS = [
  {
    name: 'Pizza Pepperoni',
    description:
      'A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!',
    price: 50,
    img: 'pizza_pepperoni.jpeg',
  },
  {
    name: 'Margherita Pizza',
    description:
      'Classic Margherita pizza with fresh basil, mozzarella, and tomato sauce on a thin crispy crust.',
    price: 45,
    img: 'pizza_margherita.jpg',
  },
  {
    name: 'BBQ Chicken Pizza',
    description:
      'Savory BBQ chicken, red onions, mozzarella cheese, and tangy BBQ sauce on a freshly baked crust.',
    price: 55,
    img: 'pizza_BBQ_chicken.jpg',
  },
  {
    name: 'Hawaiian Pizza',
    description:
      'A tropical mix of ham, pineapple, mozzarella cheese, and tomato sauce on a thin crust.',
    price: 50,
    img: 'pizza_hawaiian.jpg',
  },
  {
    name: 'Veggie Pizza',
    description:
      'Loaded with fresh bell peppers, onions, mushrooms, and olives, topped with mozzarella and tomato sauce.',
    price: 48,
    img: 'pizza_veggie.jpg',
  },
  {
    name: 'Four Cheese Pizza',
    description:
      'A cheesy delight with mozzarella, cheddar, parmesan, and gorgonzola on a crispy crust.',
    price: 52,
    img: 'pizza_4cheese.jpg',
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy sauce, pancetta, and parmesan cheese.',
    price: 40,
    img: 'spaghetti_carbonara.jpg',
  },
  {
    name: 'Fettuccine Alfredo',
    description:
      'Creamy Alfredo sauce tossed with fettuccine pasta and topped with parmesan cheese.',
    price: 42,
    img: 'fettuccine_alfredo.jpg',
  },
  {
    name: 'Lasagna Bolognese',
    description: 'Layers of pasta, rich meat sauce, and béchamel topped with melted cheese.',
    price: 55,
    img: 'lasagna_bolognese.jpg',
  },
  {
    name: 'Penne Arrabbiata',
    description: 'Penne pasta in a spicy tomato sauce with garlic, chili, and fresh parsley.',
    price: 38,
    img: 'penne_arrabbiata.jpg',
  },
  {
    name: 'Cheeseburger',
    description:
      'Juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce, served with fries.',
    price: 35,
    img: 'cheeseburger.jpg',
  },
  {
    name: 'Bacon Burger',
    description:
      'Beef patty with crispy bacon, cheddar, lettuce, tomato, and BBQ sauce, served with fries.',
    price: 40,
    img: 'baconburger.jpg',
  },
  {
    name: 'Veggie Burger',
    description:
      'Delicious plant-based patty with fresh veggies, vegan cheese, and house sauce on a toasted bun.',
    price: 38,
    img: 'veggie_burger.jpg',
  },
  {
    name: 'Chicken Sandwich',
    description: 'Grilled chicken breast with lettuce, tomato, and mayo on a fresh bun.',
    price: 34,
    img: 'chicken_sandwich.jpg',
  },
  {
    name: 'Caesar Salad',
    description:
      'Crisp romaine lettuce with Caesar dressing, parmesan cheese, and crunchy croutons.',
    price: 25,
    img: 'caesar_salad.jpg',
  },
  {
    name: 'Greek Salad',
    description: 'Fresh tomatoes, cucumbers, olives, feta cheese, and a light olive oil dressing.',
    price: 28,
    img: 'greek_salad.jpg',
  },
  {
    name: 'Caprese Salad',
    description: 'Sliced fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
    price: 30,
    img: 'caprese_salad.jpg',
  },
  {
    name: 'French Fries',
    description: 'Crispy golden fries served with ketchup or mayo.',
    price: 15,
    img: 'french_fries.jpg',
  },
  {
    name: 'Onion Rings',
    description: 'Crispy battered onion rings served with a tangy dipping sauce.',
    price: 18,
    img: 'onion_rings.jpg',
  },
  {
    name: 'Tiramisu',
    description:
      'Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa.',
    price: 22,
    img: 'tiramisu.jpg',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    price: 24,
    img: 'chocolate_lava_cake.jpg',
  },
  {
    name: 'Cheesecake',
    description: 'Creamy cheesecake with a buttery graham cracker crust and strawberry topping.',
    price: 23,
    img: 'cheesecake.jpg',
  },
  {
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream topped with chocolate sauce, whipped cream, and nuts.',
    price: 20,
    img: 'ice_cream_sundae.jpg',
  },
  {
    name: 'Panna Cotta',
    description: 'Smooth Italian dessert made with cream, vanilla, and a hint of fruit sauce.',
    price: 21,
    img: 'panna_cotta.jpg',
  },
] as const;

export type Product = (typeof PRODUCTS)[number];
