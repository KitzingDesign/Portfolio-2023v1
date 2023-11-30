import EmotionHeader from "../../components/Emotions/emotionsHeader";
import styles from "./index.module.css";
import { Fragment, useEffect } from "react";
import Navigation from "../../components/Layout/Navigation";
import HertzBakgrund from "../../components/hertzPage/hertzBakgrund";
import EmotionsContent from "../../components/Emotions/emotionsContent";
import HertzNew from "../../components/hertzPage/hertzNew";
import withTransition from "../../components/HOC/withTransition";
import BilResults from "../../components/hertzPage/bilResults";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import EmotionBakgrund from "../../components/Emotions/emotionsBackground";

//emotion styles
const Sticky = styled.p`
	writing-mode: tb-rl;
	bottom: 1%;
	left: 1%;
	position: fixed;
	text-transform: uppercase;
`;

const EmotionPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Calmifly</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Sticky>Design for User Experience - IxD Chalmers - 2023</Sticky>

			<EmotionHeader />
			<EmotionBakgrund />
			<EmotionsContent />

			<Footer />
		</Fragment>
	);
};
export default withTransition(EmotionPage);
