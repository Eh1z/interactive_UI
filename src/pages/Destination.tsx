import { useState, useEffect } from "react";

const Destination = () => {
	const destinations = [
		{
			name: "moon",
			desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
			distance: "384,400 KM",
			time: "3 DAYS",
		},
		{
			name: "mars",
			desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
			distance: "225 MIL. KM",
			time: "9 MONTHS",
		},
		{
			name: "europa",
			desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
			distance: "628 MIL. KM",
			time: "3 YEARS",
		},
		{
			name: "titan",
			desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
			distance: "1.6 BIL. KM",
			time: "7 YEARS",
		},
	];
	const [preview, setPreview] = useState(destinations[0]);
	const [bg, setBg] = useState(getBg());

	function getBg() {
		if (window.innerWidth < 640) {
			return 'url("/destination/background-destination-mobile.jpg")';
		} else if (window.innerWidth < 768) {
			return 'url("/destination/background-destination-tablet.jpg")';
		} else {
			return 'url("/destination/background-destination-desktop.jpg")';
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
			className="padding w-full min-h-screen bg-cover bg-center bg-no-repeat  flex justify-center items-center"
			style={{ backgroundImage: bg }}
		>
			<div className="content grid grid-cols-1 xl:grid-cols-2 gap-16 pt-16 text-white">
				{/* destination showcasse */}
				<div className="flex flex-col gap-16  ">
					<p className="text-xl sm:text-2xl md:text-3xl ">
						<button className="text-text text-xl sm:text-2xl md:text-3xl font-medium ">
							01
						</button>{" "}
						PICK YOUR DESTINATION
					</p>

					<div className="w-full flex justify-center">
						<img
							src={`/destination/image-${preview.name}.png`}
							alt="destination image"
						/>
					</div>
				</div>

				{/* Destination selection */}
				<div className="flex flex-col items-center text-center xl:text-left xl:items-start">
					<div className="flex gap-4">
						{destinations.map((item, index) => (
							<button
								className={`${
									preview.name === item.name
										? "border-white"
										: "border-transparent"
								} px-4 py-2 uppercase border-b-2  text-xl text-text`}
								key={index}
								onClick={() => setPreview(item)}
							>
								{item.name}
							</button>
						))}
					</div>

					{/* Destination Details */}
					<div className="pt-8">
						<span className="text-white text-5xl md:text-7xl lg:text-8xl uppercase">
							{preview.name}
						</span>
						<p className="text-text max-w-lg text-sm sm:text-base md:text-lg">
							{preview.desc}
						</p>
						<hr className="my-8 text-text/50" />

						<div className="flex gap-16">
							<div>
								<p className="text-text pb-2">AVG. DISTANCE</p>
								<span className="text-2xl sm:text-3xl md:text-4xl">
									{preview.distance}
								</span>
							</div>
							<div>
								<p className="text-text pb-2">
									EST. TRAVEL TIME
								</p>
								<span className="text-2xl sm:text-3xl md:text-4xl">
									{preview.time}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
