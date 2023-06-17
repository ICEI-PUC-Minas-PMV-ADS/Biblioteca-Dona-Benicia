import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/ApiLivros";
import { FaSpinner } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FiSearch, FiChevronDown, FiLoader } from "react-icons/fi";




const EmprestimoAdmin: React.FC = () => {
  const [titulo, setTitle] = useState("");
  const [autor, setAuthor] = useState("");
  const [edicao, setEdition] = useState("");
  const [localPublicacao, setPublicationLocation] = useState("");
  const [editora, setPublisher] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false); // Estado de carregamento

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Ativa o estado de carregamento

    try {
      const livroData = {
        titulo,
        autor,
        edicao,
        localPublicacao,
        editora,
        img,
      };
      const livroResponse = await api.post("/livros", livroData);

      const item_id = livroResponse.data._id;

      if (img && item_id) {
        const formData = new FormData();
        formData.append("file", img);
        await api.post(`/livros/imagens/${item_id}`, formData);
      }

      setLoading(false); // Desativa o estado de carregamento
      alert("Novo livro inserido");

      // Limpa os campos de entrada após o envio do formulário
      setTitle("");
      setAuthor("");
      setEdition("");
      setPublicationLocation("");
      setPublisher("");
      setImg(null);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar os dados.");
      setLoading(false); // Desativa o estado de carregamento em caso de erro
    }
  };


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
        <div className="bg-customGre font-bold text-customGreen p-4 my-4">
          <p className="text-center">Registro de Emprestimo, Devolução e Renovação</p>
        </div>
          <div className="flex min-h-full flex-1 flex-col justify-center p-4 py-12 lg:px-8 ">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-customGreen p-4 rounded ">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    TÍTULO:
                  </label>
                  <div className="mt-2">
                    <input
                      id="titulo"
                      type="text"
                      value={titulo}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      AUTOR:
                    </label>
                    <div className="mt-2">
                      <input
                        id="autor"
                        type="text"
                        value={autor}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label
                      htmlFor="edicao"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      EDIÇÃO:
                    </label>
                    <div className="mt-2">
                      <input
                        id="edicao"
                        type="text"
                        value={edicao}
                        onChange={(e) => setEdition(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                <div>
                <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="p-2 mb-4 border text-gray-900 bg-white border-gray-300 rounded-md mb-">
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor="filter"
                      className="block text-sm font-medium leading-6 text-gray-900"
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
                      id="Emprestimo"
                      name="filter"
                      value="Emprestimo"
                      
                    />
                    <label htmlFor="livro">Emprestimo</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="renovao"
                      name="filter"
                      value="titulo"
                     
                    />
                    <label htmlFor="titulo">Renovação</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="autor"
                      name="filter"
                      value="autor"
                     
                    />
                    <label htmlFor="autor">Devolução</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
                  <button
                    type="submit"
                    className={`flex w-full justify-center rounded-md bg-customGre px-3 py-1.5 text-sm font-semibold leading-6 text-[rgba(25,28,63,1)] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isLoading ? "pointer-events-none" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <FaSpinner className="animate-spin mr-2" />
                    ) : (
                      "INCLUIR"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EmprestimoAdmin;
