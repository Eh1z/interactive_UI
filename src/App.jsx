import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const [cartOpen, setCartOpen] = useState(true);

	const addToCart = (item) => {
		setCartItems((prev) => {
			const existing = prev.find((product) => product.id === item.id);
			if (existing) {
				return prev.map((product) =>
					product.id === item.id
						? {
								...product,
								quantity: product.quantity + item.quantity,
						  }
						: product
				);
			}

			return [...prev, item];
		});
	};

	const removeFromCart = (id) => {
		setCartItems((prev) => prev.filter((product) => product.id !== id));
	};

	return (
		<div className="relative w-full flex flex-col items-center px-4 md:px-16 lg:px-32 ">
			<Navbar
				cartOpen={cartOpen}
				setCartOpen={setCartOpen}
				cartItems={cartItems}
				removeFromCart={removeFromCart}
			/>
			<main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-32 items-center">
				<ProductGallery />
				<ProductInfo addToCart={addToCart} />
			</main>
		</div>
	);
};

export default App;
// Navbar
const Navbar = ({ cartOpen, setCartOpen, cartItems, removeFromCart }) => {
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
	const [toggle, setToggle] = useState(false);

	return (
		<div className="relative flex items-center justify-between w-full py-2  border-b border-gray-200 z-[999]">
			{/* Mobile Menu */}
			<div className="flex md:hidden">
				<RiMenuFill
					size={24}
					onClick={() => setToggle(!toggle)}
					className="cursor-pointer"
				/>
				{toggle && (
					<div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur">
						<div className="bg-white w-1/2 h-full">
							<RiCloseFill
								size={32}
								onClick={() => setToggle(!toggle)}
								className="cursor-pointer"
							/>

							<div className="flex flex-col gap-3 py-8">
								{navLinks.map((item, index) => (
									<a
										key={index}
										href={item.url}
										className="group h-full text-sm px-3 py-2 text-gray-400 font-medium hover:text-[#ff7d1aff] hover:border-[#ff7d1aff] transition-all duration-300 ease-in-out cursor-pointer"
									>
										<p>{item.name}</p>
									</a>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="w-[120px]">
				<img src="/images/logo.svg" alt="logo" className="w-full " />
			</div>

			<div className="items-center h-full hidden md:flex">
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
				<LuShoppingCart
					size={24}
					onClick={() => setCartOpen(!cartOpen)}
					className="cursor-pointer"
				/>
				<div className="w-10 h-10 rounded-full border-2 border-[#ff7d1aff] overflow-hidden">
					<img src="/images/image-avatar.png" alt="image-avatar" />
				</div>
			</div>

			{cartOpen && (
				<Cart items={cartItems} removeFromCart={removeFromCart} />
			)}
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

			<div className="mt-4 flex gap-3 overflow-x-scroll justify-center">
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
const ProductInfo = ({ addToCart }) => {
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
				<span className="text-2xl font-semibold">
					${product.price}.00
				</span>
				<p className="py-1 px-2 text-xs bg-black text-white rounded flex items-center justify-center">
					{product.discount}%
				</p>
			</div>
			<span className="text-lg md:text-sm text-gray-400 line-through">
				${product.oldPrice}.00
			</span>

			<div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-8">
				<div className="col-span-2 flex items-center justify-between  bg-[#f7f8fdff] p-2 rounded w-full">
					<FaMinus
						className="text-[#ff7d1aff]  h-full"
						onClick={() => setQuantity((q) => Math.max(1, q - 1))}
					/>
					<p>{quantity}</p>
					<FaPlus
						className="text-[#ff7d1aff] h-full"
						onClick={() => setQuantity((q) => q + 1)}
					/>
				</div>
				<button
					onClick={() => addToCart({ ...product, quantity })}
					className="col-span-3 py-2 text-sm flex items-center gap-3 justify-center rounded bg-[#ff7d1aff]/50 hover:bg-[#ff7d1aff] transition duration-500 ease-in-out cursor-pointer"
				>
					<LuShoppingCart />
					<p>Add to cart</p>
				</button>
			</div>
		</div>
	);
};

// Cart
const Cart = ({ items, removeFromCart }) => {
	return (
		<div className="absolute top-16 right-0 shadow-2xl rounded-lg flex flex-col gap-3 p-4 bg-white w-full sm:max-w-sm">
			<span className="text-sm font-semibold">Cart</span>
			{items.length === 0 ? (
				<p>Your cart is empty!</p>
			) : (
				<ul>
					{items.map((item) => (
						<div
							key={item.id}
							className="border-t border-gray-300 py-3 flex gap-4 items-center justify-between w-full "
						>
							<div className="flex gap-3">
								<img
									src="/images/image-product-1.jpg"
									alt="product"
									className="w-8 h-8 rounded"
								/>
								<div className="text-xs text-gray-400">
									<p>{item.name}</p>
									<p>
										${item.price} x {item.quantity}
										<span className="text-black font-semibold ml-4">
											$
											{(
												item.price * item.quantity
											).toFixed(2)}
										</span>
									</p>
								</div>
							</div>
							<MdDelete
								className="text-gray-400 ml-4"
								onClick={() => removeFromCart(item.id)}
							/>
						</div>
					))}
				</ul>
			)}
			<button className="col-span-3 py-2 text-sm flex items-center gap-3 justify-center rounded bg-[#ff7d1aff] hover:bg-[#ff7d1aff]/50 transition duration-500 ease-in-out cursor-pointer">
				<p>Checkout</p>
			</button>
		</div>
	);
};
