import React from "react";
import burgerImage from "../assets/image/burger-2.jpg";

const CardOrder = ({ name, price }) => {
	return (
		<div className="bg-white rounded-lg shadow-xl py-5 px-6 w-[22.6rem] h-[22rem] cursor-pointer">
			<img
				src={burgerImage}
				alt="burger img"
				className="w-full h-52 bg-cover"
			/>
			<div className="mt-2">
				<p className="text-xl text-dark font-bold">{name}</p>
				<div className="flex gap-2 items-start">
					<p className="text-red-600 font-bold">Rp {price}</p>
					<p className="text-grey text-xs font-bold line-through">Rp 23,232</p>
				</div>
			</div>
		</div>
	);
};

export default CardOrder;
