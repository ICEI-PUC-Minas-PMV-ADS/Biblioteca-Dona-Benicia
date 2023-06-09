import React from "react";
import { Link } from "react-router-dom";

interface Book {
  id: string;
  titulo: string;
  img: string;
  autor: string;
}

export interface ResultadoBuscaProps {
  books: Book[];
  loading: boolean;
}

const ResultadoBusca: React.FC<ResultadoBuscaProps> = ({ books, loading }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-customGreen p-4">
        <h1 className="text-white text-2xl font-bold">Resultado da Busca</h1>
      </header>
      <main className="flex-grow p-4">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Carregando...</p>
          </div>
        ) : (
          <>
            {books.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Nenhum resultado encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                  <div key={book.id} className="bg-white rounded-md p-4">
                    <img src={book.img} alt={book.titulo} className="w-full h-40 object-contain mb-4" />
                    <h2 className="text-lg font-bold">{book.titulo}</h2>
                    <p className="text-gray-500">Autor: {book.autor}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <footer className="bg-customGreen p-4">
        <Link to="/" className="text-white underline">
          Voltar à Consulta de Acervo
        </Link>
      </footer>
    </div>
  );
};

export default ResultadoBusca;
