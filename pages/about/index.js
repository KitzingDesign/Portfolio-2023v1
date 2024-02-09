import { Fragment, useEffect } from "react";
import AboutContent from "../../components/AboutPage/aboutContent";
import AboutHeader from "../../components/AboutPage/aboutHeader";
import AOS from "aos";
import { motion } from "framer-motion";

import Footer from "../../components/Layout/footer";
import Head from "next/head";

const AboutPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>About</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<AboutHeader />
			<AboutContent />
			<Footer />
			<motion.div
				className="slide-in"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>
			<motion.div
				className="slide-out"
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>
		</Fragment>
	);
};

export default AboutPage;
