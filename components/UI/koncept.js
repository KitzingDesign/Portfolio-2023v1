import styles from "./koncept.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
const Koncept = (props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.titel}>{props.titel}</h2>

			<Zoom>
				<div className={styles.img}>
					<Image
						width={1000}
						height={700}
						src={props.img}
						alt="koncept"
						loading="eager"
					></Image>
				</div>
			</Zoom>
		</div>
	);
};

export default Koncept;
