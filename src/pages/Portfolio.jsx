import React from "react";
import "./porfolio.css";

const Portfolio = () => {
	return (
		<div className="pageContainer" id="portfolio">
			<main className="portfolio">
				<div>
					<h1 className="portfolio-title">Portfolio</h1>
				</div>
				<section className="card ">Card 1</section>
				<section className="card ">Card 2</section>
				<section className="card ">card 3</section>
			</main>
		</div>
	);
};

export default Portfolio;
