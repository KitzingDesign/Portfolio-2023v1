import { Fragment, useEffect } from "react";
import KandidatarbeteBakgrund from "../../components/kandidatarbetePage/KandidatarbeteBakgrund";
import KandidatarbeteSmalter from "../../components/kandidatarbetePage/KandidadarbeteSmalter";
import KandidatarbeteHeader from "../../components/kandidatarbetePage/kandidatarbeteHeader";
import KandidatarbeteProblem from "../../components/kandidatarbetePage/kandidatarbeteProblem";
import KandidatarbeteKoncept from "../../components/kandidatarbetePage/kandidatarbeteKoncept";
import KandidatarbeteSlutkocept from "../../components/kandidatarbetePage/kandidatarbeteSlutkoncept";
import WithTransition from "../../components/HOC/withTransition";
import Footer from "../../components/Layout/footer";

import styles from "./index.module.css";
import AOS from "aos";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { motion } from "framer-motion";

const KandidatarbetePage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div>
			<Head>
				<title>Kontrollrum</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<KandidatarbeteHeader />
			<KandidatarbeteBakgrund />
			<KandidatarbeteProblem />
			<KandidatarbeteKoncept />
			<KandidatarbeteSmalter />
			<KandidatarbeteSlutkocept />
			<Footer />
		</div>
	);
};

export default WithTransition(KandidatarbetePage);
