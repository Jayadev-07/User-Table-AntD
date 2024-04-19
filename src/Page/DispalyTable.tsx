import { Table, TableColumnsType } from "antd";
import useDatafetch, { User } from "../Customhooks/useDatafetch";
import "../Scss/Page-Style/DisplayTable.scss";
import { Header } from "antd/es/layout/layout";

const columns: TableColumnsType<User> = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Role", dataIndex: "role", key: "role" },
];

const DispalyTable = () => {
  const { data, error, isLoading } = useDatafetch();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    <div>Error occur on data fetching, try again later</div>;
  }
  return (
    <section className="tbody">
      <Header className="header">
        <h1>User Table</h1>
      </Header>
      <div className="container">
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
          }}
          dataSource={data}
          pagination={{
            pageSize: 5,
            hideOnSinglePage: true,
          }}
        />
      </div>
    </section>
  );
};

export default DispalyTable;
