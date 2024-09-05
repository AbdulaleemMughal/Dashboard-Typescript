import { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "antd";
import { OrderResponse, SingleOrder } from "../Typescripts/Card";
import { fetchOrderData } from "../Typescripts/Api";

const Order = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<SingleOrder[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchOrders().then((i) => setLoading(false));
  }, []);

  const fetchOrders = async () => {
    const response = await fetchOrderData("https://dummyjson.com/carts");
    setDataSource(response.carts.products as OrderResponse[]);
    console.log(dataSource);  
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
      <div className="order">
        <h1 className="text-white text-3xl font-bold font-sans py-2">Recent Orders</h1>
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
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Total Discount",
              dataIndex: "discountedTotal",
              render: (dprice) => <span>${dprice}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total Price",
              dataIndex: "total",
              render: (tprice) => <span>${tprice}</span>,
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            showTotal: (total) => `Total ${total} users`,
          }}
        ></Table>
      </div>
    </>
  );
};

export default Order;
