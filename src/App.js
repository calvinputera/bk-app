import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashLayout from "./components/DashLayout";
import Home from "./page/Home";
import Order from "./page/Order";
import Exclusive from "./page/Exclusive";
import Promotions from "./page/Promotions";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="dash" element={<DashLayout />} />
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/menu" element={<Order />} />
				<Route path="/news" element={<Promotions />} />
				<Route path="/large-orders" element={<Exclusive />} />
			</Route>
		</Routes>
	);
}

export default App;
