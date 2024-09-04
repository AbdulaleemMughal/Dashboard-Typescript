import React from "react";
import {
  CommentsResponse,
  PostsResponse,
  ProductsResponse,
} from "../Typescripts/Card";

type SaleCardProps = {
  productApi:
    | (ProductsResponse | null)
    | (PostsResponse | null)
    | (CommentsResponse | null);
  title: string;
  desc: string;
  icon: React.JSX.Element;
  styles: React.CSSProperties;
};

const SaleCard = ({ productApi, title, desc, icon, styles }: SaleCardProps) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <h2 className="text-white text-xl font-bold pb-3">{title}</h2>
          <div className="row items-center">
            <div className="col-md-3 text-white">
              <h3 className="text-2xl">${productApi?.total}</h3>
            </div>
            <div className="col-md-3">
              <p className="text-sm text-green-500">+{productApi?.limit}%</p>
            </div>
            <div className="col-md-6" style={styles}>
              <div className="float-right">{icon}</div>
            </div>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleCard;
