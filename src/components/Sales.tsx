import {
  CommentsResponse,
  PostsResponse,
  ProductsResponse,
} from "../Typescripts/Card";
import SaleCard from "./SaleCard";
import { LuDatabase } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { IoMdLaptop } from "react-icons/io";

type Salesprops = {
  productApi: ProductsResponse | null;
  postApi: PostsResponse | null;
  commentApi: CommentsResponse | null;
};

const Sales = ({ productApi, postApi, commentApi }: Salesprops) => {
  return (
    <>
      <div className="sales">
        <div className="row">
          <SaleCard
            productApi={productApi}
            title="Revenue"
            desc="11.38% since last month"
            icon= <IoMdLaptop />
            styles= {{fontSize: '80px', color: 'skyblue'}}
          />
          <SaleCard
            productApi={postApi}
            title="Sales"
            desc="9.61% since last month"
            icon= <LuDatabase/>
            styles= {{fontSize: '80px', color: 'red'}}
          />
          <SaleCard
            productApi={commentApi}
            title="Purchase"
            desc="2.71% since last month"
            icon= <TfiBag/>
            styles= {{fontSize: '80px', color: 'green'}}
          />
        </div>
      </div>
    </>
  );
};

export default Sales;
