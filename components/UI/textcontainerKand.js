import Divider from "./divider";
import styles from "./textcontainerKand.module.css";

const TextcontainerKand = (props) => {
	return (
		<div className={styles.container}>
			<Divider color="white" />
			<h1>{props.titel}</h1>
			<p>{props.text}</p>
		</div>
	);
};

export default TextcontainerKand;
