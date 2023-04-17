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
					<h1 className="about-header">About me</h1>
					<p>
						I am an investment analyst turned full-stack developer. After taking
						a career break and traveling Southeast Asia, I came back with a
						renewed sense of purpose (deep right ? ). Now, I am a junior
						software developer with a passion for problem-solving, coding, and
						design. Honestly, if you had asked me a year or two ago if I would
						ever end up pursuing a career and design being a part of it, I would
						have said you are crazy, but life has a funny way of opening up
						doors where you least expect it. At this stage of my career, I am
						looking to join a company that is not afraid to break the norm, a
						company with passionate people and a place where growth and
						development is a daily practice. If you think your company is like
						that or know a company that is, then please reach out.
					</p>
					<h6>But Stav, seriously... tell us about yourself....</h6>
					<p>
						I am an extremely curious and passionate individual. I love learning
						new things and am never satisfied with the status quo. I like to
						push myself and others around me to higher standards and firmly
						believe in the power of hard work. During my time traveling, I was
						extremely lucky to find something I am passionate about (software
						development + design). Once I made my decision to make a career
						switch, I didn’t look back. To put it all simply, I love life, so I
						choose to direct my time and energy into things that I am passionate
						about. I love joking around, meeting new people, and don’t take life
						too seriously, but when it comes down to getting the work done, you
						can count on me. dont believe me ? see the review below:
					</p>
					<q>
						‘Stav is the best thing that happened to us. He is extremely
						intelligent, hardworking, a living genius... the world needs more of
						that’
					</q>
					<p className="review">-My mum</p>
					<p>
						Fine… I may have been paraphrasing (just a little bit), but
						hopefully, you get my point. I look forward to hearing from you and
						hopefully working with you one day, until then keep smiling ✌🏾.
					</p>
				</section>
			</main>
		</div>
	);
};

export default About;
