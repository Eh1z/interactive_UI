import { useState, useEffect } from "react";

const Technology = () => {
	const tech = [
		{
			name: "launch vehicle",
			info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad",
			img: "launch-vehicle-portrait.jpg",
		},
		{
			name: "space port",
			info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
			img: "spaceport-portrait.jpg",
		},
		{
			name: "space capsule",
			info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
			img: "space-capsule-portrait.jpg",
		},
	];
	const [bg, setBg] = useState(getBg());
	const [activeIndex, setActiveIndex] = useState(0);

	function getBg() {
		if (window.innerWidth < 640) {
			return 'url("/technology/background-technology-mobile.jpg")';
		} else if (window.innerWidth < 768) {
			return 'url("/technology/background-technology-tablet.jpg")';
		} else {
			return 'url("/technology/background-technology-desktop.jpg")';
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
			<div className="content grid grid-cols-1 xl:grid-cols-2 xl:gap-32  xl:pt-16 text-white transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
				{/* Crew details */}
				<div className="">
					<p className="text-xl sm:text-2xl md:text-3xl py-4 xl:pb-16">
						<button className="text-text text-xl sm:text-2xl md:text-3xl font-medium ">
							03
						</button>{" "}
						SPACE LAUNCH 101
					</p>

					{/* mobile image */}
					<div className="w-full  flex justify-center items-center xl:hidden">
						<img
							key={tech[activeIndex].img}
							src={`/technology/image-${tech[activeIndex].img}`}
							alt={tech[activeIndex].name}
							className="w-full h-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
						/>
					</div>

					{/* tECH iNFO */}
					<div className="flex flex-col xl:flex-row gap-8 xl:gap-16 pt-8">
						{/* Dots navigation */}
						<div className="mt-8 flex xl:flex-col gap-6 items-center justify-center">
							{tech.map((_, idx) => (
								<button
									key={idx}
									onClick={() => setActiveIndex(idx)}
									className={` min-w-14 h-14 aspect-square cursor-pointer rounded-full transition-all duration-500 border ${
										activeIndex === idx
											? "bg-white  text-primary"
											: ""
									}`}
								>
									{idx + 1}
								</button>
							))}
						</div>
						<div className="flex flex-col items-center xl:items-start text-center xl:text-left">
							<span className="text-white text-2xl sm:text-3xl md:text-4xl uppercase transition-opacity duration-500 ease-in-out">
								THE TERMINOLOGY...
							</span>

							<span className="py-4 text-white text-5xl md:text-6xl lg:text-7xl uppercase transition-opacity duration-500 ease-in-out">
								{tech[activeIndex].name}
							</span>

							<p className="text-text max-w-lg text-sm sm:text-base md:text-lg transition-opacity duration-500 ease-in-out">
								{tech[activeIndex].info}
							</p>
						</div>
					</div>
				</div>

				{/* desktop image */}
				<div className="w-full max-w-[500px] h-[500px]  justify-center items-center hidden lg:flex">
					<img
						key={tech[activeIndex].img}
						src={`/technology/image-${tech[activeIndex].img}`}
						alt={tech[activeIndex].name}
						className="w-full h-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Technology;
