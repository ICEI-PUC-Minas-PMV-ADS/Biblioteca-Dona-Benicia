import { FaPlus, FaSearch, FaFileAlt, FaMoneyBill } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { RiLock2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const people = [
  {
    id:"1",
    name: "Inclusão de obra catalogação",
    role: <FaPlus className="text-white text-2xl" />,
    path: "/livro",
  },
  {
    id:"2",
    name: "Consulta ao Acervo",
    role: <FaSearch className="text-white text-2xl" />,
    path: "/ConsultaAcervo",
  },
  {
    id:"3",
    name: "Registro empréstimo / devolução",
    role: <FaFileAlt className="text-white text-2xl" />,
    path: "/EmprestimoAdmin",
  },
  {
    id:"4",
    name: "Emissão de multa",
    role: <FaMoneyBill className="text-white text-2xl" />,
    path: "/Multa",
  },
  {
    id:"5",
    name: "Cadastro de usuário",
    role: <BsPersonPlusFill className="text-white text-2xl" />,
    path: "login",
  },
  {
    id:"6",
    name: "Bloqueio e desbloqueio de usuário",
    role: <RiLock2Line className="text-white text-2xl" />,
    path: "",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-customGre">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              {/* Conteúdo do link */}
            </a>
          </div>
        </nav>
        <div className="bg-customGre font-bold text-customGreen p-4 my-4">
          <p className="text-center">Bem-vindo, administrador.</p>
        </div>
      </header>
      <main className="flex-grow bg-customGre">
        <ul className="divide-y divide-gray-100 p-4">
          {people.map((person, index) => ( // Adicionando o parâmetro "index" para gerar uma chave única
            <Link
              key={person.id} // Usando o índice como chave única
              to={person.path}
              className="group flex items-center py-4 bg-customGreen hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer mb-4"
            >
              <div className="min-w-0 flex-auto">
                <p className="text-lg font-semibold leading-6 text-white">{person.name}</p>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end bg-[rgba(25,28,63,1)] rounded-full p-2">
                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              </div>
            </Link>
          ))}
        </ul>
      </main>
      <div className="mx-4 mb-1">
        <Footer />
      </div>
    </div>
  );
}
