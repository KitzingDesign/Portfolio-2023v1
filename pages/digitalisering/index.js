import { Fragment, useEffect } from "react";
import BoiSection from "../../components/digitaliseringPage/boiSection";
import DigiBakgrund from "../../components/digitaliseringPage/digiBakgrund";
import DigiHeader from "../../components/digitaliseringPage/digiHeader";
import DigiLayoutImageSection from "../../components/digitaliseringPage/digiLayoutImageSection";
import WithTransition from "../../components/HOC/withTransition";

import AOS from "aos";
import Footer from "../../components/Layout/footer";
import Head from "next/head";
import { motion } from "framer-motion";

const KryPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Digitalisering</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<DigiHeader />

			<DigiBakgrund />

			<DigiLayoutImageSection img="eldler-stor-logga" />

			<DigiLayoutImageSection img="jury-arm" />
			<DigiLayoutImageSection img="ely-stor-logga" />
			<DigiLayoutImageSection img="gyno" />
			<BoiSection />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(KryPage);
