import styles from "./app.module.css";
import Image from "next/image";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	@media (max-width: 51em) {
		gap: 2rem;
	}
`;
const Text = styled.div`
	color: white;
	font-size: 4.8rem;
	text-align: left;
	margin-bottom: 1.2rem;
	@media (max-width: 51em) {
		font-size: 3.6rem;
		margin-bottom: 0rem;
	}
`;
const App = (props) => {
	return (
		<Container>
			<Image width={1000} height={1000} src={props.url} alt={props.alt} />
			<div>
				<Text>{props.header}</Text>
			</div>
		</Container>
	);
};

export default App;
