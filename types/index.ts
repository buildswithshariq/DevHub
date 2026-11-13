export type ProductCategory = 
  | 'all'
  | 'scooties'
  | 'batteries'
  | 'brakes'
  | 'tires'
  | 'motors'
  | 'electricals'
  | 'accessories';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  oemNumber?: string;
  compatibleModels: string[];
  description: string;
  features: string[];
  specs: ProductSpec[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderDetails {
  customerName: string;
  phoneNumber: string;
  city: string;
  deliveryAddress: string;
  scooterModel: string;
  orderNotes?: string;
}

export interface TemplateMeta {
  id: string;
  name: string;
  tagline: string;
  styleDescription: string;
  primaryColor: string;
  accentColor: string;
  bgStyle: string;
  badgeStyle: string;
  targetAudience: string;
  features: string[];
}
