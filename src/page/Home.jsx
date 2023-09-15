import React from "react";
import { Carousel } from "@material-tailwind/react";
import Card from "../components/Card";
import { menu } from "../data";
import banner1 from "../assets/image/banner-1.jpg";
import banner2 from "../assets/image/banner-2.jpg";
import banner3 from "../assets/image/banner-3.jpg";

const Home = () => {
	return (
		<>
			<Carousel autoplay={true} loop={true}>
				<img src={banner1} alt="img1" className="h-80 w-full object-cover" />
				<img src={banner2} alt="img2" className="h-80 w-full object-cover" />
				<img src={banner3} alt="img3" className="h-80 w-full object-cover" />
			</Carousel>
			<div className="bg-base py-10 flex flex-col justify-center px-28">
				<h1 className="font-extrabold text-2xl text-secondary text-center">
					Our Menus
				</h1>
				<div className="flex justify-center items-center">
					<div className="flex flex-wrap gap-5 mt-10 w-[87%] justify-start">
						{menu?.map((i) => (
							<Card name={i.name} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
