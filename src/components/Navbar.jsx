import React from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
	return (
		<header>
			<h1>Logo</h1>
			<nav>
				<a href="#home">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						delay={1000}
					>
						Home
					</Link>
				</a>
				<a href="/#about">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						delay={1000}
					>
						About
					</Link>
				</a>
				<a href="">
					<Link
						activeClass="active"
						to="experience"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						delay={1000}
					>
						Experience
					</Link>
				</a>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={50}
					duration={500}
					delay={1000}
				>
					Contact
				</Link>
				<button>
					<FaTimes />
				</button>
			</nav>
			<button>
				<FaBars />
			</button>
		</header>
	);
};

export default Navbar;
