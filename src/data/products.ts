export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  price?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "coconut-oil",
    name: "Pure Coconut Oil",
    description: "Cold-pressed from the finest coconuts. Pure, unrefined, and perfect for hair, skin, and cooking.",
    longDescription: "Our Pure Coconut Oil is a testament to tradition. Extracted from hand-selected, mature coconuts using the cold-press method, we ensure that every drop retains its natural aroma, nutrients, and healing properties. Unlike refined oils, ours is never bleached or deodorized. It is pure, raw, and untouched by chemicals—just as nature intended. Perfect for deep conditioning hair, moisturizing skin, or adding a tropical touch to your culinary creations.",
    image: "https://picsum.photos/seed/coco1/800/800",
    tag: "Best Seller",
    price: "₹350 / 500ml",
    features: [
      "100% Cold Pressed",
      "No Preservatives",
      "Edible Grade",
      "Rich in Lauric Acid"
    ]
  },
  {
    id: "burmese-prawn-pickle",
    name: "Burmese Prawn Pickle",
    description: "A spicy, tangy, and savory delight made with authentic Burmese spices and fresh prawns.",
    longDescription: "Experience the explosive flavors of Burma with our signature Prawn Pickle. We start with fresh, succulent prawns, sun-dried to perfection, and slow-cook them in a blend of roasted chilies, garlic, and traditional Burmese spices. The result is a pickle that is equal parts spicy, tangy, and savory—an absolute umami bomb. It pairs perfectly with steaming hot rice, khichdi, or even as a spicy side to your parathas.",
    image: "https://picsum.photos/seed/prawn1/800/800",
    tag: "Signature",
    price: "₹450 / 250g",
    features: [
      "Authentic Burmese Recipe",
      "Premium Sun-dried Prawns",
      "Hand-pounded Spices",
      "Slow Cooked"
    ]
  },
  {
    id: "herbal-cough-remedy",
    name: "Herbal Cough Remedy",
    description: "An ancestral blend of honey, ginger, and tulsi to soothe your throat naturally.",
    longDescription: "When the seasons change, turn to the wisdom of our ancestors. Our Herbal Cough Remedy is more than just a syrup; it's a comforting hug in a bottle. Made by slow-infusing raw forest honey with fresh ginger juice, holy basil (tulsi), and a secret blend of warming spices like black pepper and cloves. It coats the throat, reduces inflammation, and boosts immunity naturally. Safe for children and adults alike.",
    image: "https://picsum.photos/seed/herb1/800/800",
    tag: "Wellness",
    price: "₹250 / 200ml",
    features: [
      "Raw Forest Honey Base",
      "Fresh Ginger & Tulsi",
      "Alcohol Free",
      "Immunity Booster"
    ]
  },
  {
    id: "exquisite-spices",
    name: "Exquisite Spices",
    description: "Hand-ground spice blends that bring the authentic aroma of home to your kitchen.",
    longDescription: "Elevate your daily cooking with our range of Exquisite Spices. We don't believe in industrial grinding that burns away flavor. Instead, we select whole spices from certified organic farms and slow-grind them to preserve their essential oils. Whether it's our aromatic Garam Masala, fiery Red Chili Powder, or golden Turmeric, you can smell the difference the moment you open the jar. Pure, potent, and absolutely essential for any serious home cook.",
    image: "https://picsum.photos/seed/spice1/800/800",
    tag: "Pantry",
    price: "Starts at ₹150",
    features: [
      "Stone Ground",
      "High Essential Oil Content",
      "No Added Colors",
      "Sourced from Origin"
    ]
  }
];
