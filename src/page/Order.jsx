import React, { useState } from "react";
import SideNav from "../components/SideNav";
import CardOrder from "../components/CardOrder";

const Order = () => {
	const [toggleState, setToggleState] = useState(1);

	return (
		<div className="bg-base py-10 px-36 flex gap-10">
			<SideNav state={toggleState} setToggle={setToggleState} />
			<div className="flex flex-wrap gap-5 justify-between">
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
			</div>
		</div>
	);
};

export default Order;
