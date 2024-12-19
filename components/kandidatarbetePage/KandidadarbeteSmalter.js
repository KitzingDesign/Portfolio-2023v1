import styles from "./kandidatarbeteSmalter.module.css";
import Image from "next/image";

const KandidatarbeteBakgrund = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textConatiner} data-aos="fade-up">
        <h2>Evaluation</h2>
        <p>
          The three concepts were evaluated by the Smältare through a survey. It
          emerged that Concept A was the preferred concept among the Smältare.
          The reasons were that the concept was open, clear, professional,
          featured a good solution with hooks for daily storage, and had a
          well-designed control panel. The concept was iterated upon, and
          several sub-solutions from the other concepts were implemented.
          Altogether, it eventually became <b>The Arc...</b>
        </p>
      </div>
      <div className={styles.imgContainer} data-aos="fade-up">
        <div className={styles.gifContainer}>
          <Image
            width="100%"
            height="200%"
            layout="responsive"
            objectFit="contain"
            src={`/Smalter-gif-smal.gif`}
            alt="Melter"
          />
        </div>
      </div>
    </div>
  );
};

export default KandidatarbeteBakgrund;
