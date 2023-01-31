import ProjectLink from "../UI/Project-link";
import Image from "next/image";

import styles from "./hertzSection.module.css";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState } from "react";

// import produktImg from "public/static/Macbook-mockup-hertz.jpg";
// const TextAnimation = keyframes`
// 	from {
// 		opacity: 0;
// 		transform: translate(0, 100vh);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: translate(0, 0);
// 	}`;

const Container = styled.div`
	height: 100vh;
	max-width: 80vw;
	margin: 0 auto;
	display: flex;
	align-items: center;
	@media (orientation: portrait) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	@media (orientation: portrait) and (max-width: 34.5em) {
		height: inherit;
	}
`;
const TextContainer = styled.div`
	width: 100%;
	@media (orientation: portrait) {
		width: 100%;
	}
`;
const ImgContainer = styled.div`
	width: 40vw;
	@media (orientation: portrait) {
		width: 65vw;
	}
	@media (orientation: portrait) and (max-width: 34.5em) {
		width: 80vw;
	}
`;
const Text = styled.p`
	margin-top: 2.4rem;
	margin-bottom: 2.4rem;
`;
const stay = false;

const HertzSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<Container>
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
			>
				<TextContainer>
					<h2>Biluthyrning</h2>
					<Text>
						Att känna frustration när man ska använda en hemsida är något som
						kan skapa en negativ bild av hela varumärket. Jag och några kursare
						hade som arbete att förbättra en biluthyrningshemsida ur ett
						usability perspektiv, för att just slippa denna frustration.
					</Text>
					<ProjectLink link="/Biluthyrning" />
				</TextContainer>
			</div>

			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
			>
				<ImgContainer>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src="/Macbook-mockup-hertz.png"
						alt="Mockup Car Rental webpage"
					/>
				</ImgContainer>
			</div>
		</Container>
	);
};

export default HertzSection;
