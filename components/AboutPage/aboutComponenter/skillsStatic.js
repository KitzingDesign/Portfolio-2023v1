import styles from "./skills.module.css";

const SkillStatic = (props) => {
	const list = [];
	props.input.forEach((e) =>
		list.push(<li className={styles.container}>{e}</li>)
	);
	console.log(list);

	return <ul className={styles.skillsContainer}>{list}</ul>;
};

export default SkillStatic;
