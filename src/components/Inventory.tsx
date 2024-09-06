import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchProductsData } from "../Typescripts/Api";
import { Product } from "../Typescripts/Card";
import { Rate, Table } from "antd";

const Inventory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((i) =>
      setLoading(false)
    );
  }, []);

  const getInventory = async () => {
    const response = await fetchProductsData("https://dummyjson.com/products");
    setDataSource(response.products);
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
      <div className="text-white">
        <h1 className="text-white text-3xl font-bold font-sans py-2">
          Inventory
        </h1>
        <Table
          className="custom-table"
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value: string) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating: number) => (
                <Rate value={rating} allowHalf disabled />
              ),
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Warranty",
              dataIndex: "warrantyInformation",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
            showTotal: (total: number) => `Total ${total} users`,
          }}
        ></Table>
      </div>
    </>
  );
};

export default Inventory;
