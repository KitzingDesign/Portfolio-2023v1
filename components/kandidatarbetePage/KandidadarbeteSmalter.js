import styles from "./kandidatarbeteSmalter.module.css";
import Image from "next/image";

const KandidatarbeteBakgrund = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textConatiner} data-aos="fade-up">
				<h2>Utvärdering</h2>
				<p>
					De tre koncepten utvärderades av smältarna med en enkät. Där framkom
					att koncept A var det konceptet smältarna föredrog. Motiveringarna var
					att konceptet var öppet, tydligt, proffsigt, hade bra lösning med
					krokar för dagsförvaring och ett bra styrbord. Konceptet itererades
					och flera dellösningar från de andra koncepten implementerades. Allt
					tillsammans kom till slut att bli <b>The Arc...</b>
				</p>
			</div>
			<div className={styles.imgContainer} data-aos="fade-up">
				<div className={styles.gifContainer}>
					<Image
						width="100%"
						height="200%"
						layout="responsive"
						objectFit="contain"
						src={`/Smalter-gif-smal.gif`}
						alt="Melter"
					/>
				</div>
			</div>
		</div>
	);
};

export default KandidatarbeteBakgrund;
