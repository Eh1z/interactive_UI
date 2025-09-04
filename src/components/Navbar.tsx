"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", url: "/" },
		{ title: "Destination", url: "/destination" },
		{ title: "Crew", url: "/crew" },
		{ title: "Technology", url: "/technology" },
	];

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="text-white fixed top-0 left-0 flex items-center justify-between w-full py-4 px-6 md:px-16 z-[9999]">
			{/* Logo */}
			<div className="w-10 sm:w-12 md:w-24">
				<img
					src="/shared/logo.svg"
					alt="website logo"
					className="w-full h-auto"
				/>
			</div>

			{/* Divider (desktop only) */}
			<div className="border border-white/20 w-full max-w-5xl translate-x-16 hidden xl:flex" />

			{/* Desktop Menu */}
			<div className="hidden sm:flex w-full max-w-7xl bg-white/10 backdrop-blur-xl items-center gap-16 justify-center px-6 md:px-16 xl:px-32 py-4 rounded-2xl shadow-lg">
				{navLinks.map((link, index) => (
					<a
						href={link.url}
						key={index}
						className="uppercase relative group tracking-wider"
					>
						<span className="font-bold">0{index}</span> {link.title}
						<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
					</a>
				))}
			</div>

			{/* Mobile Menu Toggle */}
			<div className="sm:hidden z-[10000]">
				{menuOpen ? (
					<FiX
						size={36}
						onClick={() => setMenuOpen(false)}
						className="cursor-pointer"
					/>
				) : (
					<FiMenu
						size={36}
						onClick={() => setMenuOpen(true)}
						className="cursor-pointer"
					/>
				)}
			</div>

			{/* Mobile Slide-in Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
						className="fixed top-0 right-0 h-screen w-3/4 bg-white/10 backdrop-blur-2xl shadow-xl flex flex-col items-start gap-8 p-8 pt-24"
					>
						{navLinks.map((link, index) => (
							<motion.a
								key={index}
								href={link.url}
								onClick={() => setMenuOpen(false)}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
								className="uppercase text-lg tracking-wider hover:text-white/70"
							>
								<span className="font-bold">0{index}</span>{" "}
								{link.title}
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
