import KnowledgeHeader from "../../components/knowledgeSharingPage/knowledgeHeader";
import { Fragment, useEffect } from "react";
import KnowledgeBakgrund from "../../components/knowledgeSharingPage/knowledgeBackground";

import withTransition from "../../components/HOC/withTransition";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import styled from "@emotion/styled";
import KnowledgeContent from "../../components/knowledgeSharingPage/knowledgeContent";

//emotion styles
const Sticky = styled.p`
	writing-mode: tb-rl;
	bottom: 1%;
	left: 1%;
	position: fixed;
	text-transform: uppercase;
`;

const HertzPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Knowledge Sharing</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Sticky>Individual Project - Ixd - 2023</Sticky>

			<KnowledgeHeader />
			<KnowledgeBakgrund />

			<KnowledgeContent />
			<Footer />
		</Fragment>
	);
};
export default withTransition(HertzPage);
