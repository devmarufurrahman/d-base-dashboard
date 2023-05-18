import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Course from "../pages/Course";
import Students from "../pages/Students";
import Blog from "../pages/Blog";
import Orders from "../pages/Orders";
import StudentModify from "../pages/StudentModify";
import CourseModify from "../pages/CourseModify";

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/course" element={<Course />} />
				<Route path="/students" element={<Students />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/student-modify" element={<StudentModify />} />
				<Route path="/course-edit" element={<CourseModify />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
