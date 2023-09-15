import React from "react";
import { Carousel } from "@material-tailwind/react";
import Card from "../components/Card";
const Home = () => {
	return (
		<>
			<Carousel autoplay={true} loop={true}>
				<img
					src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
					alt="img1"
					className="h-80 w-full object-cover"
				/>
				<img
					src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
					alt="img2"
					className="h-80 w-full object-cover"
				/>
				<img
					src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
					alt="img1"
					className="h-80 w-full object-cover"
				/>
			</Carousel>
			<div className="bg-base py-10 flex flex-col justify-center px-28">
				<h1 className="font-extrabold text-2xl text-secondary text-center">
					Our Menus
				</h1>
				<div className="flex justify-center items-center">
					<div className="flex flex-wrap gap-5 mt-10 w-[87%] justify-between">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
