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

  const fetchRecipes = async (): Promise<void> => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json: RecipesResponse = await data.json();
    setRecipeApi(json);
  };

  const fetchProducts = async (): Promise<void> => {
    const data = await fetch("https://dummyjson.com/products");
    const json: ProductsResponse = await data.json();
    setProductApi(json);
  };

  const fetchPosts = async (): Promise<void> => {
    const data = await fetch("https://dummyjson.com/posts");
    const json: PostsResponse = await data.json();
    setPostApi(json);
  };

  const fetchComments = async (): Promise<void> => {
    const data = await fetch("https://dummyjson.com/comments");
    const json: CommentsResponse = await data.json();
    setCommentApi(json);
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
        commentApi={commentApi}
        recipeApi={recipeApi}
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
