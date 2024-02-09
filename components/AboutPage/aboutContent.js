import styles from "./aboutContent.module.css";
import Skills from "./aboutComponenter/skills";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SkillStatic from "./aboutComponenter/skillsStatic";

import styled from "@emotion/styled";

const Container = styled.div`
	padding-top: 10rem;
	width: 70vw;
	margin: 0 auto;
	@media (max-width: 25em) {
		width: 85vw;
	}
`;
const TitleAbout = styled.h1`
	display: inline-block;
	font-size: 8rem;
	margin-bottom: 3.4rem;
	color: white;
	@media (max-width: 25em) {
		width: 85vw;
	}
`;
const GreenPolygon = styled.div`
	position: absolute;
	background-color: #c1e1c1;
	width: 40%;
	height: 20rem;
	transform: translate(0, -17rem);

	left: 0;
	z-index: -1;
	clip-path: polygon(0 7%, 92% 0, 80% 75%, 0% 94%);
	@media (max-width: 48em) {
		width: 50%;
		height: 110px;
		transform: translate(0, -105px);
	}
`;
const FlexBoxText = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 6.4rem;
	@media (max-width: 81.25em) {
		gap: 3.2rem;
	}
	@media (max-width: 59em) {
		display: block;
		& > p {
			padding-right: 0rem;
			border-right: none;
		}
	}
`;
const Text = styled.p`
	padding-right: 2rem;
	margin-top: 6rem;
	border-right: gray solid 0.2rem;
	font-size: 2.4rem;
	opacity: 1;
`;

const AboutContent = () => {
	const designList = [
		"Photoshop",

		"Illustrator",
		"Indesign",
		"XD",
		"Figma",
		"Fusion",
		"Key Shot",
	];
	const generellList = [
		"UX/UI",
		"User Research",
		"Rappid Prototyping",
		"Ergonomi",
		"Wireframing",
		"Usability",
	];
	const programmingList = ["CSS/HTML", "JS", "React/next.JS", "Python"];

	const [ref, isVisible] = useInView({
		threshold: 0.9,
		triggerOnce: true,
	});
	const [refTwo, isVisableTwo] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	const [refThree, isVisableThree] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	const [refFour, isVisableFour] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<Fragment>
			<Container>
				<TitleAbout>about</TitleAbout>
				<GreenPolygon />

				<FlexBoxText>
					<div
						className={
							isVisible ? `${styles.textDiv} ${styles.textOne}` : styles.textDiv
						}
						ref={ref}
					>
						<Text>
							My name is Jakob, and I&apos;m a UX/UI designer, human researcher,
							product developer, and music lover; everything from electronic
							music to jazz resonates through my headphones. As a person, I'm
							outgoing and caring about my surroundings, believing that
							everything is more enjoyable when those around me are happy. My
							philosophy is that having fun reflects positively on the results.{" "}
							<br /> <br />
							As a designer, I'm endlessly curious; I always strive to learn new
							things and challenge myself. I thrive on working in diverse teams
							to gain fresh perspectives and learn.
							<br /> <br /> Currently, I'm pursuing my master's degree in
							Interaction Design at Chalmers (MSc. Interaction Design and
							Technologies), where I'm further exploring all aspects of UX and
							user-friendliness.
						</Text>
					</div>
					<div className={styles.flexSkills}>
						<div>
							<h2 data-aos="fade-up">Generella</h2>
							<div ref={refTwo}>
								{isVisableTwo ? <Skills skillList={generellList} /> : null}
							</div>
						</div>
						<div>
							<h2 data-aos="fade-up">Design</h2>
							<div ref={refThree}>
								{isVisableThree ? <Skills skillList={designList} /> : null}
								{/* <Skills text="Photoshop" />
								<Skills text="Illustrator" />
								<Skills text="Indesign" />
								<Skills text="XD" />
								<Skills text="Figma" />
								<Skills text="Fusion" />
								<Skills text="Key Shot" /> */}
							</div>
						</div>
						<div>
							<h2 data-aos="fade-up">Programming</h2>
							<div ref={refFour}>
								{isVisableFour ? <Skills skillList={programmingList} /> : null}
								{/* <Skills text="CSS/HTML" />
								<Skills text="JS" />
								<Skills text="React/next.JS" />
								<Skills text="Python" /> */}
							</div>
						</div>
					</div>
				</FlexBoxText>
			</Container>
			<div className={styles.educationContainer} data-aos="fade-right">
				<Container>
					<h2>Work Experince</h2>
					<h3>
						Product Developer<i> - UX Designer (Summer internship 2023)</i>
					</h3>
					<p>
						<i>Kognic</i>
					</p>
					<h2>Education</h2>
					<h3>
						MSc. Computer Sience <i>(Exchange studies fall 2023)</i>
					</h3>
					<p>
						<i>Institution Tecnico Lisboa</i>
					</p>
					<h3>
						MSc. Interaction Design and Technologies{" "}
						<i>(2022-Expected Graduation 2024)</i>
					</h3>
					<p>
						<i>Chalmers University of Technology</i>
					</p>
					<h3>
						BSc. Industrial Design Engineering <i>(2018-2021)</i>
					</h3>
					<p>
						<i>Chalmers University of Technology</i>
					</p>
				</Container>
			</div>
			<Container data-aos="new-animation">
				<div className={styles.emailContainer}>
					<h2>Jakob.Kitzing@gmail.com</h2>
					<p>Don't hesitate to get in touch, I'm always open for a chat!</p>
				</div>
			</Container>
		</Fragment>
	);
};

export default AboutContent;
