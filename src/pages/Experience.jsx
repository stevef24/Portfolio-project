import React from "react";
import "./experience.css";
import {
	VerticalTimelineElement,
	VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Tilt from "react-parallax-tilt";

const Experience = () => {
	return (
		<div className="pageContainer" id="experience">
			<main className="experience">
				<h1>Experience</h1>
				<h2>Technologies I Use</h2>
				<section className="tech-stack">
					<div className="tech-container">
						<div className="rows">
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="css3.svg" alt="css logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="html.svg" alt="html logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="react.svg" alt="react logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="Figma.svg" alt="figma logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="JS.svg" alt="javascript logo" />
								</div>
							</Tilt>
						</div>
						<div className="rows">
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="node.svg" alt="node logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="firebase.svg" alt="firebase logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="SQL.svg" alt="PostgreSQL logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="GIT.svg" alt="git logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="github.svg" alt="" />
								</div>
							</Tilt>
						</div>
						<div className="rows">
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="Next.svg" alt="next js logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="tailwind.svg" alt="tailwind logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="jest.svg" alt="jest logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="typescript.svg" alt="typescript logo" />
								</div>
							</Tilt>
							<Tilt
								className="tilt"
								glareEnable={true}
								glareMaxOpacity={0.2}
								glareColor="#fff"
								glarePosition="all"
								glareBorderRadius="10px"
								tiltMaxAngleX={10}
								tiltMaxAngleY={10}
							>
								<div className="row">
									<img src="sass.svg" alt="sass logo" />
								</div>
							</Tilt>
						</div>
					</div>
				</section>
				<h2>Work experience</h2>
				<VerticalTimeline lineColor="#272727">
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jan 2023 - Present"
						iconStyle={{ background: "#d1aad7", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">
							Trainee Software Engineer
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Northcoders, Machester
						</h4>

						<p>
							Completed an intensive JavaScript-focused Coding Bootcamp covering
							programming, full-stack and front-end web development using
							React.js, back-end web development, and more. Gained hands-on
							experience in Git, HTML5, CSS, OOP, and Node.js. Developed a high
							level of proficiency in various aspects of web development through
							practical application.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Aug 2022 - dec 2022 "
						iconStyle={{ background: "#d1aad7", color: "#fff" }}
						icon={<FaGlobeEurope />}
					>
						<h3 className="vertical-timeline-element-title">Career break</h3>
						<h4 className="vertical-timeline-element-subtitle">
							South East Asia
						</h4>

						<p>
							Trained in Mixed Martial Arts & Muay Thai in Thailand and
							Indonesia, immersed in diverse cultures whilst meeting new people,
							expanding interests & developing interpersonal skills. Gained
							self-confidence, resilience, focus no need for the comma here, and
							stayed physically fit. This experience enhanced personal and
							professional growth, also providing valuable skills applicable to
							various aspects of life
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jul 2020 - Jul 2022"
						iconStyle={{ background: "#7b8fdd", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">
							Sales Enablement Associate
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Aviva Investors, London
						</h4>

						<p>
							Conducted analysis of large qualitative and quantitative datasets,
							utilizing various third-party databases including Morningstar
							Direct and Lipper. Prepared monthly peer analysis and fund
							snapshots with commentary for sales teams and investment
							specialists regarding fund performance. Conducted independent
							reviews of investment opportunities across all asset classes,
							including deep dives into promising prospects. Offered a full-time
							position at Aviva Investors upon completion of the graduate
							scheme.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jul 2019 - Jul 2020"
						iconStyle={{ background: "#c88bc4 ", color: "#fff" }}
						icon={<MdWorkOutline />}
					>
						<h3 className="vertical-timeline-element-title">
							Multi-asset Investment Specialist
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Aviva Investors, London
						</h4>
						<p>
							Supported day-to-day operations for the flagship fund, AIMS,
							managing £6B in AUM. Collaborated with directors and portfolio
							managers to communicate investment processes, portfolio positions,
							and performance to clients and consultants. Conducted analysis for
							client requests, including fund metrics and ESG integration.
							Developed key procedures and research materials, including
							documentation, models, and presentations. Completed the Investment
							Management Certificate qualification in January 2020.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Sep 2015 -  Jan 2019"
						iconStyle={{ background: "#86bff2", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">
							Bayes Business School
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Bsc Management and Finance
						</h4>

						<p>
							During my studies, I pursued a degree in Management and Finance,
							where I acquired a comprehensive understanding of various business
							functions. The curriculum included modules such as statistics,
							quantitative methods, system thinking, and creativity, and
							innovation.
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</main>
		</div>
	);
};

export default Experience;
