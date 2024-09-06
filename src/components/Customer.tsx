import { Table } from "antd";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchCustomersData } from "../Typescripts/Api";
import { CustomerResponse } from "../Typescripts/Card";

const Customer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<CustomerResponse[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCustomer().then((i) => setLoading(false));
  }, []);

  const fetchCustomer = async () => {
    const response = await fetchCustomersData("https://dummyjson.com/users");
    setDataSource(response as CustomerResponse[]);
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
      <div className="customer">
        <h1 className="text-white text-3xl font-bold font-sans py-2">
          Inventory
        </h1>
        <Table
          className="custom-table"
          columns={[
            {
              title: "UserName",
              dataIndex: "username",
            },
            {
              title: "FirstName",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone No",
              dataIndex: "phone",
            },
            {
              title: "Address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            pageSize: 6,
            showTotal: (total) => `Total ${total} users`,
          }}
        ></Table>
      </div>
    </>
  );
};

export default Customer;
