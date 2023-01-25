import styles from "./hertzBakgrund.module.css";
import Image from "next/image";
import styled from "@emotion/styled";

const Container = styled.div`
	max-width: 100vw;
	margin: 0 auto;
	background-color: black;
	color: white;
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
	background-color: white;
`;
const CopyRightText = styled.p`
	text-align: right;
`;
const ProcessTitle = styled.h2`
	text-align: center;
	padding-top: 4.8rem;

	padding-bottom: 6.4rem;
`;
const ProfileImg = styled.div`
	width: 100%;
	padding-bottom: 12.8rem;
`;

const HertzBakgrund = () => {
	return (
		<Container>
			<Content>
				<BackgroundTitle data-aos="fade-up">Bakgrund</BackgroundTitle>
				<p data-aos="fade-up">
					Tillsammans med fyra kursare fick vi i uppdrag att utvärdera och
					förbättra gränssnittet för biluthyrningsföretags hemsida. Genom att
					analysera den befintliga hemsidan ur ett usability perspektiv skapades
					en ny prototyp som ställdes emot den befintliga sidan. Nedan kan en
					sammanfattning av processen ses.
				</p>
				<Divider data-aos="fade-up"></Divider>
				<CopyRightText data-aos="fade-up">
					© Kitzing Dexner Neidert Kristoffersson Sandberg
				</CopyRightText>
				<ProcessTitle data-aos="fade-up">Process</ProcessTitle>
				<ProfileImg>
					<Image
						width="100%"
						height="19%"
						layout="responsive"
						objectFit="contain"
						src="/bilCompany/bil-timeline.png"
						alt="Time Line"
						data-aos="fade-right"
					/>
				</ProfileImg>
			</Content>
		</Container>
	);
};

export default HertzBakgrund;
