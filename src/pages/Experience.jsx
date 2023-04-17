import React from "react";
import "./experience.css";
import {
	VerticalTimelineElement,
	VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";

const Experience = () => {
	return (
		<div className="pageContainer" id="experience">
			<main className="experience">
				<h1>Experience</h1>
				<VerticalTimeline lineColor="#272727">
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jan 2023 - Apr 2023"
						iconStyle={{ background: "#d1aad7", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">Northcoders</h3>
						<h4 className="vertical-timeline-element-subtitle">Machester</h4>

						<p>description </p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jan 2023 - Apr 2023"
						iconStyle={{ background: "#7b8fdd", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">Northcoders</h3>
						<h4 className="vertical-timeline-element-subtitle">Machester</h4>

						<p>description </p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jan 2023 - Apr 2023"
						iconStyle={{ background: "#c88bc4 ", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">Northcoders</h3>
						<h4 className="vertical-timeline-element-subtitle">Machester</h4>

						<p>description </p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="Jan 2023 - Apr 2023"
						iconStyle={{ background: "#86bff2", color: "#fff" }}
						icon={<IoSchoolOutline />}
					>
						<h3 className="vertical-timeline-element-title">Northcoders</h3>
						<h4 className="vertical-timeline-element-subtitle">Machester</h4>

						<p>description </p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</main>
		</div>
	);
};
// background: linear-gradient(90.13deg,#d1aad7 .11%,#c88bc4 25.06%,#7b8fdd 50%,#86bff2 74.8%,#bbdef2 99.76%)

export default Experience;
