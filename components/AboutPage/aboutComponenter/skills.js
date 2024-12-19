import styles from "./skills.module.css";
import { motion } from "framer-motion";

const Skills = (props) => {
  const container = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        opacity: { duration: 0.3 },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          restSpeed: 0.6,
        },
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={container}
      className={styles.skillsContainer}
    >
      {props.skillList.map((id) => (
        <motion.li key={id} variants={item} className={styles.container}>
          {id}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Skills;
