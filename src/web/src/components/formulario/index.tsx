import { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import api from "../../services/ApiLivros";

const MyForm: React.FC = () => {
  const [titulo, setTitle] = useState("");
  const [autor, setAuthor] = useState("");
  const [edicao, setEdition] = useState("");
  const [localPublicacao, setPublicationLocation] = useState("");
  const [editora, setPublisher] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [img, setImg] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
    } else {
      setPdf(null);
      alert("Please select a PDF file.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const livroData = {
        titulo,
        autor,
        edicao,
        localPublicacao,
        editora,
        img,
        pdf,
      };
      const livroResponse = await api.post("/livros", livroData);
      livroData;

      console.log("passou");
      const item_id = livroResponse.data._id;
      console.log(item_id);
      console.log(img);
      // Cria uma nova instância do FormData para enviar a imagem
      if (img && item_id) {
        const formData = new FormData();
        formData.append("file", img);
        const imagemResponse = await api.post(
          `/livros/imagens/${item_id}`,
          formData
        );
        console.log("sou resposta");
        console.log(imagemResponse.data);
      }
      console.log(livroResponse.data);

      if (pdf) {
        const formData = new FormData();
        formData.append("file", pdf);
        const pdfResponse = await api.post(`/livros/pdfs/${item_id}`, formData);
        console.log(pdfResponse.data);
        alert("Novo livro inserido");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar o PDF.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inclusão de Obra
            </h2>
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    LOCAL DE PUBLICAÇÃO:
                  </label>
                  <div className="mt-2">
                    <input
                      id="localPublicacao"
                      type="text"
                      value={localPublicacao}
                      onChange={(e) => setPublicationLocation(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    EDITORA:
                  </label>
                  <div className="mt-2">
                    <input
                      id="editora"
                      type="text"
                      value={editora}
                      onChange={(e) => setPublisher(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  INCLUSÃO DE IMAGEM:
                </label>

                <div className=" flex flex-col items-center justify-center ">
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt="Selected"
                      className="max-w-full h-auto"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
                      <span className="text-gray-400">Select an image</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    INCLUSÃO DE OBRA PDF:
                  </label>
                  <div className="flex flex-col items-center justify-center ">
                    {pdf ? (
                      <embed
                        src={URL.createObjectURL(pdf)}
                        type="application/pdf"
                        width="100%"
                        height="600px"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
                        <span className="text-gray-400">Select a PDF file</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handlePdfChange}
                      className="mt-4"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-customGre px-3 py-1.5 text-sm font-semibold leading-6 text-[rgba(25,28,63,1)] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    INCLUIR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <div className="mx-4 mb-1">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MyForm;
