import styles from "./kandidatarbeteHeader.module.css";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

//emotion styles
const Container = styled.div`
	height: 100vh;
	max-width: 95vw;
	margin: 0 auto;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 84em) {
		height: inherit;
	}
`;
const Headings = styled.div`
	padding-bottom: 100px;
	position: relative;
`;
const Vertical = styled.div`
	padding-bottom: 50px;
	writing-mode: tb-rl;
	transform: rotate(180deg);
`;

//Animations
const AnimationVertical = keyframes`from {
		opacity: 0;
		transform: translate(10vw, 0);
	}
	to {
		opacity: 1;
		transform: translate(0, 0);
	}`;
const AnimationAbove = keyframes`from {
		opacity: 0;
		transform: translate(-10vw, 0);
	}
	to {
		opacity: 1;
		transform: translate(0, 0);
	}`;

//Animated Elements

const Year = styled.h1`
	color: #c0d1c5;
	font-weight: 500;
	font-size: 20vw;

	opacity: 0;
	animation-name: ${AnimationVertical};
	animation-duration: 0.4s;
	animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
	animation-fill-mode: forwards;
	animation-delay: 0.5s;
	@media (max-width: 84em) {
	}
`;
const Season = styled.h2`
	text-transform: uppercase;
	text-align: right;
	font-weight: 400;
	line-height: 30%;
	font-size: 7vw;
	margin-bottom: 20px;

	text-decoration: underline black 0.5rem;

	opacity: 0;
	animation-name: ${AnimationVertical};
	animation-duration: 0.4s;
	animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
	animation-fill-mode: forwards;
	animation-delay: 0.7s;
	@media (max-width: 84em) {
		bottom: 70px;
	}
	@media (max-width: 75em) {
		bottom: 40px;
	}
	@media (max-width: 50em) {
		bottom: 20px;
	}
`;

const Above = styled.h2`
	position: absolute;
	left: 7vw;
	font-size: 6vw;
	bottom: 120px;

	opacity: 0;
	animation-name: ${AnimationAbove};
	animation-duration: 0.4s;
	animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
	animation-fill-mode: forwards;
	animation-delay: 0.9s;
	@media (max-width: 84em) {
		bottom: 100px;
	}
	@media (max-width: 75em) {
		bottom: 90px;
	}
`;

const Img = styled.div`
	width: 55vw;
	z-index: -1;
`;
const Nr = styled.h2`
	position: absolute;
	right: 0%;
	bottom: 50%;
	transform: translateY(140%);
	font-size: 24vw;
	line-height: 0.6;
	color: #0b0a11;
	opacity: 0.09;
`;

const KandidatarbeteHeader = () => {
	return (
		<Container>
			<Headings>
				<Vertical>
					<Year>2021</Year>
					<Season>Spring</Season>
				</Vertical>
				<Above>
					Redesign <br /> Workplace
				</Above>
			</Headings>
			<Img>
				<Image
					width="100%"
					height="100%"
					layout="responsive"
					objectFit="contain"
					src="/headerKandidatpng.webp"
					alt="Six Computer Screens"
				/>
				<Nr>02</Nr>
			</Img>
		</Container>
	);
};

export default KandidatarbeteHeader;
