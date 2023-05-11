import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
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

	return (
		<div className="AppHeader">
			<Image preview={false} src={logo} width={150}></Image>
			<Typography.Title>Admin</Typography.Title>
			<Space>
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
