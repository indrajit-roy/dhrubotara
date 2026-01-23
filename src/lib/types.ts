export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  price?: string;
  features: string[];
  sortPriority?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  category?: string;
  role?: string;
  image?: string;
}
