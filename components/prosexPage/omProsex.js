import styles from "./omProsex.module.css";
import Image from "next/image";
import styled from "@emotion/styled";
import { Fragment } from "react";

//emotion styles
const Container = styled.div`
	width: 70vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	@media (max-width: 25em) {
		width: 85vw;
		margin: 0 auto;
	}
`;
const TextContainer = styled.div`
	width: 70vw;
	margin: 0 auto;
	@media (max-width: 25em) {
		width: 85vw;
		margin: 0 auto;
	}
`;
const ImgContainer = styled.div`
	border: solid 0.5rem white;
	background-color: white;
	width: 70vw;
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	@media (max-width: 25em) {
		width: 85vw;
		margin: 0 auto;
	}
`;
const Text = styled.p`
	padding-top: 2.4rem;
	padding-bottom: 1.6rem;
`;

const OmProsex = () => {
	return (
		<Fragment>
			<Container>
				<TextContainer>
					<h2 data-aos="fade-up">Vad är prosex.?</h2>
					<Text data-aos="fade-up">
						prosex. är teknisk designs sexmästeri och pr-förening. 2019-2020
						satt jag som pr-ansvarig i prosex. med det härliga gänget ni kan se
						nedan. Mitt år som sittandes i prosex. var bland det roligaste jag
						gjort! Att arbeta dag såväl som natt, att lösa problem i stressiga
						situationer och att alltid försöka få ens arrangemang att bli så bra
						som möjligt kunde ibland bli lite påfrestande, men att få se ett
						lyckat evenemang som vi lyckats få ihop gjorde det värt alla dagar i
						veckan. Ett plus i det hela är att jag även fick utveckla mina
						kunskaper i adobe suit under tiden.
					</Text>
				</TextContainer>
				<ImgContainer data-aos="fade-up">
					<Image
						width="101%"
						height="63%"
						layout="responsive"
						objectFit="contain"
						src="/prosex/rummet-bild.jpg"
						alt="prosex.19"
					></Image>
				</ImgContainer>
			</Container>
		</Fragment>
	);
};
export default OmProsex;
