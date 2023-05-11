import {
	MenuFoldOutlined,
	TeamOutlined,
	DashboardOutlined,
	ReadOutlined,
	ScheduleOutlined,
	MenuUnfoldOutlined,
	ShoppingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;
const SideMenu = () => {
	const location = useLocation();
	const [selectedKeys, setSelectedKeys] = useState("/");

	useEffect(() => {
		const pathName = location.pathname;
		setSelectedKeys(pathName);
	}, [location.pathname]);

	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />

				<Menu
					className="verticalHeight"
					onClick={(item) => {
						navigate(item.key);
					}}
					selectedKeys={[selectedKeys]}
					theme="light"
					mode="vertical"
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "/",
							icon: <DashboardOutlined />,
							label: "Dashboard",
						},
						{
							key: "/course",
							icon: <ReadOutlined />,
							label: "Courses",
						},
						{
							key: "/students",
							icon: <TeamOutlined />,
							label: "Students",
						},
						{
							key: "/blog",
							icon: <ScheduleOutlined />,
							label: "Blog",
						},
						{
							key: "/orders",
							icon: <ShoppingOutlined />,
							label: "Orders",
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 50,
							height: 50,
						}}
					/>
				</Header>
			</Layout>
		</Layout>
	);
};
export default SideMenu;
