import PropTypes from "prop-types";
import styles from "./Solution.module.css";

const Solution = ({ title, text, videoLink, videoOnLeft }) => {
  return (
    <>
      {videoOnLeft ? (
        <div className={styles.containerLeft}>
          <video autoPlay loop muted playsInline className={styles.videoColumn}>
            <source
              className={styles.video}
              src={videoLink}
              type="video/mp4"
              alt="Video showcasing Micro Adjustments"
            />
          </video>
          <div className={styles.textColumn}>
            <h2>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <video autoPlay loop muted className={styles.videoColumn}>
            <source
              className={styles.video}
              src={videoLink}
              type="video/mp4"
              alt="Video showcasing Micro Adjustments"
              style={{ maxWidth: "100%" }}
            />
          </video>
        </div>
      )}
    </>
  );
};

Solution.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  videoOnLeft: PropTypes.bool,
};

Solution.defaultProps = {
  videoOnLeft: false,
};

export default Solution;
