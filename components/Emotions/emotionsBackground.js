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
				<BackgroundTitle data-aos="fade-up">Background</BackgroundTitle>
				<p data-aos="fade-up">
					I have always been afraid of flying, ever since I was a child. One
					sentence I've heard thousands of times is, "Why are you afraid? It's
					much more dangerous to travel by car than by plane." In the Design for
					User Experience course, I chose to design an app to critique precisely
					this statement. The idea behind the project was to create a
					provocative app to clarify what it really means when one uses
					horrifying statistics to prove a point.
					<br />
					<br />
					Note: Take the app with a pinch of salt; its purpose is to be
					provocative.
				</p>
				{/* <Divider data-aos="fade-up"></Divider> */}
			</Content>
		</Container>
	);
};

export default EmotionBakgrund;
