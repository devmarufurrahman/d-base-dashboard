import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPost } from "../api/ApiCart";

const Blog = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getPost().then((res) => {
			setLoading(false);
			setDataSource(res.posts);
		});
	}, []);
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Blog Post</Typography.Title>
			<Table
				loading={loading}
				columns={[
					{
						title: "Post Id",
						dataIndex: "id",
					},
					{
						title: "Post Title",
						dataIndex: "title",
					},
					{
						title: "User Id",
						dataIndex: "userId",
					},
					{
						title: "Reactions",
						dataIndex: "reactions",
					},
				]}
				dataSource={dataSource}
				pagination={{
					pageSize: 5,
				}}></Table>
		</Space>
	);
};

export default Blog;
