import React from "react";

const CardOrder = () => {
	return (
		<div className="bg-white rounded-lg shadow-xl py-5 px-6 w-[22.6rem] h-[21rem] cursor-pointer">
			<img
				src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
				alt="imgex"
				className="w-auto h-52 bg-cover"
			/>
			<div className="mt-2">
				<p className="text-xl text-dark font-bold">Lorem ipsum dollor emmet</p>
				<div className="flex gap-2 items-start">
					<p className="text-red-600 font-bold">Rp 23,232</p>
					<p className="text-grey text-xs font-bold line-through">Rp 23,232</p>
				</div>
			</div>
		</div>
	);
};

export default CardOrder;
