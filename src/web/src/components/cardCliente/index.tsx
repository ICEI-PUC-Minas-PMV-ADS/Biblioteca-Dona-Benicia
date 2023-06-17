import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import "./style.css";


type CardProps = {
  _id: string;
  titulo: string;
  img: string;
  autor: string;
  edicao: string;
  localPublicacao: string;
  editora: string;
};

const Card: React.FC<CardProps> = ({
  _id,
  titulo,
  img,
  autor,
  edicao,
  localPublicacao,
  editora,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <div className="card-content" onClick={openModal}>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover" src={img} alt="" />
        </div>
        <div className="card-details">
          <h3 className="card-title text-gray-800 font-bold">{titulo}</h3>
          <p className="card-author text-gray-800">{autor}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header flex justify-between items-center">
          <h1 className="info-label text-2xl text-gray-800 font-bold mb-2">{titulo}</h1>
          <button className="close-button" onClick={closeModal}>
            <FiX size={18} />
          </button>
        </div>
        <div className="modal-content">
          <div className="info-group flex items-center">
            <p className="info-label text-gray-600 font-semibold mr-2">Autor:</p>
            <p className="info-value text-gray-800">{autor}</p>
          </div>
          <div className="info-group flex items-center">
            <p className="info-label text-gray-600 font-semibold mr-2">Edição:</p>
            <p className="info-value text-gray-800">{edicao}</p>
          </div>
          <div className="info-group flex items-center">
            <p className="info-label text-gray-600 font-semibold mr-2">Local de Publicação:</p>
            <p className="info-value text-gray-800">{localPublicacao}</p>
          </div>
          <div className="info-group flex items-center">
            <p className="info-label text-gray-600 font-semibold mr-2">Editora:</p>
            <p className="info-value text-gray-800">{editora}</p>
          </div>
        </div>

        <div className="button-group">
          <button
            className="bg-customGreen text-white py-2 px-4 rounded-md"
            onClick={() => {
              // Lógica de reserva do livro aqui
            }}
          >
            Reservar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
