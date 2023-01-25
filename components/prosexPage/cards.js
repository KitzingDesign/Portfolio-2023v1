import styles from "./cards.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const Cards = (props) => {
	return (
		<Zoom>
			<div className={styles.card}>
				<Image
					width={`${props.width}%`}
					height={`${props.height}%`}
					layout="responsive"
					objectFit="contain"
					style={{ width: "100%" }}
					src={props.url}
					alt={props.alt}
				/>
			</div>
		</Zoom>
	);
};
export default Cards;
