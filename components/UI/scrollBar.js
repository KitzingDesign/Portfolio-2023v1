import { Link } from "react-scroll";

import styles from "./scrollBar.module.css";

const ScrollBar = () => {
	return (
		<div className={styles.container}>
			<Link
				activeClass="active"
				to="Header"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				<div className={styles.boll}></div>
			</Link>
			<Link
				activeClass="active"
				to="Hertz"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				<div className={styles.boll}></div>
			</Link>
			<Link
				activeClass="active"
				to="Kandidat"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				<div className={styles.boll}></div>
			</Link>
			<Link
				activeClass="active"
				to="Kry"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				<div className={styles.boll}></div>
			</Link>
			<Link
				activeClass="active"
				to="Prosex"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				<div className={styles.boll}></div>
			</Link>
		</div>
	);
};

export default ScrollBar;
