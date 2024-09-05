import {
  ProductsResponse,
  CommentsResponse,
  PostsResponse,
  RecipesResponse,
  CustomerResponse,
  OrderResponse
} from "./Card";

export const fetchRecipesData = async (url: string): Promise<RecipesResponse> => {
    const data = await fetch(url);
    const json: RecipesResponse = await data.json();
    return json;
};

export const fetchCommentsData = async (url: string): Promise<CommentsResponse> => {
    const data = await fetch(url);
    const json: CommentsResponse = await data.json();
    return json;
};

export const fetchProductsData = async (url: string): Promise<ProductsResponse> => {
    const data = await fetch(url);
    const json: ProductsResponse = await data.json();
    return json;
};

export const fetchPostsData = async (url: string): Promise<PostsResponse> => {
    const data = await fetch(url);
    const json: PostsResponse = await data.json();
    return json;
};

export const fetchCustomersData = async (url: string): Promise<CustomerResponse[]> => {
    const data = await fetch(url);
    const json = await data.json();
    return json.users as CustomerResponse[]
};

export const fetchOrderData = async (url: string): Promise<OrderResponse> => {
    const data = await fetch(url);
    const json = await data.json();
    return json.carts.products as OrderResponse;
};  