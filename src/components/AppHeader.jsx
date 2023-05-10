import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import logo from "../asset/dabse.png";

const AppHeader = () => {
	return (
		<div className="AppHeader">
			<Image src={logo} width={150}></Image>
			<Typography.Title>D-Base Dashboard</Typography.Title>
			<Space>
				<Badge count={10}>
					<MailOutlined style={{ fontSize: 24 }} />
				</Badge>
				<Badge count={15}>
					<BellFilled style={{ fontSize: 24 }} />
				</Badge>
			</Space>
		</div>
	);
};

export default AppHeader;
