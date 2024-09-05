import { useEffect, useState } from "react";
import {
  RecipesResponse,
  ProductsResponse,
  PostsResponse,
  CommentsResponse,
} from "../Typescripts/Card";
import CardItem from "./CardItem";
import Header from "./Header";
import Projects from "./Projects";
import Sales from "./Sales";
import { fetchCommentsData, fetchPostsData, fetchProductsData, fetchRecipesData } from "../Typescripts/Api";

const Cards = () => {
  const [recipeApi, setRecipeApi] = useState<RecipesResponse | null>(null);
  const [productApi, setProductApi] = useState<ProductsResponse | null>(null);
  const [postApi, setPostApi] = useState<PostsResponse | null>(null);
  const [commentApi, setCommentApi] = useState<CommentsResponse | null>(null);

  useEffect(() => {
    fetchRecipes();
    fetchProducts();
    fetchPosts();
    fetchComments();
  }, []);

  // Fetching the Data...

  const fetchRecipes = async () => {
    const response = await fetchRecipesData("https://dummyjson.com/recipes");
    setRecipeApi(response);
    // console.log(response); 
  };

  const fetchProducts = async (): Promise<void> => {
    const response = await fetchProductsData("https://dummyjson.com/products");
    setProductApi(response);
  };

  const fetchPosts = async (): Promise<void> => {
    const response = await fetchPostsData("https://dummyjson.com/posts");
    setPostApi(response);
  };

  const fetchComments = async (): Promise<void> => {
    const response = await fetchCommentsData("https://dummyjson.com/comments");
    setCommentApi(response);
  };

  return (
    <>
      <Header
        styles={{
          fontSize: "30px",
          cursor: "pointer",
          color: "white",
          paddingRight: "5px",
        }}
      />
      <div className="card-container">
        <div className="row">
          <CardItem
            styles={{
              color: "#355E3B",
              backgroundColor: "#7CFC00",
              margin: "10px",
              fontSize: "25px",
              borderRadius: "5px",
              float: "right",
              cursor: "pointer",
            }}
            recipeApi={recipeApi}
            title="Potential Growth"
          />
          <CardItem
            styles={{
              color: "#355E3B",
              backgroundColor: "#7CFC00",
              margin: "10px",
              fontSize: "25px",
              borderRadius: "5px",
              float: "right",
              cursor: "pointer",
            }}
            recipeApi={productApi}
            title="Current Revenue"
          />
          <CardItem
            styles={{
              color: "#355E3B",
              backgroundColor: "#7CFC00",
              margin: "10px",
              fontSize: "25px",
              borderRadius: "5px",
              float: "right",
              cursor: "pointer",
            }}
            recipeApi={postApi}
            title="Daily Income"
          />
          <CardItem
            styles={{
              color: "#355E3B",
              backgroundColor: "#7CFC00",
              margin: "10px",
              fontSize: "25px",
              borderRadius: "5px",
              float: "right",
              cursor: "pointer",
            }}
            recipeApi={commentApi}
            title="Current Expense"
          />
        </div>
      </div>

      <Projects />
      <Sales productApi={productApi} postApi={postApi} commentApi={commentApi} />
    </>
  );
};

export default Cards;
