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
