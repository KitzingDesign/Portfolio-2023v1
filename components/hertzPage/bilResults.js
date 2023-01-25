import styles from "./bilResults.module.css";
import Image from "next/image";

const BilResults = () => {
	return (
		<div className={styles.container}>
			<h2 data-aos="fade-up">Resultat</h2>
			<p>
				Den nya prototypen utvärderades även den av 7 nya intervjuvobjekt. För
				att konkretisera reultatet dokumenterades både tiden som användaren
				befann sig på respektive del samt antal klick användaren behövde för att
				uppnå de efterfrågade målet. Nedan presenteras resultatet från både den
				nya hemsidan samt den gamla.{" "}
			</p>

			<div className={styles.text}>
				<h3 data-aos="fade-up">Antal klick orginal vs prototyp</h3>
				<p data-aos="fade-up">
					I figurerna nedan jämförs medianvärdet för antalet klick för varje
					delsteg mellan de två prototyperna. Ur grafen syns hur antalet klick
					minskat på samtliga steg utom på stegen bilval och betalning. De
					totala antalet klick minskade från 65st till 56st, en procentuell
					minskning motsvarande cirka 12%.
				</p>
			</div>
			<div className={styles.grid} data-aos="fade-up">
				<Image
					width={1000}
					height={1000}
					src="/bilCompany/grafer-01.svg"
					alt="graf"
				/>
				<Image
					width={1000}
					height={1000}
					src="/bilCompany/grafer-04.svg"
					alt="graf"
				/>
			</div>
			<div className={styles.text} data-aos="fade-up">
				<h3 data-aos="fade-up">Total tid orginal vs prototyp</h3>
				<p data-aos="fade-up">
					I figurerna ser man hur tiden som användarna behövde för att lösa
					uppgiften minskade på samtliga steg utom på bilval och tillval som
					förblev densamma. Trots att antalet klick ökade på bilvalsdelen
					förblev tiden densamma. Största skillnaden i förbrukad tid syntes
					främst vid hemsidans förstasida, “Resplan”. Där minskade tiden från
					fyra minuter till drygt en minut. Den högra figuren visar hur den
					totala tiden för att boka en bil halverades från cirka 14 minuter till
					7 minuter.
				</p>
			</div>
			<div className={styles.grid} data-aos="fade-up">
				<Image
					width={1000}
					height={1000}
					src="/bilCompany/grafer-02.svg"
					alt="graf"
				/>
				<Image
					width={1000}
					height={1000}
					src="/bilCompany/grafer-03.svg"
					alt="graf"
				/>
			</div>
			<div className={styles.text} data-aos="fade-up">
				<h2 data-aos="fade-up">Slutsats</h2>
				<p data-aos="fade-up">
					Genom att jämföra de två prototyperna går det att se en tydlig
					föbättring. Vår slutsats med arbetet är att det egentligen inte är
					antalet klick som påverkar uppfattningen av en hemsida. Det viktigaste
					är att användaren känner att hen alltid har kontroll över sin bokning,
					vilket underlättas av en tydlig röd tråd genom sidan samt en möjlighet
					att alltid se uppgifterna kring den pågående bokningen.
				</p>
			</div>
		</div>
	);
};

export default BilResults;
