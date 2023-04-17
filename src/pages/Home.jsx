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
					<a className="icons">
						<FaGithub />
					</a>
					<a className="icons">
						<FaDribbble />
					</a>
					<a className="icons">
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
