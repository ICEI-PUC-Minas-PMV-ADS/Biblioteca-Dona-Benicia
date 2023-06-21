import React, { useState, useEffect } from "react";
import { FiSearch, FiChevronDown, FiLoader } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom';

interface Book {
  _id: string;
  titulo: string;
  img: string;
  autor: string;
  edicao: string;
  localPublicacao: string;
  editora: string;
}

const ConsultaAcervo: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("titulo");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedBookForEdit, setSelectedBookForEdit] = useState<Book | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get("/livros");
      setBooks(response.data);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      } else {
        console.error("Error fetching books:", error);
      }
    }
  };

  const handleSearch = async () => {
    let filtered: Book[] = [];
    const mensagemElement = document.getElementById("mensagem");
    if (mensagemElement) {
      mensagemElement.innerHTML = ""; // Clear the message
    }

    if (selectedFilter === "livro") {
      filtered = books;
    } else if (searchTerm !== "") {
      switch (selectedFilter) {
        case "titulo":
          filtered = books.filter((book: Book) =>
            book.titulo.toLowerCase().includes(searchTerm.toLowerCase())
          );
          break;
        case "autor":
          filtered = books.filter((book: Book) =>
            book.autor.toLowerCase().includes(searchTerm.toLowerCase())
          );
          break;
        default:
          filtered = books;
          break;
      }
    } else {
      filtered = books;
    }

    if (
      filtered.length === 0 &&
      searchTerm !== "" &&
      mensagemElement instanceof HTMLElement
    ) {
      mensagemElement.innerHTML = "<h1>Não foi possível localizar.</h1>";
    }

    setIsLoading(true);

    // Simulating an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFilteredBooks(filtered);
    setSearchTerm("");
    setShowResults(true);
    setIsLoading(false);
  };

  const handleInputClick = () => {
    const mensagemElement = document.getElementById("mensagem");
    if (mensagemElement) {
      mensagemElement.innerHTML = ""; // Clear the message
    }
  };

  const handleTitleClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleImageClick = (bookId: string) => {
    console.log("Open PDF of book with ID:", bookId);
  };

  const handleEditarClick = (bookId: string) => {
    const book = books.find((book) => book._id === bookId);
    if (book) {
      setSelectedBookForEdit(book);
      setEditModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-2 flex-grow">
        <div className="w-full p-2 mx-auto border bg-customGreen border-gray-300 rounded-md">
          <label
            htmlFor="searchTerm"
            className="block text-sm font-medium leading-6 text-white"
          >
            DIGITE O TERMO PARA A PESQUISA:
          </label>
          <div className="relative">
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onClick={handleInputClick}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              placeholder={`Pesquisar por ${selectedFilter}`}
              className="p-2 pl-10 border-none outline-none w-full bg-input text-gray-500 rounded-md"
            />
            <FiSearch className="absolute top-2 left-3 text-texto" />
          </div>
        </div>

        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="p-2 border bg-customGreen border-gray-300 rounded-md mb-">
                <div className="flex items-center justify-between w-full">
                  <label
                    htmlFor="filter"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Buscar por:
                  </label>
                  <FiChevronDown />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="p-2 border bg-customGreen border-gray-300 rounded-md mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="livro"
                    name="filter"
                    value="livro"
                    checked={selectedFilter === "livro"}
                    onChange={(e) => {
                      setSelectedFilter(e.target.value);
                      setFilteredBooks(books); // Reset filtered books to all books
                    }}
                  />
                  <label htmlFor="livro">Todos</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="titulo"
                    name="filter"
                    value="titulo"
                    checked={selectedFilter === "titulo"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label htmlFor="titulo">Título</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="autor"
                    name="filter"
                    value="autor"
                    checked={selectedFilter === "autor"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label htmlFor="autor">Autor</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center justify-center">
          <button
            onClick={handleSearch}
            className="px-10 py-2 my-9 mx-auto rounded-md bg-customGreen text-white flex items-center"
          >
            {isLoading ? <FiLoader className="animate-spin mr-2" /> : null}
            Buscar
          </button>
        </div>
        <div id="mensagem" className="text-center text-texto mb-4"></div>

<div className="flex flex-wrap justify-center bg-white mx-4 rounded-md">
  {books.map((book: Book, index: number) => (
    <div
      key={book._id}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4"
    >
      <Card
        _id={book._id}
        titulo={book.titulo}
        img={book.img}
        autor={book.autor}
        edicao={book.edicao}
        localPublicacao={book.localPublicacao}
        editora={book.editora}
        onClick={() => handleImageClick(book._id)}
      />
    </div>
  ))}
</div>
</main>
<div className="mt-auto">
<Footer />
</div>
</div>
);
};

export default ConsultaAcervo;