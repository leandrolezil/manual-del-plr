export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Bonus {
  title: string;
  description: string;
  value: string;
  imageAlt: string;
}

export interface ProductModule {
  number: number;
  title: string;
  description: string;
}