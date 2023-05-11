import { Layout, theme } from "antd";
import AppRoutes from "./AppRoutes";

const { Content } = Layout;

const PageContent = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div className="PageContent">
			<Layout theme="dark">
				<Content
					style={{
						margin: "24px 16px",
						padding: 40,
						minHeight: 280,
						background: colorBgContainer,
						width: "100vw",
					}}>
					<AppRoutes />
				</Content>
			</Layout>
		</div>
	);
};

export default PageContent;
