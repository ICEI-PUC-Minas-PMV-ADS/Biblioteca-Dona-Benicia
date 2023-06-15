import { useState } from "react";
import backgroundImage from '../../assets/livraria.png';
import './style.css';
import api from "../../services/ApiLivros";


const Person: React.FC = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  

  function limparInputs() {
    setNome("");
    setSobrenome("");
    setEmail("");
    setSenha("");
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const livroData = {
        nome,
        sobrenome,
        email,
        senha,

      };
      const livroResponse = await api.post(`/usuarios`,  livroData);
       
      console.log("passou");
      const item_id = livroResponse.data._id;
      console.log(item_id);

    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar o PDF.");
      console.log(error);
    }

    limparInputs();
  };
  

  return (
    
    <div
      className=" min-h-screen bg-no-repeat bg-center bg-cover"
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
            <p className="mt-10 text-center text-sm font-medium leading-6 tracking-tight text-texto">Inscreva-se para obter acesso aos recursos exclusivos da nossa biblioteca.</p>
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
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-texto"                  >
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
                    htmlFor="email"
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
                    htmlFor="edicao"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                    Senha:
                  </label>
                  <div className="mt-2">
                    <input
                      id="senha"
                      type="text"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-texto"
                  >
                Digite novamente a senha:
                  </label>
                  <div className="mt-2">
                    <input
                      id="editora"
                      type="text"
                      required
                      className="block w-full bg-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>text-gray-900
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
