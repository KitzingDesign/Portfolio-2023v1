import styles from "./divider.module.css";

const Divider = (props) => {
	return (
		<div
			className={styles.divider}
			style={{ backgroundColor: props.color }}
		></div>
	);
};

export default Divider;
