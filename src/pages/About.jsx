import React from "react";
import "./about.css";

const About = () => {
	return (
		<div className="pageContainer" id="about">
			<main className="about">
				<section className="divider leftside">
					<img src="Image-about.png" alt="about stav image" />
				</section>
				<section className="divider rightside">
					<h1>About me</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						quidem a consequuntur corrupti placeat sit molestias atque officiis
						voluptas aspernatur?
					</p>
				</section>
			</main>
		</div>
	);
};

export default About;
