export interface SizeOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  subCategory?: string;
  price?: number;
  sizes?: SizeOption[];
  description?: string;
  image?: string; // path under /assets/ e.g. "veg noodles.jpg"
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedSize?: SizeOption;
  itemTotal: number;
}
