import styles from "./krySection.module.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import Link from "next/link";

import App from "../UI/app";
import styled from "@emotion/styled";

const Container = styled.div`
	height: 100vh;
	background-color: black;

	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10rem;
	@media (max-width: 51em) and (orientation: landscape) {
	}
	@media (orientation: portrait) {
		height: 100%;
	}
`;
const Content = styled.div`
	height: inherit;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	& > h2 {
		width: 80vw;
		margin: 0 auto;
		color: White;
		font-size: 8rem;
	}
	@media (max-width: 51em) and (orientation: landscape) {
		gap: 4rem;
		& > h2 {
			font-size: 6.4rem;
		}
	}
	@media (orientation: portrait) {
		gap: 6vh;
		& > h2 {
			font-size: 6.4rem;
		}
		justify-content: center;
	}
`;
const Appar = styled.div`
	width: 80vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2.4rem;
	@media (max-width: 51em) and (orientation: landscape) {
	}
	@media (orientation: portrait) {
		grid-template-columns: repeat(6, 1fr);
		gap: 2.4rem;
	}
`;
const Item = styled.div`
	@media (orientation: portrait) {
		grid-column: span 2;
		&:nth-last-child(2) {
			grid-column: 2 / span 2;
		}
	}
`;
const TheLink = styled.div`
	&:hover {
		font-style: italic;
		cursor: pointer;
	}
	@media (orientation: portrait) {
	}
`;
const ProjectLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-sizing: inline-block;
	color: white;
	text-decoration: none;
	cursor: pointer;
`;

const UtforskaText = styled.p`
	font-size: 4.8rem;
	@media (max-width: 51em) and (orientation: landscape) {
		font-size: 3.6rem;
	}
	@media (orientation: portrait) {
		font-size: 4.8rem;
	}
`;

const Arrow = styled(ArrowRightIcon)`
	color: white;
	height: 9.6rem;
	margin-left: 1rem;
	@media (max-width: 51em) and (orientation: landscape) {
		height: 6.4rem;
	}
	@media (orientation: portrait) {
		height: 6.4rem;
		margin-left: 1rem;
	}
`;

let stay = false;
const KrySection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<Container>
			<Content>
				<h2>En Digitaliserad Värld</h2>
				<Appar>
					<Item>
						<div
							className={
								stay ? `${styles.item} ${styles.animationOne}` : styles.item
							}
						>
							<App url="/eldler_logga.svg" header="Eldler" alt="Eldler logo" />
						</div>
					</Item>
					<Item>
						<div
							className={
								stay ? `${styles.item} ${styles.animationTwo}` : styles.item
							}
						>
							<App url="/ely_logga.svg" header="Ely" alt="Ely logo" />
						</div>
					</Item>
					<Item>
						<div
							className={
								stay ? `${styles.item} ${styles.animationThree}` : styles.item
							}
						>
							<App url="/jury_logga.svg" header="Jury" alt="Jury logo" />
						</div>
					</Item>
					<Item>
						<div
							className={
								stay ? `${styles.item} ${styles.animationFour}` : styles.item
							}
						>
							<App
								url="/gyno_logga.svg"
								header="Gyno"
								id="icon_1"
								alt="Gyno logo"
							/>
						</div>
					</Item>
					<Item>
						<div
							className={
								stay ? `${styles.item} ${styles.animationFive}` : styles.item
							}
						>
							<App url="/hemmy_logga.svg" header="Boi" alt="Boi logo" />
						</div>
					</Item>
				</Appar>
				<TheLink>
					<Link href="/digitalisering" passHref={true}>
						<ProjectLink>
							<UtforskaText>Utforska Projektet</UtforskaText>
							<Arrow />
						</ProjectLink>
					</Link>
				</TheLink>
			</Content>
		</Container>
	);
};

export default KrySection;
