import ProjectLink from "../UI/Project-link";
import Image from "next/image";
import styles from "./prosexSection.module.css";
import styled from "@emotion/styled";
import { Fragment } from "react";

// import produktImg from "public/static/tre-flaskor.png";
const Container = styled.div`
	max-width: 90vw;
	margin-left: auto;
	height: 100vh;

	display: flex;
	align-items: center;
	@media (orientation: portrait) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		height: 100vh;
		max-height: -webkit-fill-available;
	}
`;
const ContentText = styled.div`
	width: 100%;
	padding-bottom: 10rem;
	@media (orientation: portrait) {
		width: 80vw;
	}
`;
const Text = styled.p`
	margin-top: 2.4rem;
	margin-bottom: 2.4rem;
`;
const ContentImg = styled.div`
	@media (orientation: portrait) {
		border: solid black 2px;
		width: 65vw;
		margin-top: 64px;
		padding-bottom: 22px;
		margin-bottom: 24rpx;
	}
`;
const Img = styled.div`
	width: 50vw;
	@media (orientation: portrait) {
		width: 100%;
	}
`;

const stay = false;
const ProsexSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<Fragment>
			<Container>
				<div
					className={
						stay
							? `${styles.contentText} ${styles.visableText}`
							: styles.contentText
					}
					id="Text2"
				>
					<ContentText>
						<h2>prosex.</h2>
						<Text>
							During 2019-2020, I served as the PR Manager for the Technical
							Design&apos;s PR and Event committee. Working in such a close-knit
							group was incredibly rewarding, and I also gained valuable skills
							in Adobe Suite and graphic design.
						</Text>
						<ProjectLink link="/prosex-page" />
					</ContentText>
				</div>
				<div
					className={
						stay
							? `${styles.contentImg} ${styles.visableImg}`
							: styles.contentImg
					}
					id="Bild2"
				>
					<ContentImg>
						<Img>
							<Image
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
								src="/tre-flaskor.webp"
								alt="prosex. BeerBottle"
							/>
						</Img>
					</ContentImg>
				</div>
			</Container>
		</Fragment>
	);
};

export default ProsexSection;
