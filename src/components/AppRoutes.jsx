import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Course from "../pages/Course";
import Students from "../pages/Students";
import Blog from "../pages/Blog";
import Orders from "../pages/Orders";

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/course" element={<Course />} />
				<Route path="/students" element={<Students />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/orders" element={<Orders />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
