import { Fragment } from "react";
import Link from "next/dist/client/link";

import styles from "./homeHeader.module.css";
import Navigation from "../Layout/Navigation";
import TextLoop from "../UI/textLoop";
import BlobBackground from "../UI/blobBackground";
import styled from "@emotion/styled";

const text = "UX/UI.";

const HomeHeader = () => {
	const Container = styled.div`
		height: 100vh;
		width: 80vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (orientation: portrait) {
			height: 100%;
		}
	`;
	const HeaderElement = styled.div`
		display: flex;
		height: 100vh;
		width: 100%;
		align-items: center;
		justify-content: center;
		@media (orientation: portrait) {
			flex-direction: column-reverse;
		} ;
	`;

	const HeaderText = styled.div`
		width: 80%;
		& > p {
			line-height: 1.6;
			width: 90%;
			margin-bottom: 4.8rem;
			margin-top: 3.2rem;
		}
		& > h1 {
			font-size: 5.2rem;
		}
		@media (orientation: portrait) {
			width: 100%;
			& > p {
				width: 100%;
			}
		}
	`;
	const Btn = styled.a`
		box-sizing: inline-block;
		font-size: 2rem;
		font-weight: bold;
		background-color: black;
		border: none;
		padding: 1.6rem 3.2rem;
		color: white;
		text-decoration: none;
		border-radius: 6px;
		cursor: pointer;
		&:hover {
			background: white;
			box-shadow: 2px black;
			color: black;
			cursor: pointer;
		}
	`;
	const HeaderImg = styled.div`
		width: 80%;
	`;

	return (
		<div>
			<Container>
				<HeaderElement>
					<HeaderText>
						<h1>Jakob Kitzing</h1>

						<TextLoop />

						<p>
							Jag är en produktdesigner med huvudfokus på digitala produkter och
							UX/UI. Min filosofi och det jag genuint brinner för är att
							utveckla kreativa produkter och tjänster där användaren alltid
							står i centrum.
						</p>
						<Link href="/about">
							<Btn>Mer om mig</Btn>
						</Link>
					</HeaderText>
					<HeaderImg>
						<BlobBackground />
					</HeaderImg>
				</HeaderElement>
			</Container>
		</div>
	);
};

export default HomeHeader;
