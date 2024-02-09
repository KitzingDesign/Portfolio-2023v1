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
		height: 100vh;
		max-height: -webkit-fill-available;
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
					<h2>Calmyfly</h2>
					<Text>
						I have always been afraid of flying, and something I've heard
						countless times is 'Why are you afraid of flying? It's much more
						dangerous to travel by car than by plane.' This app was created to
						challenge this statement and illustrate what that sentence actually
						means.
					</Text>
					<ProjectLink link="/Emotions" />
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
						src="/homePageEmotions.png"
						alt="Mockup Car Rental webpage"
					/>
				</ImgContainer>
			</div>
		</Container>
	);
};

export default HertzSection;
