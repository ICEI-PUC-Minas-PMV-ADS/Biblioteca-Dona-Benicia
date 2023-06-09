import React, { useState } from "react";
import Modal from "react-modal";

type CardProps = {
  titulo: string;
  img: string;
  autor: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ titulo, img, autor, onClick }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const reservar = () => {
    openModal();
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 rounded-md overflow-hidden shadow-md m-2 w-48 cursor-pointer bg-white">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover" src={img} alt="" />
        </div>
        <div className="p-2">
          <h3 className="text-sm text-gray-700 font-bold mb-1">{titulo}</h3>
          <p className="text-xs text-gray-500">{autor}</p>
          <button className="p-2 bg-customGreen text-white rounded-md mt-2 w-full" onClick={reservar}>
            Reservar
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2 className="text-sm text-gray-700 font-bold mb-1">{titulo}</h2>
        <p className="text-sm text-gray-700 font-bold mb-1">Autor: {autor}</p>
        <button className="p-2 bg-customGreen text-white rounded-md" onClick={closeModal}>
          Fechar
        </button>
      </Modal>
    </div>
  );
};

export default Card;
