import { useState } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Hero from "../hero/hero";
import Modal from "../modal/modal";
import Speakers from "../speakers/speakers";

const Webinar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);
  const variation = queryParameters.get("variation");

  const openModal = () => {
    if (isSignedIn) {
      window.open("https://google.com", "_blank", "noreferrer");
    } else {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.removeProperty("overflow");
  };
  return (
    <>
      {" "}
      <Header signOut={() => setIsSignedIn(false)} variation={variation} />
      <div className="content">
        <Hero openModal={openModal} signedIn={isSignedIn} />
        <Speakers />
      </div>
      <Footer />
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          signIn={() => setIsSignedIn(true)}
          variation={variation}
        />
      )}
    </>
  );
};

export default Webinar;
