import React from "react";
import "./home.css";
import { FaDownload, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";

const Home = () => {
	return (
		<div className="pageContainer" id="home">
			<main className="home">
				<figure className="image">
					<img src="./Image-hello.png" alt="momoji of stav" />
				</figure>
				<h2>Hi im</h2>
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

				<button className="download">
					<span>
						<FaDownload />
					</span>
					<span>DOWNLOAD CV</span>
				</button>
			</main>
		</div>
	);
};

export default Home;
