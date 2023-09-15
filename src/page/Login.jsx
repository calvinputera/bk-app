import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-base flex flex-col justify-center items-center pt-8 pb-16">
			<form className="bg-white rounded-t-lg shadow-lg w-[40%] p-10">
				<div className="text-center flex flex-col gap-2">
					<h1 className="text-dark font-bold text-3xl">Welcome!</h1>
					<p className="text-sm">
						Enter your mobile number and password to login
					</p>

					<div className="flex flex-col gap-2 mt-7">
						<div className="relative">
							<p className="absolute left-3 top-2 font-bold">+62</p>
							<input
								type="tel"
								placeholder="8680123456 (Example)"
								className="pl-12 pr-3 py-2 w-full rounded-lg border border-form"
							/>
						</div>
						<input
							type="password"
							placeholder="Password"
							className="px-3 py-2 w-full rounded-lg border border-form"
						/>
						<button className="bg-primary text-white font-bold text-xl p-2 rounded-lg mt-6">
							Login
						</button>
					</div>
				</div>
				<p className="text-primary mt-6">Forgot Password</p>
			</form>
			<div className="bg-white rounded-b-lg shadow-lg w-[40%] p-10 border border-t-form flex flex-col gap-3">
				<h1 className="text-dark font-bold text-xl">Not A Member Yet?</h1>
				<div className="flex justify-between items-start text-sm">
					<p className="w-[60%]">
						Register to get reward points and exclusive promotions.
					</p>
					<button
						className="bg-yellow text-white font-bold rounded-lg py-3 px-7"
						onClick={() => navigate("/register")}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
