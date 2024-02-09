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
		max-height: -webkit-fill-available;
	}
`;
const TextContainer = styled.div`
	margin-left: 0rem;
	width: 100%;
	& > p {
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
	}
	@media (orientation: portrait) {
		width: 100%;
		margin-left: 0rem;
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
					<h2>Bachlor's Thesis</h2>
					<p>
						As a bachelor thesis project, my group&apos;s mission was, together
						with the design company Boid, to develop the control room of the
						future for the alloy plant Vagrön Alloys. Our role in the project
						was to create a new workspace for the person overseeing the
						furnaces.
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
