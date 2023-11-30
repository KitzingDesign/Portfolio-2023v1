import styles from "./hertzBakgrund.module.css";
import Image from "next/image";
import styled from "@emotion/styled";

const Container = styled.div`
	max-width: 100vw;
	margin: 0 auto;
	
	}
`;
const Content = styled.div`
	width: 70vw;
	margin: 0 auto;
	& > p {
		padding-top: 1.6rem;
		padding-bottom: 1.6rem;
	}
	@media (max-width: 25em) {
		width: 80vw;
	}
`;
const BackgroundTitle = styled.h2`
	padding-top: 12.8rem;
`;
const Divider = styled.div`
	height: 1px;
	background-color: black;
`;
const CopyRightText = styled.p`
	text-align: right;
`;

const KnowledgeBakgrund = () => {
	return (
		<Container>
			<Content>
				<BackgroundTitle data-aos="fade-up">Bakgrund</BackgroundTitle>
				<p data-aos="fade-up">
					Tillsammans med en kursare skapade vi en plattform där företag kan
					dela sina kunskaper.
				</p>
				<Divider data-aos="fade-up"></Divider>
				<CopyRightText data-aos="fade-up">
					© Jakob Kitzing & Mats Kullerstrand
				</CopyRightText>
			</Content>
		</Container>
	);
};

export default KnowledgeBakgrund;
