import { Fragment, useEffect } from "react";

import withTransition from "../../components/HOC/withTransition";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import styled from "@emotion/styled";
import MasterThesisHeader from "../../components/masterTheses/matersThesisHeader";
import MasterThesisBackground from "../../components/masterTheses/masterThesisBackground";
import ResearchQuestion from "../../components/masterTheses/researchQuestion/ResearchQuestion";
import MicroAdjustments from "../../components/masterTheses/microAdjustments/MicroAdjustments";
import TripleDiamond from "../../components/masterTheses/tripleDiamond/TripleDiamond";
import PhaseOne from "../../components/masterTheses/phase1/PhaseOne";
import PhaseTwo from "../../components/masterTheses/phase2/PhaseTwo";
import PhaseThree from "../../components/masterTheses/phase3/PhaseThree";
import SolutionSection from "../../components/masterTheses/finalSolution/SolutionSection";
import DesignGuidelines from "../../components/masterTheses/designGuidelines/DesignGuidelines";

//emotion styles
const Sticky = styled.p`
  writing-mode: tb-rl;
  bottom: 1%;
  left: 1%;
  position: fixed;
  text-transform: uppercase;
`;

const MasterThesisPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Master&lsquo;s Thesis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Sticky>
        Master&lsquo;s Thesis - Interaction Design and Technologies - 2024
      </Sticky>
      <MasterThesisHeader />
      <MasterThesisBackground />
      <ResearchQuestion />
      <MicroAdjustments />
      <TripleDiamond />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <SolutionSection />
      <DesignGuidelines />
      <Footer />
    </Fragment>
  );
};
export default withTransition(MasterThesisPage);
