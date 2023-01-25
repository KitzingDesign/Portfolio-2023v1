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
	font-style: italic;
	color: black;

	text-decoration: none;
	border-radius: 6px;
	cursor: pointer;
	&:hover {
		color: gray;
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
