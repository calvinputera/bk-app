import React from "react";
import soon from "../assets/image/soon.svg";

const Promotions = () => {
	return (
		<div
			className="bg-base h-screen flex
    flex-col justify-center items-center gap-5"
		>
			<p className="text-primary">Get Fresh Promotions</p>
			<h1 className="text-2xl font-bold text-dark">Coming Soon!</h1>
			<img src={soon} alt="soon" className="w-64" />
		</div>
	);
};

export default Promotions;
