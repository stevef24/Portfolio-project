import React, { useRef } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className={styles.navContainer}>
			<figure>
				<img src="" alt="Stav F logo" />
			</figure>
			<nav ref={navRef}>
				<a className={styles.link} href="#home">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						Home
					</Link>
				</a>
				<a className={styles.link} href="#about">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						About
					</Link>
				</a>
				<a className={styles.link} href="#potfolio">
					<Link
						activeClass="active"
						to="portfolio"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						Portfolio
					</Link>
				</a>
				<a className={styles.link} href="#Experience">
					<Link
						activeClass="active"
						to="experience"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						Experience
					</Link>
				</a>
				<a className={styles.link} href="contact">
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						Contact
					</Link>
				</a>
				<button classname="nav-btn nav-close-btn" onClick={showNavbar}>
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
