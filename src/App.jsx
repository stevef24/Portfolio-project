import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<main className="app-container">
				<Home />
				<About />
				<Portfolio />
				<Experience />
				<Contact />
			</main>
		</>
	);
};

export default App;
