import Divider from "../UI/divider";
import styles from "./KandidatarbeteBakgrund.module.css";
import Image from "next/image";
import styled from "@emotion/styled";

//emotion styles
const Container = styled.div`
	padding-top: 0;
	width: 70vw;
	margin: 0 auto;
	& > h2 {
		margin: 0 auto;
		font-size: 4.4rem;
		padding-bottom: 1.2rem;
	}
	& > p {
		text-align: right;
		margin: 0 auto;
		font-size: 1.6rem !important;
		font-weight: 600;
		padding-top: 1.6rem;
	}
	& > section {
		margin: 0 auto;
		font-size: 2.4rem;
		line-height: 1.2;

		padding-top: 2.4rem;
	}
	& > h3 {
		text-align: center;
		text-transform: uppercase;
		font-size: 1.6rem !important;

		padding-top: 9.6rem;
		padding-bottom: 1.2rem;
		color: #333;
	}
	@media (max-width: 59em) {
		padding-top: 0;

		width: 70vw;

		& > p {
			padding-top: 8px;
		}
		& > section {
			padding-top: 24px;
		}
		& > h3 {
			padding-top: 64px;
		}
	}
	@media (max-width: 25em) {
		width: 80vw;
		& > h3 {
			padding-top: 32px;
		}
	}
`;

const FlexImg = styled.div`
	margin: 0 auto;

	display: flex;
	width: 90%;

	align-items: center;
	justify-content: space-around;

	/* filter: grayscale(100%); */
	filter: brightness(0%);
	opacity: 50%;
	@media (max-width: 59em) {
		width: 90%;
	}
`;
const ImgContainer = styled.div`
	width: 10%;
`;

const KandidatarbeteBakgrund = () => {
	return (
		<Container>
			{/* <p className={styles.bakgrund}>Bakgrund</p> */}
			<h2 data-aos="fade-up">Bakgrund</h2>
			<Divider color="black" />

			<p data-aos="fade-up">
				© Boström Dagberg Jilsén Kitzing Kullerstrand Silberberg
			</p>

			<section data-aos="fade-up">
				Vi som kandidatgrupp fick som arbete att tillsammans med företaget Boid
				ta fram ett nytt mordaniserat kontrollrum för legeringsverket Vargön
				Alloys AB. I nuläget har Vargön fyra st kontrollrum, ett vid vadera ugn.
				Projektets mål var att samla dessa fyra kontrollrum till ett stort
				gemensamt kontrollrum, så att styrningen sker remote från ugnen. <br />
				<br />
				Detta resulterade i en del förändringar då mycket av arbetet påverkas av
				just närheten till ugnen. Vår del i projektet var att skapa ett koncept
				för Smältarens arbetsplats. Smältarens arbetsuppgifter är att styra
				ugnen genom att bland annat, fylla på material, styra temperaturen och
				övervaka ugnen ifall något skulle gå fel. Utöver Boid ingick även
				företaget Guard AB i projektet, deras ansvar var att skapa självaste
				automationen till ugnen.
				<br />
				<br /> Att få jobba i ett större projekt var mycket lärorikt då det hela
				tiden under projektets gång kom nya upptäckter vilket vi var tvungna att
				förhålla oss till. Detta ledde till att vi hela tiden var tvugna att
				vara öppensinnade och flexibla för att kunna skapa ett så bra koncept
				som möjligt för en fungerande helhet. Nedan presenteras de olika faserna
				i arbetet kortfattat.
			</section>

			<h3 data-aos="fade-up">Collaberation Between</h3>
			<div data-aos="fade-up">
				<FlexImg>
					<ImgContainer>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Chalmers.svg"
							alt="Chalmers logo"
						/>
					</ImgContainer>
					<ImgContainer>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Boid.svg"
							alt="Boid logo"
						/>
					</ImgContainer>
					<ImgContainer>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Vargön.svg"
							alt="Vargön Alloys logo"
						/>
					</ImgContainer>
					<ImgContainer>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Guard.svg"
							alt="Guard logo"
						/>
					</ImgContainer>
				</FlexImg>
			</div>
		</Container>
	);
};
export default KandidatarbeteBakgrund;
