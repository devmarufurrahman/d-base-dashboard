import { Card, Space, Statistic, Table, Typography } from "antd";
import {
	DollarCircleOutlined,
	ReadOutlined,
	ScheduleOutlined,
	ShoppingCartOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../api/ApiCart";

const Dashboard = () => {
	const iconStyle = {
		color: "green",
		backgroundColor: "rgba(0,255,0,0.25",
		borderRadius: 20,
		fontSize: 24,
		padding: 8,
	};
	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={3}>Dashboard</Typography.Title>
			<Space direction="horizontal">
				<DashboardCard
					icon={<ReadOutlined style={iconStyle} />}
					title={"Orders"}
					value={1234}
				/>
				<DashboardCard
					icon={<ShoppingCartOutlined style={iconStyle} />}
					title={"Courses"}
					value={1234}
				/>
				<DashboardCard
					icon={<ScheduleOutlined style={iconStyle} />}
					title={"Blogs"}
					value={1234}
				/>
				<DashboardCard
					icon={<TeamOutlined style={iconStyle} />}
					title={"Students"}
					value={1234}
				/>
				<DashboardCard
					icon={<DollarCircleOutlined style={iconStyle} />}
					title={"Revenue"}
					value={1234}
				/>
			</Space>
			<Space>
				<RecentOrders />
			</Space>
		</Space>
	);
};

function DashboardCard({ title, value, icon }) {
	return (
		<Card>
			<Space direction="horizontal">
				{icon}
				<Statistic title={title} value={value} />
			</Space>
		</Card>
	);
}

function RecentOrders() {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getOrders().then((res) => {
			setDataSource(res.products.splice(0, 3));
			console.log(res);

			setLoading(false);
		});
	}, []);
	return (
		<>
			<Typography.Text>Recent Orders</Typography.Text>
			<Table
				columns={[
					{
						title: "title",
						dataIndex: "title",
					},
					{
						title: "Quantity",
						dataIndex: "quantity",
					},
					{
						title: "Price",
						dataIndex: "discountedPrice",
					},
				]}
				loading={loading}
				dataSource={dataSource}></Table>
		</>
	);
}

export default Dashboard;
