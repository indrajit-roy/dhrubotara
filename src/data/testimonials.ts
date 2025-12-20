export interface Testimonial {
  id: string;
  name: string;
  text: string;
  category?: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anonymous",
    category: "Cough & Cold",
    text: "I was suffering from a persistent cough... Soon I was diagnosed with GERD... It was symptomatic and cannot be cured through surgery. Rumi's medicines gave me a huge respite."
  },
  {
    id: "t2",
    name: "Shiladitya Sen",
    category: "Cough & Cold",
    text: "I have been using Mrs. Sushmita Sengupta's medicines for cough and cold for over a month now. They are indeed extremely effective in providing me with great relief."
  },
  {
    id: "t3",
    name: "Nandita Dey",
    role: "Professor (Retd, C.U.)",
    category: "Cough & Cold",
    text: "Antibiotics and other medicines failed to provide any respite. 15 days ago, thankfully, I came across Kashyam Mrs. Sengupta's totka... Now, my cough is gone."
  },
  {
    id: "t4",
    name: "Indrani Basu",
    role: "Exporter",
    category: "Hair Oil",
    text: "I used the Hair Oil. Very effective for my hair texture which is curly and dry. It also reduces hair fall. Overall, an excellent product and a must try for everyone."
  },
  {
    id: "t5",
    name: "Indrani Basu",
    role: "Exporter",
    category: "Gut Health",
    text: "The digestive powder gave fast relief to heart burn. Only 2 spoonful was enough to get rid of the irritation of indigestion and heart burn. 100% Recommended."
  },
  {
    id: "t6",
    name: "Shubhra Chowdhury",
    role: "Teacher (Retd.)",
    category: "General Wellness",
    text: "It was heartening to hear about your home-made medicine... It is a holistic treatment that uses all natural ingredients. I am 90% ok... I experienced absolutely no side effects."
  }
];