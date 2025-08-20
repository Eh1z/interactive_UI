import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaMinus, FaPlus } from "react-icons/fa";

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	const addToCart = () => {};

	const removeFromCart = () => {};

	return (
		<div className="w-full flex flex-col items-center px-4 md:px-16 lg:px-32 ">
			<Navbar
				cartOpen={cartOpen}
				setCartOpen={setCartOpen}
				cartItems={cartItems}
			/>
			<main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
				<ProductGallery />
				<ProductInfo addToCart={addToCart} />
			</main>

			{cartOpen && (
				<Cart items={cartItems} removeFromCart={removeFromCart} />
			)}
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
						className="group h-full text-sm px-4 py-4 text-gray-400 hover:text-black border-b-4 border-white hover:border-[#ff7d1aff] transition-all duration-300 ease-in-out cursor-pointer"
					>
						<p>{item.name}</p>
					</a>
				))}
			</div>
			<div className="flex gap-2 items-center">
				<LuShoppingCart size={24} />
				<div className="w-10 h-10 rounded-full border-2 border-[#ff7d1aff] overflow-hidden">
					<img src="/images/image-avatar.png" alt="image-avatar" />
				</div>
			</div>
		</div>
	);
};

// ProductGallery
const ProductGallery = () => {
	const images = [
		"/images/image-product-1.jpg",
		"/images/image-product-2.jpg",
		"/images/image-product-3.jpg",
		"/images/image-product-4.jpg",
	];
	const [selected, setSelected] = useState(0);
	const [lightbox, setLightbox] = useState(false);

	return (
		<div className=" ">
			<img
				src={images[selected]}
				alt="product image"
				className="rounded-xl cursor-pointer w-full h-auto"
				onClick={() => setLightbox(true)}
			/>

			<div className="mt-4 flex gap-3 overflow-x-scroll">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt="thumbnail"
						onClick={() => setSelected(index)}
						className={`w-20 rounded-xl cursor-pointer ${
							selected === index ? "ring-2 ring-[#ff7d1aff]" : ""
						}`}
					/>
				))}
			</div>

			{lightbox && (
				<div className="fixed left-0 top-0 inset-0 bg-black/30 flex items-center justify-center w-full h-screen">
					<button
						className="absolute top-4 right-4 text-white text-xl"
						onClick={() => setLightbox(false)}
					>
						X
					</button>

					<img
						src={images[selected]}
						alt="lightbox"
						className="max-h-[80vh] rounded-xl"
					/>
				</div>
			)}
		</div>
	);
};

// ProductInfo
const ProductInfo = () => {
	const product = {
		id: 1,
		company: "Sneaker Company",
		name: "Fall Limited Sneakers",
		desc: "These low profile are your casual wear companion. Featuring a durable outer sole. They'll withstand everything the weather can offer.",
		price: 125,
		discount: 50,
		oldPrice: 250,
	};

	const [quantity, setQuantity] = useState(1);

	return (
		<div className="">
			<p className="uppercase text-gray-600 text-xs">{product.company}</p>
			<span className="font-bold text-3xl ">{product.name}</span>
			<p className="text-gray-600 max-w-lg my-3">{product.desc}</p>
			<div className="flex gap-4 items-center">
				<span className="text-xl font-semibold">
					${product.price}.00
				</span>
				<p className="py-1 px-2 text-xs bg-black text-white rounded flex items-center justify-center">
					{product.discount}%
				</p>
			</div>
			<span className="text-xs text-gray-400 line-through">
				${product.oldPrice}.00
			</span>

			<div className="grid grid-cols-5 gap-3 mt-8">
				<div className="col-span-2 flex items-center justify-between  bg-[#f7f8fdff] p-2 rounded">
					<FaMinus className="text-[#ff7d1aff]" />
					<p>3</p>
					<FaPlus className="text-[#ff7d1aff]" />
				</div>
				<button className="col-span-3 py-2 text-sm flex items-center gap-3 justify-center rounded bg-[#ff7d1aff]/50 hover:bg-[#ff7d1aff] transition duration-500 ease-in-out cursor-pointer">
					<LuShoppingCart />
					<p>Add to cart</p>
				</button>
			</div>
		</div>
	);
};

// Cart
const Cart = () => {
	return <div>Cart</div>;
};
