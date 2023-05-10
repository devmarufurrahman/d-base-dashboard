import "./App.css";
import AppHeader from "./components/AppHeader";
import { Space } from "antd";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import AppFooter from "./components/AppFooter";
function App() {
	return (
		<>
			<div className="app">
				<AppHeader />
				<Space className="sideMenuAndPageContent">
					<SideMenu></SideMenu>
					<PageContent></PageContent>
				</Space>
				<AppFooter />
			</div>
		</>
	);
}

export default App;
