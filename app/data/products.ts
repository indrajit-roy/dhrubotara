export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: "organic-coconut-oil",
    name: "Organic Coconut Oil",
    description:
      "100% pure, cold-pressed organic coconut oil sourced from sustainable farms. Perfect for cooking, skincare, and hair care.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop&q=80",
    benefits: [
      "Rich in medium-chain fatty acids",
      "Natural antimicrobial properties",
      "Promotes healthy skin and hair",
      "Suitable for high-temperature cooking",
    ],
    ingredients: ["100% Organic Cold-Pressed Coconut Oil"],
    usage:
      "Can be used for cooking, baking, as a natural moisturizer, or hair treatment.",
  },
  {
    id: "organic-cough-remedy",
    name: "Organic Cough Remedy",
    description:
      "Natural herbal cough syrup made with organic honey, thyme, and elderberry. Soothes throat irritation and supports respiratory health.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&auto=format&fit=crop&q=80",
    benefits: [
      "Soothes throat irritation",
      "Supports respiratory health",
      "Natural immune system boost",
      "No artificial additives",
    ],
    ingredients: [
      "Organic Honey",
      "Organic Thyme Extract",
      "Organic Elderberry",
      "Organic Ginger",
    ],
    usage:
      "Take 1 teaspoon 3 times daily or as needed. Safe for adults and children over 12.",
  },
  {
    id: "organic-digestive-aid",
    name: "Organic Digestive Aid",
    description:
      "Natural digestive support blend made with organic ginger, peppermint, and fennel. Promotes healthy digestion and reduces bloating.",
    price: 29.99,
    // https://plus.unsplash.com/premium_photo-1739831741646-f5f11298d3c3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    // https://unsplash.com/photos/a-jar-of-jam-b9JB_msrFhA
    image: "/images/products/digestive.jpg",
    benefits: [
      "Promotes healthy digestion",
      "Reduces bloating",
      "Calms stomach discomfort",
      "Supports gut health",
    ],
    ingredients: [
      "Organic Ginger Root",
      "Organic Peppermint Leaf",
      "Organic Fennel Seed",
      "Organic Chamomile",
    ],
    usage:
      "Take 2 capsules after meals or as recommended by your healthcare provider.",
  },
];
