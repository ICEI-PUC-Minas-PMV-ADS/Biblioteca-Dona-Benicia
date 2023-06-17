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
import Card from "../../components/cardCliente";

interface Book {
  _id: string;
  titulo: string;
  img: string;
  autor: string;
  edicao: string;
  localPublicacao: string;
  editora: string;
}

const AcervoCliente: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("titulo");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://donabenicia-dev.azurewebsites.net/livros"
      ); // Replace with your API URL
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = async () => {
    let filtered: Book[] = [];
    const mensagemElement: HTMLElement | null =
      document.getElementById("mensagem");
    if (mensagemElement instanceof HTMLElement) {
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
    const mensagemElement: HTMLElement | null =
      document.getElementById("mensagem");
    if (mensagemElement instanceof HTMLElement) {
      mensagemElement.innerHTML = ""; // Clear the message
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
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
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
        {showResults ? (
  <div className="flex flex-wrap justify-center bg-white mx-4 rounded-md">
    {filteredBooks.length > 0 ? (
      <>
        {filteredBooks.map((book) => (
          <div key={book._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4"
          >
            <h3>{book.titulo}</h3>
            <Card
              _id={book._id}
              titulo={book.titulo}
              img={book.img}
              autor={book.autor}
              edicao={book.edicao}
              localPublicacao={book.localPublicacao}
              editora={book.editora}
            />
          </div>
        ))}
      </>
    ) : (
      <div className="text-gray-500">
        <h1>No results found.</h1>
      </div>
    )}
  </div>
) : null}

      </main>
      <Footer />
    </div>
  );
};

export default AcervoCliente;
