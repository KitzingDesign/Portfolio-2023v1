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
						Jag har alltid varit flygrädd och något jag fått höra otaliga gånger
						är "Varför är du flygrädd, det är mycket farligare att åka bil än
						att flyga". Denna appen är skapad för att kritisera denna mening och
						visa hur hemskt det egentligen är.
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
