import styled from "@emotion/styled";

const Container = styled.div`
	max-width: 100vw;
	margin: 0 auto;
	color: "black";
	}
`;
const Content = styled.div`
	width: 70vw;
	margin: 0 auto;
	& > p {
		padding-top: 1.6rem;
		padding-bottom: 2.4rem;
	}
	@media (max-width: 25em) {
		width: 80vw;
	}
`;
const BackgroundTitle = styled.h2`
	padding-top: 12.8rem;
	@media (max-width: 84em) {
		padding-top: 0rem;
	}
`;

const EmotionBakgrund = () => {
	return (
		<Container>
			<Content>
				<BackgroundTitle data-aos="fade-up">Bakgrund</BackgroundTitle>
				<p data-aos="fade-up">
					Jag har alltid varit rädd för att flyga, ända sedan jag var liten. En
					mening jag har hört tusentals gånger är &ldquo;Varför är du rädd, det
					är mycket farligare att åka bil än att flyga?&rdquo;. I kursen Design
					for user experience valde jag att designa en app för att kritisera
					just denna meningen. Tanken med projektet var att skapa en provokativ
					app, för att förtydliga vad det egenligen betyder när man använder
					fruktansvärd statistik för att prove a point.
					<br />
					<br />
					Obs! Ta appen med en nypa salt, att vara hämsk är hela dess mening.
				</p>
				{/* <Divider data-aos="fade-up"></Divider> */}
			</Content>
		</Container>
	);
};

export default EmotionBakgrund;
