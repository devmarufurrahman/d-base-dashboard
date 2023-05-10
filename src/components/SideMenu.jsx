import { Menu } from "antd";

const SideMenu = () => {
	return (
		<div className="SideMenu">
			<Menu
				onClick={(item) => {
					item;
				}}
				items={[
					{
						label: "Dashboard",
						key: "/",
					},
					{
						label: "Course",
						key: "/course",
					},
					{
						label: "Orders",
						key: "/orders",
					},
					{
						label: "Students",
						key: "/students",
					},
				]}></Menu>
		</div>
	);
};

export default SideMenu;
