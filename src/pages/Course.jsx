import { Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getProduct } from "../api/ApiCart";

const Course = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getProduct().then((res) => {
			setLoading(false);
			setDataSource(res.products);
		});
	}, []);
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Course</Typography.Title>
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
						title: "Category",
						dataIndex: "category",
					},
					{
						title: "Rating",
						dataIndex: "rating",
						render: (rating) => {
							return <Rate value={rating} allowHalf disabled />;
						},
					},
					{
						title: "Discount",
						dataIndex: "discountPercentage",
					},
					{
						title: "Enrolled",
						dataIndex: "stock",
					},
				]}
				dataSource={dataSource}
				pagination={{
					pageSize: 5,
				}}></Table>
		</Space>
	);
};

export default Course;
