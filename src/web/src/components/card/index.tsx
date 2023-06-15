import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FiX, FiEdit, FiTrash } from "react-icons/fi";
import "./style.css";
import api from "../../services/ApiLivros";

type CardProps = {
  _id: string;
  titulo: string;
  img: string;
  autor: string;
  edicao: string;
  localPublicacao: string;
  editora: string;
  onClick?: (id: string) => void;
  onExcluir?: (id: string) => void;
  onEditar?: (bookId: string) => void;
};

const Card: React.FC<CardProps> = ({
  _id,
  titulo,
  img,
  autor,
  edicao,
  localPublicacao,
  editora,
  onClick,
  onExcluir,
  onEditar
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [editedTitulo, setEditedTitulo] = useState(titulo);
  const [editedAutor, setEditedAutor] = useState(autor);
  const [editedImg, setEditedImg] = useState(img);
  const [editedEdicao, setEditedEdicao] = useState(edicao);
  const [editedLocalPublicacao, setEditedLocalPublicacao] = useState(localPublicacao);
  const [editedEditora, setEditedEditora] = useState(editora);

  const handleLocalPublicacaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLocalPublicacao(event.target.value);
  };

  const handleEditoraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEditora(event.target.value);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const reservar = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (onClick) {
      onClick(_id);
      setModalIsOpen(true);
    }
  };

  const editar = () => {
    console.log("Editar");
    if (onEditar) {
      onEditar(_id);
      setModalIsOpen(true);
    }
  };

  const excluir = async (bookId: string) => {
    setLoading(true);

    try {
      console.log("ID do livro a ser excluído:", bookId);
      await api.delete(`/livros/${bookId}`);

      if (onExcluir) {
        onExcluir(bookId);
      }

      setLoading(false);
      alert("Livro excluído com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao excluir o livro.");
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(_id);
    }
  };

  const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitulo(event.target.value);
  };

  const handleAutorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAutor(event.target.value);
  };

  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedImg(event.target.value);
  };

  const handleEdicaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEdicao(event.target.value);
  };

  const handleEditarSubmit = async () => {
    try {
      setLoading(true);

      const updatedBook = {
        titulo: editedTitulo,
        autor: editedAutor,
        img: editedImg,
        edicao: editedEdicao,
        localPublicacao: editedLocalPublicacao,
        editora: editedEditora,
      };

      console.log("Updating book:", updatedBook);

      await api.put(`/livros/${_id}`, updatedBook);

      console.log("Book updated successfully!");

      setLoading(false);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating book:", error);
      setLoading(false);
      alert("Ocorreu um erro ao atualizar o livro.");
    }
  };

  const handleImgUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];

      if (!file) return;

      setLoading(true);

      const formData = new FormData();
      formData.append("image", file);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.imageUrl;

      setEditedImg(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      alert("Ocorreu um erro ao carregar a imagem.");
    }
  };

  return (
    <div className="card" onClick={handleCardClick} data-card-id={_id}>
      <div className="flex justify-center">
        <div className="card" onClick={reservar}>
          <div className="aspect-w-1 aspect-h-1">
            <img className="object-cover" src={img} alt="" />
          </div>
          <div className="p-2">
            <h3 className="text-sm text-gray-700 font-bold mb-1">{titulo}</h3>
            <p className="text-xs text-gray-500">{autor}</p>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header flex justify-between items-center">
            <h2 className="text-sm text-gray-700 font-bold mb-1">{titulo}</h2>
            <button className="close-button" onClick={closeModal}>
              <FiX size={18} />
            </button>
          </div>
          <div className="modal-content">
            <div className="form-group">
              <label htmlFor="titulo" className="text-sm text-gray-700 font-bold mb-1">
                Título:
              </label>
              <input
                type="text"
                id="titulo"
                value={editedTitulo}
                onChange={handleTituloChange}
                className="input-field text-gray-700"
              />
            </div>
            <div className="form-group">
              <label htmlFor="autor" className="text-sm text-gray-700 font-bold mb-1">
                Autor:
              </label>
              <input
                type="text"
                id="autor"
                value={editedAutor}
                onChange={handleAutorChange}
                className="input-field text-gray-700"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="edicao" className="text-sm text-gray-700 font-bold mb-1">
                Edição:
              </label>
              <input
                type="text"
                id="edicao"
                value={                editedEdicao}
                onChange={handleEdicaoChange}
                className="input-field text-gray-700"
              />
            </div>
            <div className="form-group">
              <label htmlFor="localPublicacao" className="text-sm text-gray-700 font-bold mb-1">
                Local de Publicação:
              </label>
              <input
                type="text"
                id="localPublicacao"
                value={editedLocalPublicacao}
                onChange={handleLocalPublicacaoChange}
                className="input-field text-gray-700"
              />
            </div>
            <div className="form-group">
              <label htmlFor="editora" className="text-sm text-gray-700 font-bold mb-1">
                Editora:
              </label>
              <input
                type="text"
                id="editora"
                value={editedEditora}
                onChange={handleEditoraChange}
                className="input-field text-gray-700"
              />
            </div>
            <div className="form-group">
              <label htmlFor="img" className="text-sm text-gray-700 font-bold mb-1">
                Imagem:
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="img"
                  accept="image/*"
                  onChange={handleImgUpload}
                  className="hidden"
                />
                <label htmlFor="img" className="upload-button">
                  Carregar imagem
                </label>
                {editedImg && (
                  <img src={editedImg} alt="Uploaded" className="uploaded-image" />
                )}
              </div>
            </div>
          </div>
          <div className="button-group">
            <button className="my-button edit-button" onClick={handleEditarSubmit}>
              <FiEdit size={18} className="mr-1" />
              Atualizar
            </button>
            <button className="my-button delete-button" onClick={() => excluir(_id)}>
              <FiTrash size={18} className="mr-1" />
              Excluir
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Card;


