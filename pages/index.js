import EmotionsSections from "../components/homePage/emotions";
import KnowledgeSections from "../components/homePage/knowledgeSection";
import HomeHeader from "../components/homePage/homeHeader";
import KandidatarbeteSection from "../components/homePage/kandidatarbeteSection";
import KrySection from "../components/homePage/digitaliseringSection";
import ProsexSection from "../components/homePage/prosexSection";
import styles from "./index.module.css";
import WithTransition from "../components/HOC/withTransition";

import React from "react";

import "aos/dist/aos.css";

import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

const anchors = [
	"firstPage",
	"secondPage",
	"thirdPage",
	"fourthPage",
	"fifthPage",
	"sixthPage",
];

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
			render={({ state, fullpageApi }) => {
				console.log("render prop change", state, fullpageApi);

				return (
					<div className={styles.wrapper}>
						<div className="section ">
							<HomeHeader />
						</div>
						<div className="section">
							<KnowledgeSections />
						</div>
						<div className="section">
							<EmotionsSections />
						</div>
						<div className="section">
							<KandidatarbeteSection />
						</div>
						<div className="section">
							<KrySection />
						</div>
						<div className="section">
							<ProsexSection />
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
