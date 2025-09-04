import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", url: "/" },
		{ title: "Destination", url: "/destination" },
		{ title: "Crew", url: "/crew" },
		{ title: "Technology", url: "/technology" },
	];
	return (
		<div className="text-white fixed top-0 left-0 pl-4 md:pl-16 flex items-center justify-between w-full  py-3 z-[9999]">
			<div className="w-10 sm:w-12 md:w-24 mr-16">
				<img
					src="/shared/logo.svg"
					alt="website logo"
					className="w-full h-auto"
				/>
			</div>

			<div className="border-[1px] border-white/30 w-full max-w-5xl translate-x-16 z-10 hidden xl:flex" />

			<div className="hidden sm:flex w-full max-w-7xl bg-white/10 backdrop-blur-xl  items-center gap-16 justify-center px-4 md:px-16 xl:px-32 py-6">
				{navLinks.map((link, index) => (
					<a href={link.url} key={index} className="uppercase">
						<span className="font-bold">0{index + 1}</span>{" "}
						{link.title}
					</a>
				))}
			</div>

			{/* Mobile Menu */}
			<div className="sm:hidden">
				<FiMenu size={40} className="mr-4" />
			</div>
		</div>
	);
};

export default Navbar;
