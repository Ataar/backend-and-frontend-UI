// export interface Product {
//   _id: string;
//   title: string;
//   product_description: string[];
//   rating: number;
//   reviews_count: number;
//   images: string[];
//   tags: string[];
//   product_details: string;
//   return_policy: string | null;
//   total_price: string;
//   product_specifications: ProductSpecification[];
//   category: string;
//   subcategory: string;
// }

// export interface ProductSpecification {
//   _id: string;
//   specification_name: string;
//   specification_value: string;
// }
export interface Product {
  _id: string;
  title: string;
  product_description: string[];
  rating: number;
  reviews_count: number;
  images: string[];  // Default images array
  hoverImage: string;  // Hover image
  tags: string[];
  product_details: string;
  return_policy: string | null;
  total_price: string;
  product_specifications: ProductSpecification[];
  category: string;
  subcategory: string;
  isHovering:boolean
}

export interface ProductSpecification {
  _id: string;
  specification_name: string;
  specification_value: string;
}
