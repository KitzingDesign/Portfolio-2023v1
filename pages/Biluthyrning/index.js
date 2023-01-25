import HertzHeader from "../../components/hertzPage/hertzHeader";
import styles from "./index.module.css";
import { Fragment, useEffect } from "react";
import Navigation from "../../components/Layout/Navigation";
import HertzBakgrund from "../../components/hertzPage/hertzBakgrund";
import HertzRedesign from "../../components/hertzPage/hertzRedesign";
import HertzOld from "../../components/hertzPage/hertzOld";
import HertzNew from "../../components/hertzPage/hertzNew";
import withTransition from "../../components/HOC/withTransition";
import BilResults from "../../components/hertzPage/bilResults";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

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
				<title>Car Rental</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Sticky>Usability - Teknisk Design Chalmers - 2020</Sticky>

			<HertzHeader />
			<HertzBakgrund />
			<HertzOld />
			<HertzRedesign />
			<HertzNew />
			<BilResults />
			<Footer />
		</Fragment>
	);
};
export default withTransition(HertzPage);
