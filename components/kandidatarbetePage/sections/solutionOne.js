import KandRender from "./kandRender";
import KandText from "./KandText";
import styles from "./solutionOne.module.css";
import { useInView } from "react-intersection-observer";

const SolutionOne = (props) => {
	const [ref, isVisible] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [refTwo, isVisibleTwo] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	return (
		<div className={styles.textContainer}>
			<h2>{props.titel}</h2>
			<div
				className={
					props.divider === "dividerR"
						? isVisible
							? `${styles[props.divider]} ${styles.animationR}`
							: styles[props.divider]
						: isVisible
						? `${styles[props.divider]} ${styles.animationL}`
						: styles[props.divider]
				}
				ref={ref}
			></div>

			<div className={styles.flex}>
				<div className={styles.imgContainer}>
					<KandRender url={`${props.urlFirst}`} />
				</div>
				<div
					className={
						isVisible
							? `${styles.smutsAbove} ${styles.animationR}`
							: styles.smutsAbove
					}
				>
					<div className={isVisible ? styles.animationText : null}>
						<KandText
							titel={`${props.firstTitel}`}
							text={`${props.firstText}`}
						/>
					</div>
				</div>
			</div>
			<div className={styles.flex}>
				<div
					className={
						isVisibleTwo
							? `${styles.smutsAvg} ${styles.animationStroke}`
							: styles.smutsAvg
					}
					ref={refTwo}
				>
					<div className={isVisibleTwo ? styles.animationText : null}>
						<KandText
							titel={`${props.secondTitel}`}
							text={`${props.secondText}`}
						/>
					</div>
				</div>
				<div className={styles.imgContainer}>
					<KandRender url={`${props.urlSecond}`} alt={props.alt} />
				</div>
			</div>
		</div>
	);
};
export default SolutionOne;
