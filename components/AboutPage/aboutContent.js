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
							Mitt namn är Jakob, en UX/UI-designer, Human reasercher,
							produktutvecklare och en musikälskare, allt från indie-musik till
							jazz dånar i lurarna. Som person är jag utåtriktad och mån om min
							omgivning, allt blir roligare ifall folk runt en trivs och min
							filosofi är att om man har roligt så syns det även på resultatet.{" "}
							<br /> <br />
							Som designer är jag en nyfiken prick, jag vill alltid lära mig nya
							saker och utmana mig själv och jag älskar att jobba i olika
							sammanställningar för att få nya perspektiv.
							<br /> <br /> Sommaren (2021) tog jag min kandidatexamen från
							Teknisk Design på Chalmers, där lärde jag mig vikten i att alltid
							ha användaren i centrum, det är ju trots allt för dem arbetet
							görs. Under min kandidat insåg jag att mitt främsta intresse var
							digitala produkter med allt vad det innefattar. För att få en
							djupare förståelse inom området tog jag ett sabbatsår där jag
							under hösten lärde mig front end utveckling på egen hand. Genom
							att sitta med det fick jag en ännu större bekräftelse att det
							digitala produktframtagandet är rätt för mig.
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
					<h2>Utbildning</h2>
					<h3>Chalmers University of Technology</h3>
					<p>Kandidat, Teknisk Design (2018-2021)</p>
				</Container>
			</div>
			<Container data-aos="new-animation">
				<div className={styles.emailContainer}>
					<h2>JakobKitzing@gmail.com</h2>
					<p>
						Tveka inte på att höra av dig, jag är alltid öppen för att tjöta!
					</p>
				</div>
			</Container>
		</Fragment>
	);
};

export default AboutContent;
