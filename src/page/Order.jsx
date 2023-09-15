import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import CardOrder from "../components/CardOrder";
import { menu } from "../data";

const Order = () => {
	const [toggleState, setToggleState] = useState(1);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<div className="bg-base py-10 px-36 flex gap-10">
			<SideNav state={toggleState} setToggle={setToggleState} />
			<div className="flex flex-wrap gap-5 justify-between">
				{menu.map((i) => (
					<CardOrder name={i.name} price={i.price} />
				))}
			</div>
		</div>
	);
};

export default Order;
