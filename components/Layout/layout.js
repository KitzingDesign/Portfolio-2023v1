import { useState } from "react";
import ToastModal from "../UI/toastModal/ToastModal";
import Nav from "./Navigation";

export default function Layout({ children }) {
  const [matPopup, setMatPopup] = useState(true);

  const closePopup = () => {
    setMatPopup(false);
  };
  return (
    <>
      <Nav />
      <main>{children}</main>

      {matPopup && (
        <ToastModal
          message="I’ve coded an online cookbook! Want to check it out?"
          buttonText="Bring me there!"
          onButtonClick={() => {}}
          onClose={closePopup}
        />
      )}
    </>
  );
}
