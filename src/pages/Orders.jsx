import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../api/ApiCart";

const Orders = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getOrders().then((res) => {
			setLoading(false);
			setDataSource(res.products);
		});
	}, []);
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Orders</Typography.Title>
			<Table
				loading={loading}
				columns={[
					{
						title: "Course Name",
						dataIndex: "title",
					},
					{
						title: "Price",
						dataIndex: "price",
						render: (value) => (
							<span>
								<span style={{ fontSize: 24 }}>৳ </span>
								{value}
							</span>
						),
					},
					{
						title: "Quantity",
						dataIndex: "quantity",
					},
					{
						title: "Discount Price",
						dataIndex: "discountedPrice",
						render: (value) => (
							<span>
								<span style={{ fontSize: 24 }}>৳ </span>
								{value}
							</span>
						),
					},
					{
						title: "Student Id",
						dataIndex: "id",
					},
					{
						title: "Total",
						dataIndex: "total",
						render: (value) => (
							<span>
								<span style={{ fontSize: 24 }}>৳ </span>
								{value}
							</span>
						),
					},
				]}
				dataSource={dataSource}
				pagination={{
					pageSize: 5,
				}}></Table>
		</Space>
	);
};

export default Orders;
