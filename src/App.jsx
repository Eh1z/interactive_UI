import React from "react";

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
		<div className="flex justify-between w-full py-4">
			<div className="w-[90px] md:w-[120px]">
				<img src="/images/logo.svg" alt="logo" className="w-full " />
			</div>

			<div>links</div>
			<div>cart</div>
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
