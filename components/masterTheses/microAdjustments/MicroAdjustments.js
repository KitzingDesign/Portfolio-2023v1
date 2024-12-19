import styles from "./MicroAdjustments.module.css";
const MicroAdjustments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>What is Micro-Adjustments</h2>
        <p>
          The act of making adjustments to annotations of already sufficient
          quality is called micro-adjustments, and is one optimization problem
          existing in the annotation platform. However, annotations still need
          expert-level quality to generate as close as possible to &lsquo;ground
          truth&lsquo;, a reality for the machine learning model to train on.
          Since the process handles huge datasets, the time spent on
          micro-adjustments results in major time losses. Our goal was to to
          analyze annotator workflows, propose one or multiple solutions to
          improve the way annotators work with object annotation, and create
          general design guidelines for the reduction of micro-adjustments in
          annotation platforms.
        </p>
      </div>
      <div style={{ flex: 1 }} className={styles.video}>
        <video autoPlay loop muted playsinline>
          <source
            src="/masterThesis/MicroAdjustments.mp4"
            preload="auto"
            type="video/mp4"
            alt="Video showcasing Micro Adjustments"
            style={{ maxWidth: "100%" }}
          />
        </video>
      </div>
    </div>
  );
};

export default MicroAdjustments;
