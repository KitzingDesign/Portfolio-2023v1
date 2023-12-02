import { Fragment } from "react";
import Divider from "../UI/divider";

import styles from "./kandidatarbeteSlutkoncept.module.css";
import SolutionOne from "./sections/solutionOne";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Kollage from "./sections/kollage";
import Image from "next/image";

const KandidatarbeteSlutkocept = () => {
	return (
		<Fragment>
			<div className={styles.containerUpper}>
				<div className={styles.textContainer}>
					<h2 data-aos="fade-up">Slutkoncept</h2>
					<div className={styles.divider} data-aos="fade-up"></div>
					<p data-aos="fade-up">
						The Arc är en modern arbetsplats som är anpassad efter smältarens
						behov. Arbetsplatsen möjliggör att smältaren på ett enkelt och
						ergonomiskt sätt kan växla mellan sina olika arbetsuppgifter,
						samtidigt som det tillåter en varierad arbetsställning. The Arc
						medger även möjlighet att lämna sin arbetsplats för måltider och
						raster samt att smältarna kan samarbeta och utbyta lärdomar.
					</p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							width="100%"
							height="56%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Hero-bild.webp"
							alt="The Arc"
						/>
					</div>

					<div className={styles.frame}>
						<h1>The Arc</h1>
					</div>
				</div>
				<SolutionOne
					titel="Smutshantering"
					divider="dividerR"
					urlFirst="above-view"
					firstTitel="Layout"
					firstText="Layouten av arbetsplatsen är uppbyggd i två sektioner med fyra arbetsplatser i varje. Detta för att främja kommunikationen mellan smältarna samtidigt som det möjliggör en lugn miljö. Den segregerade platsen i kontrollrummet och det minskade stimmet kommer i sin tur leda till att mindre smuts om damm dras in."
					urlSecond="bar-view"
					secondTitel="Bardisk"
					secondText="Bredvid varje arbetsplats finns även en bardisk så att andra arbetspositioner lätt ska kunna kommunicera med smältaren utan att behöva klampa in. Detta resulterar även i sin tur i en minskat smuts indrag."
					alt="Smutshantering"
				/>
				<SolutionOne
					titel="Närhet till Ugn"
					divider="dividerL"
					urlFirst="screens-view"
					firstTitel="Visuell Representation"
					firstText="För att skapa en närhet till ugnen trotts det ökade avståndet utökades antalet övervakningsskärmar så att smältaren enkelt kan ha överseende över platsen."
					urlSecond="screen-view"
					secondTitel="NTU-Skärm"
					secondText="Utöver videoövervakning finns även en närhet till ugn (NTU) skärm. Skärmen presenterar ugnens tillstånd för att smältaren ska kunna uppfatta samma indikationer som i dagsläget. "
					alt="närhet Till ugn"
				/>
				<SolutionOne
					titel="Kommunikation"
					divider="dividerR"
					urlFirst="hang-view"
					firstTitel="Bardisk"
					firstText="Bardisken är inte bara ett skydd för smuts, den är också en enkel väg till kommunikation. Genom bardisken kan andra arbetspositioner smidigt svänga förbi och prata med smältaren."
					urlSecond="headphones-view"
					secondTitel="Hörlurar"
					secondText="Hörlurarna är till för att enkelt kunna kommunicera med andra arbetspositioner när de befinner sig på en annan plats."
					alt="Kommunikation"
				/>
				<SolutionOne
					titel="Larm och säkerhet"
					divider="dividerL"
					urlFirst="speaker-view"
					firstTitel="Visuellt"
					firstText="För att visuellt representera pågående larm finns bland annat två ledslingor på en panel som står på skrivbordet. Vilket larm som utlösts representeras även på skärmarna."
					urlSecond="clock-view"
					secondTitel="Haptiskt"
					secondText="För att smältaren, oavsett om hen är vid arbetsplatsen eller inte, ska kunna uppfatta pågående larm finns en smartwatch som indikerar att ett larm har gått. Detta för att smältaren alltid ska vara uppmärksam på vad som sker."
					alt="Larm och säkerhet"
				/>
			</div>
			<div className={styles.container}>
				<h2 data-aos="fade-up">Styrning</h2>
				<Divider color="black" />
				<p data-aos="fade-up">
					Styrreglagen för satsmaskinerna sitter på ett styrbord, vilket enkelt
					går att skjuta i sidledes längst en skena placerad på undersidan
					bordet. Detta är för att smältaren ska kunna använda tangentbordet
					bakom styrbordet utan att behöva hänga över det. Självaste styrningen
					i sig är snarlik den befintliga styrningen, men reglagen är
					omorganiserade för att skapa en mer ergonomisk arbetsposition.
				</p>
				<div className={styles.styrContainer} data-aos="fade-up">
					<Zoom>
						<div className={styles.imgStyr}>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src={"/Kandidat/solutions/styr-view.webp"}
								alt="controls"
							/>
						</div>
					</Zoom>
					<Zoom>
						<div className={styles.imgStyr}>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src={"/Kandidat/solutions/styrbord-view.webp"}
								alt="Controls placing"
							/>
						</div>
					</Zoom>
				</div>
			</div>
			<div className={styles.kollageContainer}>
				<h2 data-aos="fade-up">Lärdomar</h2>
				<Divider color="black" />
				<p data-aos="fade-up">
					Att få jobba i ett omfattande projekt där man alltid var tvungen att
					förhålla sig till de andra aktörerna var otroligt lärorikt. Även om
					det resulterade i att vi många gånger va tvugna att kompromissa och
					tänka om vidgade det ens vyer kring hur riktiga projket går till.
					Ingen designprocess är den andra lik, det kommer alltid finns olika
					problem att tackla, vägen till sluprodukten kommer aldrig vara rak.
					Men det är just det som får mig att brinna för detta, att man alltid
					måste ha ett öppet sinne.
				</p>
				<div className={styles.kollage}>
					<Kollage />
				</div>
			</div>
		</Fragment>
	);
};

export default KandidatarbeteSlutkocept;
