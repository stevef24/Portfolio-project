import React from "react";
import "./home.css";
import { FaArrowDown, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div className="pageContainer" id="home">
			<main className="home">
				<figure className="image">
					<img src="./Image-hello.png" alt="momoji of stav" />
				</figure>
				<h2>Hi I'm</h2>
				<h1>Stav Fernandes</h1>
				<h3>Full Stack developer</h3>
				<div className="icons-container">
					<a
						className="icons"
						href="https://github.com/stevef24"
						target="_blank"
					>
						<FaGithub />
					</a>
					<a
						className="icons"
						href="https://dribbble.com/stavf24"
						target="_blank"
					>
						<FaDribbble />
					</a>
					<a
						className="icons"
						href="https://www.linkedin.com/in/stavfernandes24/"
						target="_blank"
					>
						<FaLinkedin />
					</a>
				</div>

				<a className="download" href="#portfolio">
					<span>
						<FaArrowDown />
					</span>
					<Link
						activeClass="active"
						to="portfolio"
						spy={true}
						smooth={true}
						offset={-120}
						duration={500}
					>
						JUMP TO PORTFOLIO
					</Link>
				</a>
			</main>
		</div>
	);
};

export default Home;
