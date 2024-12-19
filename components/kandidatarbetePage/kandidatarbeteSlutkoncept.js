import { Fragment } from "react";
import Divider from "../UI/divider";

import styles from "./kandidatarbeteSlutkoncept.module.css";
import SolutionOne from "./sections/solutionOne";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Kollage from "./sections/kollage";
import Image from "next/image";

const KandidatarbeteSlutkocept = () => {
  return (
    <Fragment>
      <div className={styles.containerUpper}>
        <div className={styles.textContainer}>
          <h2 data-aos="fade-up">The final Concept</h2>
          <div className={styles.divider} data-aos="fade-up"></div>
          <p data-aos="fade-up">
            The Arc is a modern workplace adapted to the needs of Smältare. The
            workplace enables the Smältare to easily and ergonomically switch
            between different tasks, allowing for varied working positions. The
            Arc also allows for the opportunity to leave the workstation for
            meals and breaks, as well as facilitating collaboration and
            knowledge exchange among Smältare.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.img}>
            <Image
              width="100%"
              height="56%"
              layout="responsive"
              objectFit="contain"
              src="/Kandidat/Hero-bild.webp"
              alt="The Arc"
            />
          </div>

          <div className={styles.frame}>
            <h1>The Arc</h1>
          </div>
        </div>
        <SolutionOne
          titel="Dirt handling"
          divider="dividerR"
          urlFirst="above-view"
          firstTitel="Layout"
          firstText="The layout of the workplace is structured into two sections, each containing four workstations. This is to promote communication between the Smältare while also enabling a calm environment. The segregated space in the control room and the reduced commotion will, in turn, lead to less dust or dirt being drawn in."
          urlSecond="bar-view"
          secondTitel="Bar Counter"
          secondText="Next to each workstation, there is also a bar counter so that other work positions can easily communicate with the Smältare without needing to intrude. This, in turn, results in reduced dirt being brought in."
          alt="Smutshantering"
        />
        <SolutionOne
          titel="Proximity to the Furnace "
          divider="dividerL"
          urlFirst="screens-view"
          firstTitel="Visual Representation"
          firstText="To maintain proximity to the furnace despite the increased distance, the number of monitoring screens was expanded so that the Smältare can easily oversee the area."
          urlSecond="screen-view"
          secondTitel="NTU-Screen"
          secondText="In addition to video surveillance, there is also a Närhet till Ugn (NTU) screen. The screen presents the furnace's condition so that the Smältare can perceive the same indicators as they currently do."
          alt="närhet Till ugn"
        />
        <SolutionOne
          titel="Communication"
          divider="dividerR"
          urlFirst="hang-view"
          firstTitel="Bar Counter "
          firstText="The bar counter is not only a shield against dirt but also a convenient avenue for communication. Through the bar counter, other work positions can smoothly swing by and talk to the Smältaren."
          urlSecond="headphones-view"
          secondTitel="Headphones"
          secondText="The headphones are for easily communicating with other work positions when they are in a different location."
          alt="Kommunikation"
        />
        <SolutionOne
          titel="Alarm and Safety"
          divider="dividerL"
          urlFirst="speaker-view"
          firstTitel="Visually"
          firstText="To visually represent ongoing alarms, there are, among other things, two LED strips on a panel standing on the desk. The triggered alarms are also represented on the screens."
          urlSecond="clock-view"
          secondTitel="Haptic"
          secondText="To ensure that the Smältaren, whether at the workstation or not, can perceive ongoing alarms, there is a smartwatch that indicates when an alarm has been triggered. This is to ensure that the Smältaren is always attentive to what is happening."
        />
      </div>
      <div className={styles.container}>
        <h2 data-aos="fade-up">Control</h2>
        <Divider color="black" />
        <p data-aos="fade-up">
          The control levers for the batch machines are located on a control
          panel, which can easily be slid laterally along a track placed
          underneath the table. This is so that the Smältaren can use the
          keyboard behind the control panel without having to lean over it. The
          actual control itself is similar to the existing control, but the
          levers are rearranged to create a more ergonomic working position.
        </p>
        <div className={styles.styrContainer} data-aos="fade-up">
          <Zoom>
            <div className={styles.imgStyr}>
              <Image
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="contain"
                src={"/Kandidat/solutions/styr-view.webp"}
                alt="controls"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className={styles.imgStyr}>
              <Image
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="contain"
                src={"/Kandidat/solutions/styrbord-view.webp"}
                alt="Controls placing"
              />
            </div>
          </Zoom>
        </div>
      </div>
      <div className={styles.kollageContainer}>
        <h2 data-aos="fade-up">Insights</h2>
        <Divider color="black" />
        <p data-aos="fade-up">
          I learned a lot by working on an extensive project where one
          constantly had to engage with other stakeholders. Even though it often
          resulted in compromise and rethinking the design, it broadened my
          perspectives on how real projects unfold. No design process is
          identical to another; there will always be different problems to
          tackle, and the path to the final product will never be
          straightforward. But that is precisely what fuels my passion for this
          field—the necessity of maintaining an open mind.
        </p>
        <div className={styles.kollage}>
          <Kollage />
        </div>
      </div>
    </Fragment>
  );
};

export default KandidatarbeteSlutkocept;
