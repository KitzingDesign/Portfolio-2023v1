import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Container = styled.div`
	height: 100vh;
	max-width: 95vw;
	margin: auto;
	position: relative;
	display: flex;

	align-items: center;
	@media (max-width: 84em) {
		height: inherit;
	}
`;
const Headings = styled.div`
	padding-bottom: 100px;
	position: relative;
	display: block;
	@media (max-width: 84em) {
		padding-bottom: 20px;
	}
`;
const Vertical = styled.div`
	padding-bottom: 0;
	opacity: 0.4;
	writing-mode: tb-rl;
	transform: rotate(180deg);
	@media (max-width: 84em) {
	}
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

//Animated Elements

const Year = styled.h1`
	color: #bcbcbc;

	font-weight: 500;
	font-size: 18vw;
	display: block;
	z-index: -1;

	opacity: 0;
	animation-name: ${AnimationVertical};
	animation-duration: 0.4s;
	animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
	animation-fill-mode: forwards;
	animation-delay: 0.5s;
	@media (max-width: 84em) {
		bottom: 10px;
	}
`;
const Season = styled.h2`
	text-transform: uppercase;
	text-align: right;
	color: #bcbcbc;
	font-weight: 400;
	line-height: 30%;
	font-size: 6vw;

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

const Img = styled.div`
	width: 70%;

	align-self: center;
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

const EmotionHeader = () => {
	return (
		<Container>
			<Headings>
				<Vertical>
					<Year>2023</Year>
					{/* <Season>Spring</Season> */}
				</Vertical>
			</Headings>
			<Img>
				<Image
					width="100%"
					height="100%"
					layout="responsive"
					objectFit="contain"
					src="/emotionsImg/header.png"
					alt="Mockup on computer screen"
				/>
				{/* <img src="/Macbook-mockup-hertz.jpg" /> */}
			</Img>
		</Container>
	);
};
export default EmotionHeader;
