import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../api/ApiCart";

const Students = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getUsers().then((res) => {
			setLoading(false);
			setDataSource(res.users);
		});
	}, []);
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Students</Typography.Title>
			<Table
				loading={loading}
				columns={[
					{
						title: "Photo",
						dataIndex: "image",
						render: (link) => {
							return <Avatar src={link} />;
						},
					},
					{
						title: "Id",
						dataIndex: "id",
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
						title: "Phone",
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
				dataSource={dataSource}
				pagination={{
					pageSize: 5,
				}}></Table>
		</Space>
	);
};

export default Students;
