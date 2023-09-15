import React from "react";
import { HiSearch } from "react-icons/hi";
import { menu } from "../menu";

const SideNav = ({ state, setToggle }) => {
	return (
		<div className="flex flex-col gap-2 items-center">
			<div className="relative mb-7">
				<input
					type="text"
					placeholder="Search menu..."
					className="w-48 rounded-lg py-3 pl-3 pr-16 shadow-md"
				/>
				<div className="bg-primary w-auto p-3 absolute right-0 top-0 rounded-r-lg cursor-pointer">
					<HiSearch size={25} color="#ffffff" />
				</div>
			</div>

			{menu.map((i) => (
				<div
					onClick={() => setToggle(i.id)}
					className={
						state === i.id
							? "w-48 py-3 px-4 rounded-lg bg-yellow text-dark font-bold text-lg cursor-pointer"
							: "w-48 py-3 px-4 rounded-lg bg-darkCream text-dark font-bold text-lg cursor-pointer"
					}
				>
					{i.name}
				</div>
			))}
		</div>
	);
};

export default SideNav;
