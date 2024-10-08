// Interface for the API response
export interface RecipesResponse extends Recipe {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

// Interface for individual recipe

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

// Interface for individual products

export interface ProductsResponse extends Product {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// Interface for individual posts

interface Reaction {
  likes: number;
  dislikes: number;
}

interface Post extends Reaction {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reaction;
  views: number;
  userId: number;
}

export interface PostsResponse extends Post {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

// Interface for individual comments

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment extends User {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface CommentsResponse extends Comment {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}

// Interface for individual customers

export interface CustomerResponse {
  id: number;
  firstname: string;
  lastname: string;
  maidenName: string;
  username: string;
  phone: number;
  gender: string;
  address: Address;
  [key: string]: any;
}

interface Address {
  address: string;
}

// Interface for individual orders
export interface OrderResponse extends SingleOrder {
  id: number;
  products: SingleOrder[];
  [key: string]: any;
}

export interface SingleOrder {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  total: number;
  [key: string]: any;
}
