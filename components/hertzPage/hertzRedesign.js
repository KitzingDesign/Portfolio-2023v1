import { useRef } from "react";
import styles from "./hertzRedesign.module.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HertzRedesign = () => {
	const [ref, isVisible] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	return (
		<div className={styles.container}>
			<div
				className={
					isVisible ? `${styles.carSvg} ${styles.animation}` : styles.carSvg
				}
				ref={ref}
			>
				<Image
					width={1000}
					height={800}
					layout="responsive"
					objectFit="contain"
					src="/Car-rental/car.svg"
					alt="Tiny Car"
					id="car"
				/>
			</div>
			<div className={styles.profilImg}>
				<Image
					width="100%"
					height="28%"
					layout="responsive"
					objectFit="contain"
					src="/Car-rental/redesign.svg"
					alt="Redesign Header"
				/>
			</div>
		</div>
	);
};

export default HertzRedesign;
