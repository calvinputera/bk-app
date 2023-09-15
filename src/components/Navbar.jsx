import logo from "../assets/image/bk-logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Typography,
	Input,
	Button,
	Avatar,
} from "@material-tailwind/react";
import { useState } from "react";
import burgerImage from "../assets/image/burger-2.jpg";

const Navbar = () => {
	const [openPopover, setOpenPopover] = useState(false);

	const triggers = {
		onMouseEnter: () => setOpenPopover(true),
		onMouseLeave: () => setOpenPopover(false),
	};

	const navigate = useNavigate();

	return (
		<>
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

					<Popover
						open={openPopover}
						handler={setOpenPopover}
						placement="bottom-end"
					>
						<PopoverHandler {...triggers}>
							{/* <Button variant="text">Profile Info</Button> */}
							<div className="h-20 bg-primary flex justify-center items-center px-3">
								<HiShoppingCart color="#ffffff" size={30} />
							</div>
						</PopoverHandler>
						<PopoverContent
							{...triggers}
							className="z-50 w-[24rem] flex flex-col gap-5 shadow-xl"
						>
							<div className="flex justify-between w-full border border-b-form pb-4">
								<div className="flex gap-2">
									<div className="w-10 h-10 bg-black">
										<img
											src={burgerImage}
											alt="burger img"
											className="bg-cover w-full"
										/>
									</div>
									<p>Cheese Burger</p>
								</div>
								<p>x2</p>
								<p>Rp 12312</p>
							</div>
							<div className="flex justify-between">
								<p className="text-lg">Sub Total</p>
								<p className="text-xl">Rp 1231212</p>
							</div>
							<button className="bg-primary text-white font-bold text-xl p-2 rounded-lg w-full">
								Go To Cart
							</button>
						</PopoverContent>
					</Popover>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
