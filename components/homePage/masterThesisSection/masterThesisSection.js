import ProjectLink from "../../UI/Project-link";
import Image from "next/image";

import styles from "./masterThesisSection.module.css";
import styled from "@emotion/styled";

// import produktImg from "public/static/Macbook-mockup-hertz.jpg";
// const TextAnimation = keyframes`
// 	from {
// 		opacity: 0;
// 		transform: translate(0, 100vh);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: translate(0, 0);
// 	}`;

const Container = styled.div`
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (orientation: portrait) and (max-width: 34.5em) {
    height: 100vh;
    max-height: -webkit-fill-available;
    max-width: 80vw;
    gap: 0px;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  @media (orientation: portrait) {
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  width: 40vw;
  @media (orientation: portrait) {
    width: 65vw;
  }
  @media (orientation: portrait) and (max-width: 34.5em) {
    width: 80vw;
  }
`;
const Text = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;
const stay = false;

const MasterThesisSection = (props) => {
  if (props.fade) {
    stay = true;
  }
  return (
    <Container>
      <div
        className={
          stay
            ? `${styles.contentText} ${styles.visableText}`
            : styles.contentText
        }
      >
        <TextContainer>
          <h2>Master&lsquo;s Thesis</h2>
          <Text>
            The autonomous vehicles sector has brought computerization into
            driving, a task that previously was solely for humans. This results
            in companies providing software and annotation services for machine
            learning, helping with labeling, categorizing, and tracking data.
            This Master&lsquo;s thesis was conducted together with a company
            that provides an annotation platform, Kognic.
          </Text>
          <ProjectLink link="/masterThesis" />
        </TextContainer>
      </div>

      <div
        className={
          stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
        }
      >
        <ImgContainer>
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/masterThesis/HeroImg.png"
            alt="Mockup Knowledge Sharing "
          />
        </ImgContainer>
      </div>
    </Container>
  );
};

export default MasterThesisSection;
