import styles from "./prosexHeader.module.css";
import Image from "next/image";

import styled from "@emotion/styled";

//emotion styles
const Container = styled.div`
	width: 100vw;
	overflow: hidden;
`;
const ImgContainer = styled.div`
	position: relative;
	width: 30vw;
	margin: 0 auto;
	padding-top: 19rem;
	padding-bottom: 15rem;
	@media (max-width: 140em) {
		padding-top: 200px;
		padding-bottom: 500px;
	}
	@media (max-width: 128em) {
		padding-top: 250px;
		padding-bottom: 500px;
	}
	@media (max-width: 116em) {
		padding-top: 250px;
		padding-bottom: 200px;
	}
	@media (max-width: 100em) {
		padding-top: 200px;
		padding-bottom: 200px;
	}
	@media (max-width: 71em) {
		padding-top: 170px;
		padding-bottom: 120px;
	}
	@media (max-width: 53em) {
		padding-top: 140px;
		padding-bottom: 100px;
	}
	@media (max-width: 44em) {
		padding-top: 130px;
		padding-bottom: 70px;
	}
	@media (max-width: 31.5em) {
		padding-top: 60px;
		padding-bottom: 70px;
	}
	@media (max-width: 21.8em) {
		padding-top: 70px;
		padding-bottom: 70px;
	}
`;
const Beer = styled.div`
	position: relative;

	height: 60rem;
	width: 100%;
	border: black solid 0.5rem;
	@media (max-width: 140em) {
		height: 850px;
	}
	@media (max-width: 128em) {
		height: 700px;
	}
	@media (max-width: 116em) {
		height: 600px;
	}
	@media (max-width: 100em) {
		height: 520px;
	}
	@media (max-width: 71em) {
		height: 350px;
	}
	@media (max-width: 53em) {
		height: 240px;
	}
	@media (max-width: 44em) {
		height: 200px;
	}
	@media (max-width: 31.5em) {
		height: 140px;
	}
	@media (max-width: 21.8em) {
		height: 120px;
	}
`;
const BeerBottle = styled.div`
	z-index: 1;
	position: absolute;
	bottom: 0%;

	width: 100%;
`;
const BeerShadow = styled.div`
	z-index: -2;
	position: absolute;
	bottom: -0.1%;

	width: 100%;
`;
const BackgroundStripe = styled.div`
	width: 102vw;
	transform: translateX(-36vw) translateY(-15rem);
	filter: invert(84%) sepia(17%) saturate(6209%) hue-rotate(317deg)
		brightness(103%) contrast(98%);
	@media (max-width: 140em) {
		width: 101vw;
		transform: translateX(-36vw) translateY(-200px);
	}
	@media (max-width: 128em) {
		width: 103vw;
		transform: translateX(-36vw) translateY(-200px);
	}
	@media (max-width: 116em) {
		transform: translateX(-36vw) translateY(-180px);
	}
	@media (max-width: 100em) {
		width: 103vw;
		transform: translateX(-36vw) translateY(-120px);
	}
	@media (max-width: 71em) {
		width: 103vw;
		transform: translateX(-36vw) translateY(-120px);
	}
	@media (max-width: 53em) {
		width: 105vw;
		transform: translateX(-38vw) translateY(-80px);
	}
	@media (max-width: 44em) {
		width: 105vw;
		transform: translateX(-38vw) translateY(-70px);
	}
	@media (max-width: 31.5em) {
		width: 103vw;
		transform: translateX(-38vw) translateY(-20px);
	}
	@media (max-width: 21.8em) {
		width: 105vw;
		transform: translateX(-38vw) translateY(-20px);
	}
`;

const ProsexHeader = () => {
	return (
		<Container>
			<ImgContainer>
				<Beer>
					<BeerBottle>
						<Image
							width="100%"
							height="145%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/bira-above.png"
							alt="prosex. summer beer"
						></Image>
					</BeerBottle>
					<BeerShadow>
						<Image
							width="100%"
							height="149%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/bira-below.png"
							alt="shadow"
						></Image>
					</BeerShadow>
					<BackgroundStripe>
						<Image
							width="100%"
							height="50%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/stripes.svg"
							alt="strieps for background"
						></Image>
					</BackgroundStripe>
				</Beer>
			</ImgContainer>
		</Container>
	);
};

export default ProsexHeader;
