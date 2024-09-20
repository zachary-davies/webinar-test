import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Modal from "./components/modal/modal";
import Speakers from "./components/speakers/speakers";

function App() {
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
    <div className="app">
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
    </div>
  );
}

export default App;
