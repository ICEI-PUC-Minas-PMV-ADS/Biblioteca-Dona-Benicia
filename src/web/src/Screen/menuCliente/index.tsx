import { FaPlus, FaSearch, FaFileAlt, FaMoneyBill } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { RiLock2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/index";
import Avatar from "../../components/avatar/index";

const people = [
 
  {
    name: "Consulta ao Acervo",
    role: <FaSearch className="text-white text-2xl" />,
    path: "/AcervoCliente",
  },
  {
    name: "Minhas Reservas",
    email: "dries.vincent@example.com",
    role: <FaFileAlt className="text-white text-2xl" />,
    path: "",
  },
  {
    name: "Consulta Valor de Multa",
    email: "lindsay.walton@example.com",
    role: <FaMoneyBill className="text-white text-2xl" />,
    path: "",
  },
  {
    name: "Cadastro de usuário ",
    email: "courtney.henry@example.com",
    role: <BsPersonPlusFill className="text-white text-2xl" />,
    path: "/login",
  },
  
];

export default function ConsultaCliente() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-customGre">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
            
            </a>
          </div>
        </nav>
        <div className="bg-customGre font-bold text-customGreen p-4 my-4">
          <p className="text-center">Bem-vindo fique à vontade para consulta nossas obrar e gerenciar sua reserva.</p>
        </div>
      </header>
      <main className="flex-grow bg-customGre">
        <ul className="divide-y divide-gray-100 p-4">
          {people.map((person) => (
            <Link
              key={person.email}
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
