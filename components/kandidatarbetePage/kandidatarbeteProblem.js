import Divider from "../UI/divider";
import TextcontainerKand from "../UI/textcontainerKand";
import styles from "./kandidatarbeteProblem.module.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const KandidatarbeteProblem = () => {
  const [ref, isVisible] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.container}>
      <div
        className={
          isVisible ? `${styles.green} ${styles.animation}` : styles.green
        }
        ref={ref}
      >
        <div
          className={
            isVisible
              ? `${styles.greenContent} ${styles.fade}`
              : styles.greenContent
          }
        >
          <div className={styles.heading}>
            <h2>Areas of Concern</h2>
            <p>
              To understand the work situation of the Smältare, various data
              collection methods were employed and subsequently analyzed. These
              methods included a digital walkthrough, a pilot interview with a
              shift leader who had previously been a Smältare, market analysis,
              literature reviews on workplace ergonomics, and five detailed
              interviews with current Smältare. The collected data was analyzed,
              and a requirement specification was then created. Below, four of
              the most important components are presented.
            </p>
          </div>
          <div className={styles.lists}>
            <TextcontainerKand
              titel="Dirt"
              text="Because of the high activity levels in the control room, significant amounts of dirt and dust were often drawn in."
            />
            <TextcontainerKand
              titel="Proximity to the furnace"
              text="An important aspect of the work requires proximity to the furnace, something that must be maintained despite the increased distance."
            />
            <TextcontainerKand
              titel="Communication with other work roles"
              text="As a Smältare, active communication with other job roles is essential. It must be easy to communicate with each other."
            />
            <TextcontainerKand
              titel="Alarms and Safety"
              text="If an alarm goes off, it may require action within minutes in some cases, hence clear representation of the alarms is essential."
            />
          </div>
        </div>
      </div>
      <div className={isVisible ? `${styles.img} ${styles.fade}` : styles.img}>
        <div className={styles.imgContainer}>
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/Kandidat/TODO.png"
            alt="To Do List"
          />
        </div>
      </div>
    </div>
  );
};

export default KandidatarbeteProblem;
