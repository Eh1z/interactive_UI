import { useState, useEffect } from "react";
import { Navbar } from "../components";

const Home = () => {
	const [bg, setBg] = useState(getBg());

	function getBg() {
		if (window.innerWidth < 640) {
			return 'url("/home/background-home-mobile.jpg")';
		} else if (window.innerWidth < 1024) {
			return 'url("/home/background-home-tablet.jpg")';
		} else {
			return 'url("/home/background-home-desktop.jpg")';
		}
	}

	useEffect(() => {
		const handleResize = () => {
			setBg(getBg());
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			className="padding h-screen bg-cover bg-center bg-no-repeat flex items-end"
			style={{ backgroundImage: bg }}
		>
			<Navbar />

			{/* Hero Content */}
			<div className="content flex flex-col md:flex-row items-center justify-between gap-16  ">
				<div className="flex flex-col text-center md:text-left">
					<p
						className="text-text text-3xl font-extralight"
						style={{ fontFamily: "Barlow Condensed" }}
					>
						SO, YOU WANT TO TRAVEL TO
					</p>
					<span className="text-white text-7xl md:text-8xl lg:text-9xl">
						SPACE
					</span>
					<p className="text-text max-w-lg text-sm sm:text-base md:text-lg">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</div>

				<button
					className="min-w-32 min-h-32 sm:min-w-64 sm:min-h-64 bg-white rounded-full text-xl  sm:text-3xl"
					style={{ fontFamily: "Bellefair" }}
				>
					EXPLORE
				</button>
			</div>
		</div>
	);
};

export default Home;
