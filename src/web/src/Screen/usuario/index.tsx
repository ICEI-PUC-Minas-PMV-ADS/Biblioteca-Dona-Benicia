import React, { useState } from "react";
import backgroundImage from "../../assets/livraria.png";
import "./style.css";
import api from "../../services/ApiLivros";
import { useNavigate } from 'react-router-dom';


const Person: React.FC = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  // Adicione o estado para o campo "username"

  function limparInputs() {
    setNome("");
    setSobrenome("");
    setEmail("");
    setSenha("");
    setSenhaRepetida("");
    setUsername(""); // Limpe o estado do campo "username" também
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (senha !== senhaRepetida) {
        throw new Error("As senhas não coincidem.");
      }

      const usuarioData = {
        nome,
        sobrenome,
        email,
        senha,
        username, // Inclua o campo "username" no objeto de dados do usuário
      };
      const response = await api.post("/usuarios", usuarioData);
      console.log("Usuário cadastrado com sucesso!");
      console.log(response.data);
      limparInputs();
      navigate("/login");

    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        // Redirecionar para a página de login
        navigate("/login");
      } else {
        console.error("Error fetching books:", error);
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="flex min-h-full flex-1 flex-col justify-center p-4 py-12 lg:px-8 ">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-branco p-4 rounded ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-texto">
                  Inscrever-se
                </h2>
                <p
                  className="mt-10 text-center text-sm font-medium leading-
6 tracking-tight text-texto"
                >
                  Inscreva-se para obter acesso aos recursos exclusivos da nossa
                  biblioteca.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium leading-6 text-texto"
                    >
                      Primeiro nome:
                    </label>
                    <div className="mt-2">
                      <input
                        id="nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text- focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sobrenome"
                      className="block text-sm font-medium leading-6 text-texto"
                    >
                      Sobrenome:
                    </label>
                    <div className="mt-2">
                      <input
                        id="sobrenome"
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                        required
                        className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="senha"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Username:
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="senha"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Senha:
                  </label>
                  <div className="mt-2">
                    <input
                      id="senha"
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="senhaRepetida"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Digite novamente a senha:
                  </label>
                  <div className="mt-2">
                    <input
                      id="senhaRepetida"
                      type="password"
                      value={senhaRepetida}
                      onChange={(e) => setSenhaRepetida(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-texto px-3 py-1.5 text-sm font-semibold leading-6 text-branco shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    INCLUIR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Person;
