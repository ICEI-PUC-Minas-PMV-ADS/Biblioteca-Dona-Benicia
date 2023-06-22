import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import { userId } from "../../jwt";
import "./style.css";
import Header from "../../components/header";

interface Emprestimo {
  _id: string;
  aluno: {
    _id: string;
    nome: string;
    sobrenome: string;
    email: string;
  };
  livro: {
    _id: string;
    titulo: string;
    autor: string;
    edicao: string;
    localPublicacao: string;
    editora: string;
    img: string;
    pdf: string;
  };
  data_emprestimo: string;
  multa: number;
}

const Reservas: React.FC = () => {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmprestimos = localStorage.getItem("emprestimos");
    if (savedEmprestimos) {
      setEmprestimos(JSON.parse(savedEmprestimos));
    } else {
      fetchBooks();
    }

    const interval = setInterval(fetchBooks, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get(`/usuarios/${userId()}/emprestimos`);
      console.log("Dados recebidos:", response.data);
  
      const newEmprestimos: Emprestimo[] = response.data;
  
      if (JSON.stringify(newEmprestimos) !== JSON.stringify(emprestimos)) {
        setEmprestimos(newEmprestimos);
        localStorage.setItem("emprestimos", JSON.stringify(newEmprestimos)); // Armazena os dados no Local Storage
        console.log("Mudanças detectadas:", newEmprestimos);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      } else {
        console.error("Error fetching books:", error);
        // Limpar os dados do Local Storage caso ocorra um erro ao buscar os dados da API
        localStorage.removeItem("emprestimos");
        setEmprestimos([]);
      }
    }
  };
  
  return (
    <div className="container mx-auto">
      <Header />
      <div className="bg-customGre font-bold text-customGreen p-4 my-4">
        <p className="text-center">Bem-vindo, às suas reservas.</p>
      </div>

      <div className="flex flex-col min-h-screen">
        <main className="px-2 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {emprestimos.map((emprestimo) => (
              <div
                key={emprestimo._id}
                className="border p-4 rounded-md bg-white text-black w-full shadow-md"
              >
                <div className="aspect-w-3 aspect-h-4 mb-4">
                  <img
                    src={emprestimo.livro.img}
                    alt={emprestimo.livro.titulo}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-2">{emprestimo.livro.titulo}</h3>
                <p className="mt-2">Autor: {emprestimo.livro.autor}</p>
                <p>Editora: {emprestimo.livro.editora}</p>
                <p>Data de empréstimo: {emprestimo.data_emprestimo}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reservas;

