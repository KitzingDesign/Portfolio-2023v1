import ProsexHeader from "../../components/prosexPage/prosexHeader";
import WithTransition from "../../components/HOC/withTransition";
import { Fragment, useEffect } from "react";
import OmProsex from "../../components/prosexPage/omProsex";
import ProsexKollage from "../../components/prosexPage/prosexKollage";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import { motion } from "framer-motion";

const ProsexPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>prosex.</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ProsexHeader />
			<OmProsex />
			<ProsexKollage />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(ProsexPage);
