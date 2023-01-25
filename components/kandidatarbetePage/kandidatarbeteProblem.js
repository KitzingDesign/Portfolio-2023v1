import Divider from "../UI/divider";
import TextcontainerKand from "../UI/textcontainerKand";
import styles from "./kandidatarbeteProblem.module.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const KandidatarbeteProblem = () => {
	const [ref, isVisible] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	return (
		<div className={styles.container}>
			<div
				className={
					isVisible ? `${styles.green} ${styles.animation}` : styles.green
				}
				ref={ref}
			>
				<div
					className={
						isVisible
							? `${styles.greenContent} ${styles.fade}`
							: styles.greenContent
					}
				>
					<div className={styles.heading}>
						<h2>Problemområden</h2>
						<p>
							För att förstå arbetssituationen som smältare utfördes olika
							datainsamlingsmetoder som därefter analyserades. De som utfördes
							var en digital rundvandring, en pilotintervju med en skiftledaren
							som förut varit smältare, en marknadsanalys, litteraturstudier
							kring ergonomin inom en arbetsplats och 5 stycken utförliga
							intervjuer med nuvarande smältare. Den insamlade datan
							analyserades och därefter skapades en kravspecifikation. Fyra av
							de viktigaste delarna presenteras nedan.
						</p>
					</div>
					<div className={styles.lists}>
						<TextcontainerKand
							titel="Smuts"
							text="På grund av stor rörelse i kontrolrummet drogs mycket smuts och damm in."
						/>
						<TextcontainerKand
							titel="Närhet till ugn"
							text="En viktig del i arbetet kräver en närhet till ugn, något som måste förbli trots det ökade avståndet"
						/>
						<TextcontainerKand
							titel="Kommunikation med andra Arbetsroller"
							text="Som smältare kommunicerar man aktivt med andra arbetsroller. Det måste vara enkelt att komminucera med varandra"
						/>
						<TextcontainerKand
							titel="Larm och säkerhter"
							text="Ifall ett larm går kan det i vissa fall handla om att man måste aggera inom någon minut, därav krävs en tydlig representation av larmen"
						/>
					</div>
				</div>
			</div>
			<div className={isVisible ? `${styles.img} ${styles.fade}` : styles.img}>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src="/Kandidat/TODO.png"
						alt="To Do List"
					/>
				</div>
			</div>
		</div>
	);
};

export default KandidatarbeteProblem;
