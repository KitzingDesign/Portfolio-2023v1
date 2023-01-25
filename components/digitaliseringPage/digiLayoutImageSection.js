import styles from "./digiLayoutImageSection.module.css";
import Divider from "../UI/divider";
import Image from "next/image";

const DigiLayoutImageSection = (props) => {
	return (
		<div data-aos="new-animation">
			<div className={styles.container}>
				<div data-aos="new-animation">
					<Divider />
				</div>

				<Image
					width="100%"
					height="80%"
					layout="responsive"
					objectFit="contain"
					src={`/kry-stor/${props.img}.png`}
					alt="Time Line"
				/>
			</div>
		</div>
	);
};
export default DigiLayoutImageSection;
