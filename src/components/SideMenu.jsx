// import { Menu } from "antd";

// const SideMenu = () => {
// 	return (
// 		<div className="SideMenu">
// 			<Menu
// 				onClick={(item) => {
// 					item;
// 				}}
// 				items={[
// 					{
// 						label: "Dashboard",
// 						key: "/",
// 					},
// 					{
// 						label: "Course",
// 						key: "/course",
// 					},
// 					{
// 						label: "Orders",
// 						key: "/orders",
// 					},
// 					{
// 						label: "Students",
// 						key: "/students",
// 					},
// 				]}></Menu>
// 		</div>
// 	);
// };

// export default SideMenu;

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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;
const SideMenu = () => {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />

				<Menu
					onClick={(item) => {
						navigate(item.key);
					}}
					theme="light"
					mode="inline"
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
							width: 64,
							height: 64,
						}}
					/>
				</Header>
			</Layout>
		</Layout>
	);
};
export default SideMenu;
