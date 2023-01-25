import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>
					Portfolio <br /> Jakob Kitzing
				</h2>
				<div className={styles.links}>
					<Link href="/" passHref={true}>
						<p>Projects</p>
					</Link>
					<Link href="/about" passHref={true}>
						<p>About</p>
					</Link>
				</div>
				<div className={styles.email}>
					<p>
						Contact: <br />
						Jakob.Kitzing@gmail.com
					</p>
				</div>
				<div className={styles.socialMedia}>
					<Link
						href="https://se.linkedin.com/in/jakob-kitzing-27b4991b7"
						passHref={true}
					>
						<a target="_blank">
							<div className={styles.social}>
								<Image
									width="100%"
									height="100%"
									layout="responsive"
									objectFit="contain"
									src="/footer/linkedin.svg"
									alt="LinkdIn logo"
								/>
							</div>
						</a>
					</Link>
					<Link
						href="https://www.instagram.com/jakobkitzing/?hl=en"
						passHref={true}
					>
						<a target="_blank">
							<div className={styles.social}>
								<Image
									width="100%"
									height="100%"
									layout="responsive"
									objectFit="contain"
									src="/footer/instagram.svg"
									alt="Intagram logo"
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
			<p className={styles.copyRight}>
				This portfolio was created with React/Next.js
				<br />© 2021 Jakob Kitzing
			</p>
		</div>
	);
};
export default Footer;
