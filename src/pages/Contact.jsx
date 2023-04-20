import React from "react";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_4p2t2xx",
				"template_uvj6o2x",
				formRef.current,
				"dxeGIb4XEmBXOReJF"
			)
			.then(
				(result) => {
					setName("");
					setEmail("");
					setMessage("");
					notify();
				},
				(error) => {}
			);
	};
	const notify = () =>
		toast("Message sent successfully! ", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	return (
		<div className="pageContainer" id="contact">
			<div className="contact-form">
				<h1>Contact me</h1>
				<form
					action="submit"
					className="form"
					onSubmit={handleSubmit}
					ref={formRef}
				>
					<img src="Image-contact.png" alt="contact memoji" />
					<input
						type="text"
						placeholder="Name"
						name="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="text"
						placeholder="email"
						name="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						placeholder="write you message here!"
						name="message"
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 1 },
						}}
						whileTap={{ scale: 0.9 }}
						type="submit"
						className="submit-btn"
					>
						<span>
							<FaPaperPlane />
						</span>
						SEND MESSAGE
					</motion.button>
					<ToastContainer />
				</form>
			</div>
		</div>
	);
};

export default Contact;
