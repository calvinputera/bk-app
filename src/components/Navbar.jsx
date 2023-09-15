import logo from "../assets/image/bk-logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className="w-full h-20 bg-black relative shadow-2xl flex items-center justify-between z-50">
			<div
				className="bg-cream w-24 h-24 rounded-full absolute top-3 left-5 flex justify-center items-center cursor-pointer"
				onClick={() => navigate("/")}
			>
				<img src={logo} alt="logo" className="w-24" />
			</div>

			<div className="flex justify-between items-center gap-5 w-[35%] ml-36">
				<div onClick={() => navigate("/menu")} className="cursor-pointer">
					<p className="text-primary font-bold">Delivery</p>
					<p className="text-white font-bold text-2xl">Order</p>
				</div>
				<div onClick={() => navigate("/news")} className="cursor-pointer">
					<p className="text-primary font-bold">Get Fresh</p>
					<p className="text-white font-bold text-2xl">Promotions</p>
				</div>
				<div
					onClick={() => navigate("/large-orders")}
					className="cursor-pointer"
				>
					<p className="text-primary font-bold">Exclusive</p>
					<p className="text-white font-bold text-2xl">Large Order</p>
				</div>
			</div>

			<div className="flex gap-8 items-center mr-16">
				<p
					className="text-white font-bold text-2xl cursor-pointer"
					onClick={() => navigate("/login")}
				>
					Login
				</p>
				<div className="h-20 bg-primary flex justify-center items-center px-3">
					<HiShoppingCart color="#ffffff" size={30} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
