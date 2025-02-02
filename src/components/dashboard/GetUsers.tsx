import { Button, Space, Table, TableProps, Tag } from "antd";
import React from "react";
import { TUserRetrieve } from "../../types";
import {
  useGetUsersQuery,
  useUpdateUserStatusMutation,
} from "../../redux/features/auth/authApi";

const GetUsers: React.FC = () => {
  const { data } = useGetUsersQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();

  const changeUserStatus = async (id: string) => {
    try {
      await updateUserStatus({ id });
    } catch (err) {
      console.log(err);
    }
  };
  const columns: TableProps<Partial<TUserRetrieve>>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      render: (_, { name }) => (
        <div>
          <h4 style={{ margin: 0, padding: 0 }}>{name}</h4>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "3",
      render: (_, { role }) => (
        <>
          {
            <Tag color={"#cb795f"} key={3}>
              {role}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "4",
      render: (_, { isBlocked }) => (
        <>
          {
            <Tag color={"#419b6d"} key={4}>
              {isBlocked ? "Deactivated" : "Active"}
            </Tag>
          }
        </>
      ),
    },

    {
      title: "Action",
      key: "6",
      render: (_, { _id, isBlocked }) => (
        <Space size="middle">
          <Button
            color="primary"
            variant="dashed"
            onClick={() => changeUserStatus(_id as string)}
          >
            {isBlocked ? "Activate" : "Deactivate"}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table<Partial<TUserRetrieve>>
        columns={columns}
        dataSource={data?.data ?? []}
        rowKey="_id"
      />
    </>
  );
};

export default GetUsers;
