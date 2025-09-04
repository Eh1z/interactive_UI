import { useState, useEffect } from "react";

const Crew = () => {
	const crew = [
		{
			name: "Douglas Hurley",
			rank: "Commander",
			info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
			img: "douglas-hurley.webp",
		},
		{
			name: "Mark Shuttleworth",
			rank: "Mission Specialist",
			info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
			img: "mark-shuttleworth.png",
		},
		{
			name: "Victor Glover",
			rank: "Pilot",
			info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
			img: "victor-glover.webp",
		},
		{
			name: "Anousheh Ansari",
			rank: "Flight Engineer",
			info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
			img: "anousheh-ansari.webp",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [bg, setBg] = useState(getBg());

	function getBg() {
		if (window.innerWidth < 640) {
			return 'url("/crew/background-crew-mobile.jpg")';
		} else if (window.innerWidth < 768) {
			return 'url("/crew/background-crew-tablet.jpg")';
		} else {
			return 'url("/crew/background-crew-desktop.jpg")';
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
			className="padding w-full min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
			style={{ backgroundImage: bg }}
		>
			{/* Crew Carousel */}
			<div className="content grid grid-cols-1 xl:grid-cols-2 gap-32  pt-16 text-white transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
				{/* Crew details */}
				<div className="flex flex-col items-center xl:items-start text-center xl:text-left">
					<p className="text-xl sm:text-2xl md:text-3xl pb-16">
						<button className="text-text text-xl sm:text-2xl md:text-3xl font-medium ">
							02
						</button>{" "}
						MEET YOUR CREW
					</p>

					<span className="text-white text-2xl sm:text-3xl md:text-4xl uppercase transition-opacity duration-500 ease-in-out">
						{crew[activeIndex].rank}
					</span>

					<span className="py-4 text-white text-5xl md:text-6xl lg:text-7xl uppercase transition-opacity duration-500 ease-in-out">
						{crew[activeIndex].name}
					</span>

					<p className="text-text max-w-lg text-sm sm:text-base md:text-lg transition-opacity duration-500 ease-in-out">
						{crew[activeIndex].info}
					</p>

					{/* Dots navigation */}
					<div className="mt-8 flex gap-6 items-center">
						{crew.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setActiveIndex(idx)}
								className={`w-4 h-4 rounded-full transition-all duration-500 ${
									activeIndex === idx
										? "bg-white scale-125"
										: "bg-white/30 hover:bg-white/50"
								}`}
							/>
						))}
					</div>
				</div>

				{/* Crew image */}
				<div className="w-full max-w-[500px] h-[500px] flex justify-center items-center">
					<img
						key={crew[activeIndex].img}
						src={`/crew/image-${crew[activeIndex].img}`}
						alt={crew[activeIndex].name}
						className="w-full h-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Crew;
