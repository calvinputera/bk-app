import React, { useEffect } from "react";
import burger from "../assets/image/burger.png";

const Register = () => {
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
		<div className="bg-base flex flex-col justify-center items-center pt-8 pb-16">
			<form className="bg-white rounded-t-lg shadow-lg w-[40%] p-10">
				<div className="text-center flex flex-col gap-2">
					<h1 className="text-dark font-bold text-3xl">Register</h1>
					<p className="text-sm">Please enter your mobile number to register</p>

					<div className="flex flex-col gap-2 mt-7">
						<div className="relative">
							<p className="absolute left-3 top-2 font-bold">+62</p>
							<input
								type="tel"
								placeholder="8680123456 (Example)"
								className="pl-12 pr-3 py-2 w-full rounded-lg border border-form"
							/>
						</div>
						<button className="bg-primary text-white font-bold text-xl p-2 rounded-lg mt-6">
							Register
						</button>
					</div>
				</div>
			</form>
			<div className="bg-white rounded-b-lg shadow-lg w-[40%] h-40 flex-col gap-3 overflow-hidden flex items-center">
				<img src={burger} alt="burger" className="-mt-5 w-80" />
			</div>
		</div>
	);
};

export default Register;
