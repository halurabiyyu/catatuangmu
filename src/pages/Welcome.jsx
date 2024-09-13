import React, { useEffect, useState } from "react";
import LoginGoogle from "../components/LoginGoogle";
import CircleButton from "../components/CircleButton";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";

export default function welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="h-svh flex bg-slate-200 font-mono">
        <div className="m-auto bg-white w-80 p-2 rounded h-fit text-center drop-shadow">
          <h1 className="font-bold text-3xl hover:underline">LOGIN</h1>
          <div className="h-[80%] content-center">
            <LoginForm></LoginForm>
          </div>
          <div className="container p-2">
            <h1 className="text-slate-500 mb-2">OR</h1>
            <LoginGoogle></LoginGoogle>
          </div>
        </div>
        <div className="relative bg-white w-[50%] max-w-[50%]  flex px-5">
          <h1 className="text-9xl font-bold drop-shadow w-full transition-all flex m-auto">
            Control Your Budget!
          </h1>
          <CircleButton
            className="absolute top-5 right-5 h-fit"
            toggleModal={toggleModal}
          ></CircleButton>
          <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
      </div>
    </>
  );
}
