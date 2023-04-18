import React from "react";
import "./porfolio.css";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Portfolio = () => {
	return (
		<div className="pageContainer" id="portfolio">
			<main className="portfolio">
				<div>
					<h1 className="portfolio-title">Portfolio</h1>
				</div>
				<div className="card-container">
					<Tilt
						className="tilt"
						glareEnable={true}
						glareMaxOpacity={0.2}
						glareColor="#676767"
						glarePosition="bottom"
						glareBorderRadius="10px"
						tiltMaxAngleX={4}
						tiltMaxAngleY={4}
					>
						<article className="card">
							<figure>
								<img src="./Group-project.png" alt="" />
							</figure>

							<section className="info">
								<h3 className="card-title">City Canvas</h3>
								<p>
									City Canvas is a social app that helps you discover and share
									street art in your city. Our visually stunning and
									user-friendly app utilizes React Native, Firebase, Tailwind
									CSS, and Expo technologies.(Final group project)
								</p>
								<section className="icon-links">
									<a>
										<FaGithub
											href="https://github.com/Nayem59/CityCanvas"
											target="_blank"
										/>
									</a>
								</section>
							</section>
						</article>
					</Tilt>
					<Tilt
						className="tilt"
						glareEnable={true}
						glareMaxOpacity={0.2}
						glareColor="#676767"
						glarePosition="bottom"
						glareBorderRadius="10px"
						tiltMaxAngleX={2}
						tiltMaxAngleY={2}
					>
						<article className="card">
							<figure>
								<img src="./Backend-project.png" alt="" />
							</figure>

							<section className="info">
								<h3 className="card-title">NC-Games backend</h3>
								<p>
									NC-games is an API project created using Express.js, Node.js,
									PostgreSQL, Jest, and Supertest. It allows users to perform
									CRUD operations on a database containing information about
									game reviews, comments, categories, and users.
								</p>
								<section className="icon-links">
									<a
										href="https://github.com/stevef24/backend-project"
										target="_blank"
									>
										<FaGithub />
									</a>
								</section>
							</section>
						</article>
					</Tilt>
					<Tilt
						className="tilt"
						glareEnable={true}
						glareMaxOpacity={0.2}
						glareColor="#676767"
						glarePosition="bottom"
						glareBorderRadius="10px"
						tiltMaxAngleX={2}
						tiltMaxAngleY={2}
					>
						<article className="card">
							<figure>
								<img src="./NC-Games.png" alt="NC-Games" />
							</figure>

							<section className="info">
								<h3 className="card-title">City Canvas</h3>
								<p>
									NC-Games Frontend is a website that was built to demonstrate
									the functionalities of the NC-Games API.The website was
									created using React, React Router, Tailwind CSS, Axios, and
									other technologies. (the website may take a min to load as I
									am using a free hosting service 😄)
								</p>
								<section className="icon-links">
									<a
										href="https://github.com/stevef24/fe-nc-games"
										target="_blank"
									>
										<FaGithub />
									</a>
									<a
										href="https://nc-games-fe-project-stav.netlify.app/"
										target="_blank"
									>
										<FaExternalLinkAlt />
									</a>
								</section>
							</section>
						</article>
					</Tilt>
				</div>
			</main>
		</div>
	);
};

export default Portfolio;
