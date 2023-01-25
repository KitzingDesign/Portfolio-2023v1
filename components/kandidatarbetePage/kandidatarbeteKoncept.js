import Divider from "../UI/divider";
import Koncept from "../UI/koncept";
import styles from "./kandidatarbeteKoncept.module.css";

const KandidatarbeteKoncept = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.titel} data-aos="fade-up">
				Ideegenerering
			</h2>
			<Divider color="black" data-aos="fade-up" />
			<p className={styles.text} data-aos="fade-up">
				Efter skapandet av en krvlista från de insamlade materialet startede
				idégenereringen. Vi började att ta fram så mycket koncept som möjligt,
				högt och lågt, realistiska och futuristiska, roliga och rimliga. Efter
				detta framställdes tre realistiska lösningar med influenser från olika
				idéer från den tidigare idéskapandet. Dessa går att se nedan.
			</p>
			<div className={styles.koncepts} data-aos="fade-up">
				<Koncept titel="Koncept A" img="/Kandidat/KonceptA.jpg" />
				<Koncept titel="Koncept B" img="/Kandidat/KonceptB.jpg" />
				<Koncept titel="Koncept C" img="/Kandidat/KonceptC.jpg" />
			</div>
		</div>
	);
};
export default KandidatarbeteKoncept;
