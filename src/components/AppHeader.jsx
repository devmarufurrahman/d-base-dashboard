import { Badge, Drawer, Image, List, Space, Typography, Dropdown } from "antd";
import {
	BellFilled,
	LockOutlined,
	LogoutOutlined,
	MailOutlined,
	ProfileOutlined,
	UserOutlined,
} from "@ant-design/icons";
import logo from "../asset/dabse.png";
import { useEffect, useState } from "react";
import { getMail, getOrders } from "../api/ApiCart";

const AppHeader = () => {
	const [mail, setMail] = useState([]);
	const [order, setOrder] = useState([]);
	const [openMail, setOpenMail] = useState(false);
	const [notificationOpen, setNotificationOpen] = useState(false);
	useEffect(() => {
		getMail().then((res) => {
			setMail(res.comments);
		});
		getOrders().then((res) => {
			setOrder(res.products);
		});
	}, []);

	const items = [
		{
			label: "My Profile",
			key: "1",
			icon: <UserOutlined />,
		},
		{
			label: "Profile Update",
			key: "2",
			icon: <ProfileOutlined />,
		},
		{
			label: "Change Password",
			key: "3",
			icon: <LockOutlined />,
		},
		{
			label: "Sing Out",
			key: "4",
			icon: <LogoutOutlined />,
		},
	];

	return (
		<div className="AppHeader">
			<Image preview={false} src={logo} width={150}></Image>

			<Space size={30}>
				<Badge count={mail.length} dot>
					<MailOutlined
						style={{ fontSize: 24 }}
						onClick={() => {
							setOpenMail(true);
						}}
					/>
				</Badge>
				<Badge count={order.length}>
					<BellFilled
						style={{ fontSize: 24 }}
						onClick={() => {
							setNotificationOpen(true);
						}}
					/>
				</Badge>

				<Dropdown
					menu={{
						items,
					}}>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
							<UserOutlined
								style={{
									fontSize: 24,
									color: "green",
									backgroundColor: "rgba(0,255,0,0.25",
									borderRadius: 20,
									padding: 8,
									cursor: "pointer",
								}}
							/>
						</Space>
					</a>
				</Dropdown>
			</Space>
			<Drawer
				title="Mails"
				open={openMail}
				onClose={() => {
					setOpenMail(false);
				}}
				maskClosable>
				<List
					dataSource={mail}
					renderItem={(item) => {
						return <List.Item>{item.body}</List.Item>;
					}}></List>
			</Drawer>
			<Drawer
				title="Notification"
				open={notificationOpen}
				onClose={() => {
					setNotificationOpen(false);
				}}
				maskClosable>
				<List
					dataSource={order}
					renderItem={(item) => {
						return (
							<List.Item>
								<Typography.Text strong>{item.title}</Typography.Text> has been
								order!
							</List.Item>
						);
					}}></List>
			</Drawer>
		</div>
	);
};

export default AppHeader;
