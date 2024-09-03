import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  CommentsResponse,
  PostsResponse,
  ProductsResponse,
  RecipesResponse,
} from "../Typescripts/Card";

type CardItemProps = {
  styles: React.CSSProperties;
  recipeApi:
    | (RecipesResponse | null)
    | (ProductsResponse | null)
    | (PostsResponse | null)
    | (CommentsResponse | null);
    title: string;
};

const CardItem = ({ styles, recipeApi, title }: CardItemProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="row items-center">
            <div className="col-md-4 text-white">
              <h3 className="text-2xl">${recipeApi?.total}</h3>
            </div>
            <div className="col-md-3">
              <p className="text-sm text-green-500">+{recipeApi?.limit}%</p>
            </div>
            <div className="col-md-5">
              <GoArrowUpRight style={styles} />
            </div>
          </div>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
