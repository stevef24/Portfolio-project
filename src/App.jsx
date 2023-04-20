import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<>
			<Navbar />
			<main className="app-container">
				<Home />
				<Portfolio />
				<About />
				<Experience />
				<Contact />
			</main>
		</>
	);
};

export default App;
