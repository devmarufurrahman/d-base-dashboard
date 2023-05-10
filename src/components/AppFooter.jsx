import { Typography } from "antd";

const AppFooter = () => {
	return (
		<div className="AppFooter">
			<Typography.Link href="tel:+8801757474700">
				+8801757474700
			</Typography.Link>
			<Typography.Link href="https://www.google.com" target={"_blank"}>
				Privacy Policy
			</Typography.Link>
			<Typography.Link href="https://www.google.com" target={"_blank"}>
				Terms and condition
			</Typography.Link>
		</div>
	);
};

export default AppFooter;
