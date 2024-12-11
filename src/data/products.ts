import { Product } from "@/types";

export const products: Product[] = [
  {
    id: '1',
    name: 'Coconut Oil',
    description: 'Natural face wash with neem extract',
    price: 12.99,
    image: 'https://vanitywagon.in/cdn/shop/products/1_67883fa2-4afe-4fe1-bbb6-e823ca8b0681_1080x1080.jpg?v=1638343835',
    category: 'face'
  },
  {
    id: '2',
    name: 'Cough Relief', 
    description: 'Traditional hair oil with tulsi',
    price: 15.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqFOYVKyIAn1lbIJHWpHCOJN0hetRnoxHZQ&s',
    category: 'hair'
  },
  {
    id: '3',
    name: 'Digestive Aid',
    description: 'Brightening face mask with turmeric',
    price: 9.99,
    image: 'https://vanitywagon.in/cdn/shop/products/1_67883fa2-4afe-4fe1-bbb6-e823ca8b0681_1080x1080.jpg?v=1638343835',
    category: 'face'
  }
];