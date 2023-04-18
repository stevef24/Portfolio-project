import React, { useRef } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<figure>
				<img src="/Logo.svg" alt="Stav F logo" className="logo" />
			</figure>
			<nav ref={navRef}>
				<a href="#home">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						duration={500}
						onClick={showNavbar}
					>
						Home
					</Link>
				</a>
				<a href="#portfolio">
					<Link
						activeClass="active"
						to="portfolio"
						spy={true}
						smooth={true}
						duration={500}
						onClick={showNavbar}
					>
						Portfolio
					</Link>
				</a>
				<a href="#about">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						onClick={showNavbar}
					>
						About
					</Link>
				</a>
				<a href="#Experience">
					<Link
						activeClass="active"
						to="experience"
						spy={true}
						smooth={true}
						duration={500}
						onClick={showNavbar}
					>
						Experience
					</Link>
				</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Navbar;
