import styles from "./aboutHeader.module.css";
import Image from "next/image";

import Tilt from "react-parallax-tilt";
import styled from "@emotion/styled";

const AboutHeader = () => {
	const Container = styled.div`
		position: relative;

		width: 100vw;
		height: 60vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 0;
		@media (min-width: 760px) {
			padding-bottom: 0;
			height: 100vh;
		}
	`;
	const Stripe = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 1rem);
		width: 200vw;
		overflow: hidden;

		height: 28%;
		z-index: -5;
		background-color: #c1e1c1;
	`;

	const ImgWrapper = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 15rem);
		width: 50%;
	`;

	const Paralex = styled(Tilt)`
		position: absolute;

		transform: translate3d(-50%, -50%, 0);
		z-index: -4;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
		height: 250px;
		width: 250px;
		border-radius: 100%;
		/* background-color: rgba(255, 255, 255, 0.96); */
		transform-style: preserve-3d;
		@media (min-width: 760px) {
			height: 600px;
			width: 600px;
		}
	`;

	return (
		<Container>
			<Paralex options={{ max: 20, perspective: 1000 }} tiltReverse={true}>
				<div className={styles.overflow}>
					<Stripe />
				</div>
				<ImgWrapper>
					<Image
						width={1000}
						height={1000}
						layout="responsive"
						src="/Startbild.svg"
						alt="Jakob Kitzing"
					/>
				</ImgWrapper>
			</Paralex>
		</Container>
	);
	// return (
	// 	<div className={`${styles.container} `}>
	// 		<Tilt
	// 			options={{ max: 20, perspective: 1000 }}
	// 			className={styles.parent}
	// 			tiltReverse={true}
	// 		>
	// 			<div className={styles.underImg}></div>
	// 			<div className={styles.child}>
	// 				<Image
	// 					width={1000}
	// 					height={1000}
	// 					layout="responsive"
	// 					src="/Startbild.svg"
	// 					alt="Jakob Kitzing"
	// 				/>
	// 			</div>
	// 		</Tilt>

	// 		{/* <div className={styles.under}>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 		</div> */}
	// 	</div>
	// );
};
export default AboutHeader;
