import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Experience />
			<Contact />
		</>
	);
};

export default App;
