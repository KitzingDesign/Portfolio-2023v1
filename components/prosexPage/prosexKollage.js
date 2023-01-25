import styles from "./prosexKollage.module.css";

import Cards from "./cards";
import { Fragment } from "react";
import Image from "next/image";

const ProsexKollage = () => {
	return (
		<Fragment>
			<div className={styles.svgContainer}>
				<div className={styles.svg}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src="/prosex/stripes-2-02.svg"
						alt="background stripes"
					></Image>
				</div>
			</div>
			<div className={styles.grid}>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/pubrunda-karta.jpg"
						alt={"Pubrunda Chalmers Poster"}
						width="100"
						height="80"
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/sommarsits.jpg"
						alt={"Sommarsittning Teknisk Design Poster"}
						width="100"
						height="67"
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/fly-me.jpg"
						alt={"CM sittning Poster"}
						width="100"
						height="84"
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/toast-mockup.jpg"
						alt={"ET-raj Poster"}
						width="100"
						height="100"
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/under-ytan.jpg"
						alt={"ET-raj Poster"}
						width="100"
						height="75.5"
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/starwars.jpg"
						alt={"prosex."}
						width="100"
						height="86"
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default ProsexKollage;
