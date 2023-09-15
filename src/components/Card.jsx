import React from "react";
import burgerImage from "../assets/image/burger-2.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ name }) => {
	const navigate = useNavigate();

	return (
		<div className="bg-white rounded-md shadow-xl p-4 w-72 h-80">
			<img
				src={burgerImage}
				alt="burger img"
				className="w-full h-44 bg-cover"
			/>
			<div className="flex justify-between items-start mt-4">
				<p className="text-secondary font-bold text-lg w-1/2 whitespace-nowrap overflow-ellipsis overflow-hidden">
					{name}
				</p>
				<button
					className="bg-primary text-white font-bold rounded-md px-10 py-2"
					onClick={() => navigate("/menu")}
				>
					Order
				</button>
			</div>
		</div>
	);
};

export default Card;
