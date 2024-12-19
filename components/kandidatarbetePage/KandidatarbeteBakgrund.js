import Divider from "../UI/divider";
import styles from "./KandidatarbeteBakgrund.module.css";
import Image from "next/image";
import styled from "@emotion/styled";

//emotion styles
const Container = styled.div`
  padding-top: 0;
  width: 70vw;
  margin: 0 auto;
  & > h2 {
    margin: 0 auto;
    font-size: 4.4rem;
    padding-bottom: 1.2rem;
  }
  & > p {
    text-align: right;
    margin: 0 auto;
    font-size: 1.6rem !important;
    font-weight: 600;
    padding-top: 1.6rem;
  }
  & > section {
    margin: 0 auto;
    font-size: 2.4rem;
    line-height: 1.2;

    padding-top: 2.4rem;
  }
  & > h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6rem !important;

    padding-top: 9.6rem;
    padding-bottom: 1.2rem;
    color: #333;
  }
  @media (max-width: 59em) {
    padding-top: 0;

    width: 70vw;

    & > p {
      padding-top: 8px;
    }
    & > section {
      padding-top: 24px;
    }
    & > h3 {
      padding-top: 64px;
    }
  }
  @media (max-width: 25em) {
    width: 80vw;
    & > h3 {
      padding-top: 32px;
    }
  }
`;

const FlexImg = styled.div`
  margin: 0 auto;

  display: flex;
  width: 90%;

  align-items: center;
  justify-content: space-around;

  /* filter: grayscale(100%); */
  filter: brightness(0%);
  opacity: 50%;
  @media (max-width: 59em) {
    width: 90%;
  }
`;
const ImgContainer = styled.div`
  width: 10%;
`;

const KandidatarbeteBakgrund = () => {
  return (
    <Container>
      {/* <p className={styles.bakgrund}>Bakgrund</p> */}
      <h2 data-aos="fade-up">Background</h2>
      <Divider color="black" />

      <p data-aos="fade-up">
        © Boström Dagberg Jilsén Kitzing Kullerstrand Silberberg
      </p>

      <section data-aos="fade-up">
        In our bachelor thesis group, we were tasked with developing a new,
        modernized control room for the alloy plant Vargön Alloys AB in
        collaboration with the company Boid. Currently, Vargön has four control
        rooms, one for each furnace. The goal of the project was to consolidate
        these four control rooms into one large, shared control room, enabling
        remote control of the furnaces. <br />
        <br />
        The design involved numerous considerations due to the significant
        influence of proximity to the furnace on the work. Our role in the
        project was to conceptualize the workplace for the Smältare. The
        Smältarens responsibilities include controlling the furnace by adding
        materials, adjusting the temperature, and monitoring the furnace for
        malfunctions. In addition to Boid, the company Guard AB was also
        involved in the project, responsible for creating the automation system
        for the furnace itself.
        <br />
        <br /> Working on a larger project was highly instructive as new
        discoveries emerged throughout the project that required adaptation.
        This demanded an open-minded and flexible approach to ensure the optimal
        functioning of the new control room as a whole. Below, the different
        phases of the work are briefly outlined.
      </section>

      <h3 data-aos="fade-up">Collaboration Between</h3>
      <div data-aos="fade-up">
        <FlexImg>
          <ImgContainer>
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/Kandidat/Chalmers.svg"
              alt="Chalmers logo"
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/Kandidat/Boid.svg"
              alt="Boid logo"
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/Kandidat/Vargön.svg"
              alt="Vargön Alloys logo"
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/Kandidat/Guard.svg"
              alt="Guard logo"
            />
          </ImgContainer>
        </FlexImg>
      </div>
    </Container>
  );
};
export default KandidatarbeteBakgrund;
