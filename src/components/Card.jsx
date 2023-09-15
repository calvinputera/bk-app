import React from "react";

const Card = () => {
	return (
		<div className="bg-white rounded-md shadow-xl p-4 w-72 h-80">
			<img
				src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
				alt="imgex"
				className="w-auto h-44 bg-cover"
			/>
			<div className="flex justify-between items-start mt-4">
				<p className="text-secondary font-bold text-xl w-1/2">lorem ipsum</p>
				<button className="bg-primary text-white font-bold rounded-md px-10 py-2">
					Order
				</button>
			</div>
		</div>
	);
};

export default Card;
