import HertzSection from "../components/homePage/hertzSection";
import EmotionsSections from "../components/homePage/emotions";
import KnowledgeSections from "../components/homePage/knowledgeSection";

import HomeHeader from "../components/homePage/homeHeader";
import KandidatarbeteSection from "../components/homePage/kandidatarbeteSection";
import KrySection from "../components/homePage/digitaliseringSection";
import ProsexSection from "../components/homePage/prosexSection";
import Footer from "../components/Layout/footer";
import styles from "./index.module.css";
import WithTransition from "../components/HOC/withTransition";

import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import Aos from "aos";
import "aos/dist/aos.css";
import { TimelineLite } from "gsap";

//imports that makes slide-fullpage function
// import { FullPage, Slide } from "react-full-page";

import ReactFullpage from "@fullpage/react-fullpage";
import Navigation from "../components/Layout/Navigation";
import TextLoop from "../components/UI/textLoop";
import Nav from "../components/Layout/Navigation";
import Head from "next/head";

const anchors = ["firstPage", "2", "thirdPage", "fourthPage", "fifthPage"];
let fadeS1,
	fadeS2,
	fadeS3,
	fadeS4,
	fadeS5,
	fadeS6 = false;

const HomePage = () => (
	<div>
		<Head>
			<title>Projects</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
		<ReactFullpage
			licenseKey="21BAFFA2-6D8141A7-AAF0A8AC-A0B24480"
			anchors={anchors}
			navigation={true}
			animateAnchor={false}
			onLeave={function (origin, destination) {
				if (destination.index === 1) {
					// const r = document.querySelector(":root");
					// r.style.setProperty("--color", "#fed000");

					fadeS1 = true;
				} else if (destination.index === 2) {
					// const r = document.querySelector(":root");
					// r.style.setProperty("--color", "#c0d1c5");

					fadeS2 = true;
				} else if (destination.index === 3) {
					// const r = document.querySelector(":root");
					// r.style.setProperty("--color", "#e38547");
					fadeS3 = true;
				} else if (destination.index === 4) {
					fadeS4 = true;
				}
			}}
			render={({ state, fullpageApi }) => {
				console.log("render prop change", state, fullpageApi);
				// if (destination.index === 1) {
				// 	color = "yellow";
				// } else if (destination.index === 2) {
				// 	fadeS2 = true;
				// } else if (destination.index === 3) {
				// 	fadeS3 = true;
				// } else if (destination.index === 4) {
				// 	fadeS4 = true;
				// }
				// eslint-disable-line no-console

				return (
					<div className={styles.wrapper}>
						<div className="section ">
							<HomeHeader />
						</div>
						<div className={`section `} id="1">
							<KnowledgeSections fade={fadeS1} />
						</div>
						<div className={`section  `} id="1">
							<EmotionsSections fade={fadeS2} />
						</div>
						<div className={`section sectionOne `}>
							<HertzSection fade={fadeS3} />
						</div>
						<div className="section">
							<KandidatarbeteSection fade={fadeS4} />
						</div>
						<div className="section">
							<KrySection fade={fadeS5} />
						</div>
						<div className="section">
							<ProsexSection fade={fadeS6} />
						</div>
					</div>
				);
			}}
		/>
	</div>
);
export default WithTransition(HomePage);

{
	/* <div id="fullpage">
			<div data-anchor="slide1">
				<HomeHeader />
			</div>
			<div data-anchor="slide2">
				<HertzSection />
			</div>
			<KandidatarbeteSection data-anchor="slide3" />
			<KrySection data-anchor="slide4" />
			<ProsexSection data-anchor="slide5" />
		</div> */
}

// gammal kod
// 	<div className={styles.container}>
// 		<ScrollBar />
// 		<section className={styles.section}>
// 			<HomeHeader />
// 		</section>
// 		<section className={styles.section}>
// 			<HertzSection />
// 		</section>
// 		<section className={styles.section}>
// 			<KandidatarbeteSection />
// 		</section>
// 		<section className={styles.section}>
// 			<KrySection />
// 		</section>
// 		<section className={styles.section}>
// 			<ProsexSection />
// 		</section>
// 	</div>
//
