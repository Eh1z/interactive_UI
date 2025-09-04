import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "./pages";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/technology" element={<Technology />} />
			</Routes>
		</div>
	);
};

export default App;
