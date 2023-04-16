import React from "react";
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
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
		</>
	);
};

export default App;
