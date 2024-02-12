import Divider from "../UI/divider";
import styles from "./digiBakgrund.module.css";
import Image from "next/image";

const DigiBakgrund = () => {
	return (
		<div className={styles.container} data-aos="new-animation">
			{/* <p className={styles.bakgrund}>Bakgrund</p> */}
			<h2 data-aos="new-animation">Background</h2>
			<div data-aos="new-animation">
				<Divider />
			</div>

			<p data-aos="new-animation">Hobby Project - Spring 2020</p>

			<section data-aos="new-animation">
				As everyone knows, spring 2021 didn&apos;t turn out entirely as planned.
				The pandemic knocked on the door, and many hours were subsequently spent
				in solitude. To prevent myself from going completely crazy, I started
				working on some small projects to have something to do alongside my
				studies. This resulted in the creation of five new virtual companies. We
				&apos;re living in a time where physical contact is starting to be
				replaced, especially during the pandemic, something that I see both
				advantages and disadvantages to. This made me wonder, how far can one
				really take it? <br />
				<br />
				The &quot;companies&quot; below are created by me to play with the idea
				of how far virtualization can go before it becomes unreasonable. The
				project is also intended to provoke some thought; how much is really
				lost when you digitalize human interactions?
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
