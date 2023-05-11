import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getProduct } from "../api/ApiCart";

const Course = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getProduct().then((res) => {
			setDataSource(res.products);
		});
	}, []);
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Course</Typography.Title>
			<Table
				columns={[
					{
						title: "Course Name",
						dataIndex: "title",
					},
					{
						title: "Price",
						dataIndex: "price",
					},
					{
						title: "Category",
						dataIndex: "category",
					},
					{
						title: "Rating",
						dataIndex: "rating",
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
				dataSource={dataSource}></Table>
		</Space>
	);
};

export default Course;
