import styles from "./kandidatarbeteSection.module.css";
import ProjectLink from "../UI/Project-link";
import Image from "next/image";
import styled from "@emotion/styled";

// import produktImg from "public/static/herobild.png";
const stay = false;

const Container = styled.div`
	height: 100vh;
	max-width: 80vw;
	margin: 0 auto;
	display: flex;
	align-items: center;
	@media (orientation: portrait) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	@media (orientation: portrait) and (max-width: 34.5em) {
		height: 100vh;
	}
`;
const TextContainer = styled.div`
	width: 100%;
	& > p {
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
	}
	@media (orientation: portrait) {
		width: 100%;
	}
`;
const ImgContainer = styled.div`
	width: 40vw;
	width: 40vw;
	padding-bottom: 16rem;
	@media (orientation: portrait) {
		width: 65vw;
		padding-bottom: 4.8rem;
	}
	@media (orientation: portrait) and (max-width: 34.5em) {
		width: 75vw;
	}
`;

const KandidatarbeteSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<Container>
			<div
				className={
					stay
						? `${styles.contentImg} ${styles.visableImg}`
						: styles.contentText
				}
				id="Bild"
			>
				<ImgContainer>
					<Image
						width={1000}
						height={1000}
						src="/herobild.png"
						alt="kandidatarbete"
					/>
				</ImgContainer>
			</div>
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
				id="Text"
			>
				<TextContainer>
					<h2>Kandidatarbete</h2>
					<p>
						Som kandidatarbete fick min grupp som uppdrag tillsammans med
						designföretaget Boid att utveckla framtidens kontrollrum åt
						legeringsverket Vagrön Alloys. Vår del i arbetet var att framställa
						den nya arbetsplatsen till personen som styr ugnarna.
					</p>
				</TextContainer>
				<ProjectLink
					link="kandidatarbete-page"
					alt="Prototype Kandidatarbete"
				/>
			</div>
		</Container>
	);
};

export default KandidatarbeteSection;
