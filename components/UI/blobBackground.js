import styles from "./blobBackground.module.css";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Shape } from "three";

const BlobBackground = () => {
	const Container = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	`;
	const ProfilImg = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		width: 80%;
		z-index: 1;
	`;
	const Movement = keyframes`0%,
	100% {
		border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
	}
	20% {
		border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
	}
	40% {
		border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
	}
	60% {
		border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
	}
	80% {
		border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
	}`;
	const ShapeBlob = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		height: 100%;
		width: 100%;
		border-radius: 30% 50% 20% 40%;
		animation: ${Movement} 20s ease-in-out infinite both alternate,
			movement_one 40s ease-in-out infinite both;
		opacity: 0.7;
		background-color: red;
	`;

	return (
		<Container>
			<ProfilImg>
				<Image
					src="/Startbild.svg"
					width={1000}
					height={1000}
					alt="Jakob Kitzing"
				/>
			</ProfilImg>
			<ShapeBlob></ShapeBlob>
		</Container>
	);
};
export default BlobBackground;
