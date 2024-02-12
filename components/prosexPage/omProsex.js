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
					<h2 data-aos="fade-up">What is prosex.?</h2>
					<Text data-aos="fade-up">
						prosex. is the program industrial design engineering at Chalmers PR
						and event committee. In 2019-2020, I served as the PR manager in
						prosex., alongside the wonderful team you can see below. My year in
						prosex. was one really enjoyable experience! Working day and night,
						solving problems in stressful situations, and always striving to
						make our events as successful as possible could sometimes be
						challenging, but seeing a successful event come together made it all
						worth it. A bonus was that I also got to develop my skills in Adobe
						Suite during that time.
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
