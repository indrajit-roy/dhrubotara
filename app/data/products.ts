export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  dosage?: string;
}

export const products: Product[] = [
  {
    id: "kashyam",
    name: "Kashyam",
    description:
      "A potent Ayurvedic remedy for persistent cough and cold, blending traditional herbs for respiratory relief.",
    image: "/images/kashyam.jpg",
    benefits: [
      "Provides relief from persistent cough and cold",
      "Soothes throat irritation",
      "Supports respiratory health",
      "Made with natural ingredients",
    ],
    ingredients: [
      "Sitopaladi (rock candy)",
      "Jeshthamadh (liquorice root)",
      "Black pepper",
      "Michri (rock sugar)",
    ],
    usage: "Take a quarter teaspoon with warm water or honey",
    dosage: "Thrice a day or as needed",
  },
  {
    id: "nariyal",
    name: "Nariyal Hair Oil",
    description:
      "A nourishing hair oil that combines the goodness of coconut with traditional herbs for healthy hair growth and scalp care.",
    image: "/images/nariyal.jpg",
    benefits: [
      "Reduces hair fall",
      "Promotes hair growth",
      "Conditions and softens hair",
      "Nourishes the scalp",
    ],
    ingredients: [
      "Coconut oil",
      "Hibiscus flower",
      "Nigella seeds",
      "Fenugreek seeds",
      "Aloevera",
      "Curry leaves",
      "Small onions",
      "Amla",
      "Vitamin E",
      "MahaBhringaraj oil",
    ],
    usage:
      "Massage into scalp and hair, leave for at least 30 minutes before washing",
  },
  {
    id: "swasti",
    name: "Swasti Digestive Mix",
    description:
      "A digestive aid that promotes gut health and provides relief from bloating and indigestion.",
    image: "/images/swasti.jpg",
    benefits: [
      "Aids digestion",
      "Reduces bloating and flatulence",
      "Improves appetite",
      "Promotes gut health",
    ],
    ingredients: [
      "Fennel",
      "Carrom (ajwain)",
      "Cinnamon",
      "Black pepper",
      "Lime",
      "Honey",
    ],
    usage: "Take a quarter spoonful with warm water",
    dosage: "Three times a day before meals",
  },
];
