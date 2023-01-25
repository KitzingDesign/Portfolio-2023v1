import Divider from "../UI/divider";
import styles from "./digiBakgrund.module.css";
import Image from "next/image";

const DigiBakgrund = () => {
	return (
		<div className={styles.container} data-aos="new-animation">
			{/* <p className={styles.bakgrund}>Bakgrund</p> */}
			<h2 data-aos="new-animation">Bakgrund</h2>
			<div data-aos="new-animation">
				<Divider />
			</div>

			<p data-aos="new-animation">Hobby Project - Våren 2020</p>

			<section data-aos="new-animation">
				Som alla vet blev våren 2021 inte helt som planerat. Corona knackade på
				dörren och därefter spenderades många timmar i ensamhet. För att inte
				skulle bli helt galen började jag göra lite småprojekt för att ha något
				att pilla med utöver studierna. Detta resulterade i skapandet av fem nya
				virtuella företag. Vi lever idag i en tid där fysisk kontakt börjar
				bytas ut, speciellt under pandemin, något som jag både ser för och
				nackdelar med. Detta fick mig att fundera, hur långt kan man egentligen
				dra det? <br />
				<br />
				&#34;Företagen&#34; nedan är skapade av mig för att leka med tanken på
				hur långt viritualiseringen kan gå innan det blir orimligt. Projektet är
				även till för att ge en tankeställare, hur mycket går egentligen
				förlorat när man digitaliserar den mänsklig kontakten?
			</section>

			<h3 data-aos="new-animation">Featured Companies</h3>
			<div data-aos="new-animation">
				<div className={styles.flexImg}>
					<div className={styles.imgBox}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Loggor-namn/Eldler-namn.svg"
							alt="Eldler"
						/>
					</div>
					<div className={styles.imgBox}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Loggor-namn/Jury-namn.svg"
							alt="Jury"
						/>
					</div>
					<div className={styles.imgBox}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Loggor-namn/Boi-namn.svg"
							alt="Boi"
						/>
					</div>
					<div className={styles.imgBox}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Loggor-namn/Ely-namn.svg"
							alt="Ely"
						/>
					</div>
					<div className={styles.imgBox}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Loggor-namn/Gyno-namn.svg"
							alt="Time Line"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DigiBakgrund;
