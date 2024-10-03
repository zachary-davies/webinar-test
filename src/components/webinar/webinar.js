import { useState, useEffect } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import UpcomingHero from "../upcomingHero/upcomingHero";
import Modal from "../modal/modal";
import Speakers from "../speakers/speakers";
import Products from "../products/products";
import OndemandHero from "../ondemandHero/ondemandHero";
import on24 from "../../images/on24.png";

const Webinar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);
  const variation = queryParameters.get("variation");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    console.log("openModal");
    if (isSignedIn) {
      const imageUrl = window.location.origin + on24;
      window.open(imageUrl, "_blank");
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
      <Header
        signOut={() => setIsSignedIn(false)}
        variation={variation}
        signedIn={isSignedIn}
      />
      <div className="content">
        {variation === "ondemand" ? (
          <OndemandHero openModal={openModal} />
        ) : (
          <UpcomingHero openModal={openModal} signedIn={isSignedIn} />
        )}
        <Speakers />
        <Products />
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
