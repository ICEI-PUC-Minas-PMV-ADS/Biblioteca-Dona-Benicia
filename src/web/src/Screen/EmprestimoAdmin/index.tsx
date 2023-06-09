import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axiosInstance from "../../axios";
import Header from "../../components/header";
import MenuItem from '@mui/material/MenuItem';
import { adminUser } from "../../jwt"
import { useNavigate } from 'react-router-dom';

interface FilmOption {
  _id: string;
  nome: string;
  sobrenome: string;
  username: string;
  email: string;
}

interface BookOption {
  _id: string;
  titulo: string;
  autor: string;
  edicao: string;
  localPublicacao: string;
  editora: string;
  img: string;
  pdf: string;
  emprestado?: boolean; // Adicione esta propriedade como opcional
  emprestimoId?: string; // Add this property for the loan ID
}

enum ActionType {
  LOAN = "loan",
  RETURN = "return",
}

export default function ComboBox() {
  const [filmOptions, setFilmOptions] = useState<FilmOption[]>([]);
  const [bookOptions, setBookOptions] = useState<BookOption[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<FilmOption | null>(null);
  const [selectedBook, setSelectedBook] = useState<BookOption | null>(null);
  const [loanStatus, setLoanStatus] = useState<string>('');
  const [actionType, setActionType] = useState<ActionType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilmOptions();
    fetchBookOptions();
  }, []);

  const fetchFilmOptions = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get('/usuarios');
      const data: FilmOption[] = response.data;
      setFilmOptions(data);
    } catch (error) {
      console.error('Error fetching film options:', error);
    }
  };

  const fetchBookOptions = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get('/livros');
      const data: BookOption[] = response.data;
      setBookOptions(data);
    } catch (error) {
      console.error('Error fetching book options:', error);
    }
  };

  const handleLoanSubmission = async (): Promise<void> => {
    if (selectedFilm && selectedBook && actionType) {
      try {
        if (actionType === ActionType.LOAN) {
          // Lógica para realizar o empréstimo
        } else if (actionType === ActionType.RETURN) {
          const response = await axiosInstance.delete(`/usuarios/${selectedFilm._id}/emprestimos/${selectedBook.emprestimoId}`);
          if (response.status === 200) {
            setLoanStatus('Devolução realizada com sucesso!');
            // Lógica para remover o livro da lista de empréstimos do usuário
            const updatedBookOptions = bookOptions.map((book) => {
              if (book._id === selectedBook._id) {
                return { ...book, emprestado: false, emprestimoId: undefined };
              }
              return book;
            });
            setBookOptions(updatedBookOptions);
            setSelectedFilm(null);
            setSelectedBook(null);
            setActionType(null);
          } else {
            setLoanStatus('Falha ao realizar a devolução.');
          }
        }
      } catch (error) {
        console.error('Error submitting loan:', error);
        setLoanStatus('Falha ao realizar a ação.');
      }
    }
  };
  

  const handleActionTypeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedActionType = event.target.value as ActionType;
    setActionType(selectedActionType);
  };
  if (adminUser()){
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-customGre py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-texto mb-6 text-center">Registro de Empréstimo, Devolução e Renovação</h2>
            <div className="bg-customGreen rounded shadow-md p-6">
              <div className="space-y-6">
                <div>
                  <TextField
                    select
                    label="Ação"
                    value={actionType}
                    onChange={handleActionTypeChange}
                    className="bg-input w-full"
                  >
                    <MenuItem value={ActionType.LOAN}>Emprestar</MenuItem>
                    <MenuItem value={ActionType.RETURN}>Devolver</MenuItem>
                  </TextField>
                </div>

                {actionType === ActionType.LOAN && (
                  <div>
                    <Autocomplete
                      disablePortal
                      id="combo-box-films"
                      options={filmOptions}
                      getOptionLabel={(option) => option.nome}
                      className="bg-input"
                      renderInput={(params) => <TextField {...params} label="Usuário" />}
                      onChange={(event, value) => setSelectedFilm(value)}
                    />
                  </div>
                )}

  {actionType === ActionType.RETURN && (
                  <div>
                    <Autocomplete
                      disablePortal
                      id="combo-box-films"
                      options={filmOptions}
                      getOptionLabel={(option) => option.nome}
                      className="bg-input"
                      renderInput={(params) => <TextField {...params} label="Usuário" />}
                      onChange={(event, value) => setSelectedFilm(value)}
                    />
                  </div>
                )}

                {actionType === ActionType.LOAN && (
                  <div>
                    <Autocomplete
                      disablePortal
                      id="combo-box-books"
                      options={bookOptions}
                      getOptionLabel={(option) => option.titulo}
                      className="bg-input"
                      renderInput={(params) => <TextField {...params} label="Livro" />}
                      onChange={(event, value) => setSelectedBook(value)}
                    />
                  </div>
                )}

  {actionType === ActionType.RETURN && (
                  <div>
                    <Autocomplete
                      disablePortal
                      id="combo-box-books"
                      options={bookOptions}
                      getOptionLabel={(option) => option.titulo}
                      className="bg-input"
                      renderInput={(params) => <TextField {...params} label="Livro" />}
                      onChange={(event, value) => setSelectedBook(value)}
                    />
                  </div>
                )}

  {actionType === ActionType.RETURN && selectedFilm && selectedBook && (
    <div>
      <h3 className="text-lg font-bold text-texto mb-2">Formulário de Exclusão</h3>
      <p>Você está prestes a excluir o livro "{selectedBook.titulo}" do usuário "{selectedFilm.nome}".</p>
      <p>Deseja prosseguir com a exclusão?</p>
      <div className="flex justify-center">
        <button
          onClick={handleLoanSubmission} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Confirmar Exclusão
        </button>
      </div>
    </div>
  )}

                {actionType && (
                  <div className="flex justify-center">
                    <button
                      onClick={handleLoanSubmission}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {actionType === ActionType.LOAN ? "Empréstimo" : "Devolução"}
                    </button>
                  </div>
                )}

                {loanStatus && <p className="text-center text-red-500">{loanStatus}</p>}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }else {
    navigate("/admin/login")
  }
}
