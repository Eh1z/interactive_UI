import { useState, useEffect } from "react";

const Crew = () => {
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
	return (
		<div
			className="padding w-full min-h-screen bg-cover bg-center bg-no-repeat  flex justify-center items-center"
			style={{ backgroundImage: bg }}
		>
			{/* Crew Carousel */}
			<div className="content grid grid-cols-1 xl:grid-cols-2 gap-16 pt-16 text-white">
				{/* crew details  */}
				<div className="flex flex-col gap-16  ">crew selection</div>

				{/*  crew image */}
				<div className="flex flex-col items-center text-center xl:text-left xl:items-start">
					<div> crew image</div>
				</div>
			</div>
		</div>
	);
};

export default Crew;
