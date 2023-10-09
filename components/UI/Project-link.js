import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

import styles from "./Project-link.module.css";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	align-items: center;
	font-style: italic;
	&:hover {
		color: gray;
		cursor: pointer;
	}
`;
const TheLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: inline-block;
	font-size: 1.6rem;
	border: none;
	color: white;
	padding: 1.2rem 1.8rem;
	background-color: black;

	text-decoration: none;
	border-radius: 6px;
	cursor: pointer;

	&:hover {
		border: solid black 0.2rem;
		padding: 1rem 1.6rem;
		background: white;
		color: black;
		cursor: pointer;
	}
`;

const Arrow = styled(ArrowRightIcon)`
	height: 2.4rem;
	margin-left: 1rem;
	}
`;

const ProjectLink = (props) => {
	return (
		<Container>
			<Link href={props.link} passHref={true}>
				<TheLink>
					<p>Utforska Projektet</p> <Arrow />
				</TheLink>
			</Link>
		</Container>
	);
};

export default ProjectLink;
