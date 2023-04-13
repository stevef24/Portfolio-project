import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="experience" element={<Experience />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
