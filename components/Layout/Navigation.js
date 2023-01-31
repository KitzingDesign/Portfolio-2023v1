import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navigation.module.css";

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menu, setMenu] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;

		if (offset > 300) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	useEffect(() => {
		const path = window.location.href;
		const lastOfPath = path.substr(path.lastIndexOf("/") + 1);
		if ((lastOfPath = "about")) {
			console.log(lastOfPath);
		}
		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleMenu = () => {
		if (!menu) {
			setMenu(true);
		} else if (menu) {
			setMenu(false);
		}
	};
	return (
		<nav className={scrolled ? styles.sticky : styles.unSticky}>
			<div className={styles.container}>
				<Link href="/" passHref={true}>
					<div
						className={
							menu
								? `${styles.containerAnimationIn} ${styles.img}`
								: `${styles.containerAnimationOut} ${styles.img}`
						}
					>
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 251.78 231.31"
						>
							<path
								d="M89.05.48h43.14V158.25c0,22.36-4.07,44.38-16.37,56.31s-30.24,17.23-49.13,17.23c-23.93,0-65.5-6.31-65.5-61.56l42.2.31c0,13.15,10.49,19.59,22.46,19.59,13,0,23.2-8.25,23.2-24.63Z"
								transform="translate(-1.19 -0.48)"
							/>
							<path
								d="M129.83,133.54l62-69h52.28l-71.8,80.3L253,231.79H201l-71.17-77.15Z"
								transform="translate(-1.19 -0.48)"
							/>
						</svg>
					</div>
				</Link>
				<nav
					className={
						menu
							? `${styles.mainNav} ${styles.navVisible}`
							: `${styles.mainNav} ${styles.navInvisible}`
					}
				>
					<ul>
						<Link href="/" passHref={true}>
							<p className={styles.link} onClick={() => handleMenu()}>
								PROJECTS
							</p>
						</Link>
						<Link href="/about" passHref={true}>
							<p className={styles.link} onClick={() => handleMenu()}>
								ABOUT
							</p>
						</Link>
					</ul>
				</nav>
				<div className={styles.mobileNav}>
					<FiMenu
						name="menu"
						color={"#00000"}
						size={25}
						onClick={() => handleMenu()}
						className={menu ? `${styles.mobileNavMenu}` : null}
					/>

					<FiX
						name="close"
						color={"#00000"}
						size={25}
						onClick={() => handleMenu()}
						className={menu ? null : `${styles.mobileNavMenu} `}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
