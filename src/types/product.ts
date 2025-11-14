export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  videoUrl?: string;
  highlights: string[];
  price?: number;
}

export interface Hamper {
  id: string;
  title: string;
  description: string;
  images: string[];
  videoUrl?: string;
  products: string[];
  price?: number;
}
