import styles from "./TripleDiamond.module.css";

const TripleDiamond = () => {
  return (
    <div className={styles.container}>
      <h2>Design Approach</h2>
      <p>
        For our thesis project with Kognic, we used the Triple Diamond design
        approach to tackle the issue of <br /> micro-adjustments in annotations.
        This approach helped us structure the design process into three distinct
        phases.
      </p>
      <img
        className={styles.image}
        src="/masterThesis/TripleDiamond.png"
        alt="Triple Diamond"
      />
    </div>
  );
};

export default TripleDiamond;
