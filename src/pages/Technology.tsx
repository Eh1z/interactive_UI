import { useState, useEffect } from "react";

const Technology = () => {
	const [bg, setBg] = useState(getBg());

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
			{" "}
			tech
		</div>
	);
};

export default Technology;
