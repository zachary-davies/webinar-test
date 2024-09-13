import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Modal from "./components/modal/modal";
import Speakers from "./components/speakers/speakers";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.removeProperty("overflow");
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Hero openModal={openModal} />
        <Speakers />
      </div>
      <Footer />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
