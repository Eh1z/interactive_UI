import { useState, useEffect } from "react";

const Home = () => {
	const [bg, setBg] = useState(getBg());

	function getBg() {
		if (window.innerWidth < 640) {
			return 'url("/home/background-home-mobile.jpg")';
		} else if (window.innerWidth < 768) {
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
			className="padding min-h-screen bg-cover bg-center bg-no-repeat flex items-end"
			style={{ backgroundImage: bg }}
		>
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
					className="relative min-w-32 min-h-32 sm:min-w-64 sm:min-h-64 bg-white rounded-full text-xl sm:text-3xl group cursor-pointer flex items-center justify-center"
					style={{ fontFamily: "Bellefair" }}
				>
					EXPLORE
					<div className="absolute top-1/2 left-1/2 w-64 h-64 group-hover:w-90 group-hover:h-90 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-800 ease-in-out" />
				</button>
			</div>
		</div>
	);
};

export default Home;
