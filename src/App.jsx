import React from "react";
import { LuShoppingCart } from "react-icons/lu";
const App = () => {
	return (
		<div className="w-full flex flex-col items-center px-4 md:px-16 lg:px-32 ">
			<Navbar />
			<main>
				<ProductGallery />
				<ProductInfo />
			</main>
		</div>
	);
};

export default App;
// Navbar
const Navbar = () => {
	const navLinks = [
		{
			name: "Collections",
			url: "/collections",
		},
		{
			name: "Men",
			url: "/men",
		},
		{
			name: "Women",
			url: "/women",
		},
		{
			name: "About",
			url: "/about",
		},
		{
			name: "Contact",
			url: "/contact",
		},
	];

	return (
		<div className="flex items-center justify-between w-full  border-b border-gray-200">
			<div className="w-[90px] md:w-[120px]">
				<img src="/images/logo.svg" alt="logo" className="w-full " />
			</div>

			<div className="flex items-center h-full">
				{navLinks.map((item, index) => (
					<a
						key={index}
						href={item.url}
						className="group px-4 py-4 text-gray-400   cursor-pointer"
					>
						{item.name}
						<div className="w-0 group-hover:w-full h-1 bg-[#ff7d1aff] transition duration-1000 ease-in origin-left" />
					</a>
				))}
			</div>
			<div>
				<LuShoppingCart />
			</div>
		</div>
	);
};

// ProductGallery
const ProductGallery = () => {
	return <div>ProductGallery</div>;
};
// ProductInfo
const ProductInfo = () => {
	return <div>ProductInfo</div>;
};
// Cart
const Cart = () => {
	return <div>Cart</div>;
};
