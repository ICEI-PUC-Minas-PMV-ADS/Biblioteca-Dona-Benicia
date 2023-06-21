import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { isTokenExpired } from "./jwt";

// Import your components
import Home from "./Screen/Home";
import Login from "./Screen/login";
import LoginAdmin from "./Screen/loginAdmin";
import Person from "./Screen/usuario";
import Cliente from "./Screen/menuCliente";
import EmprestimoAdmin from "./Screen/EmprestimoAdmin";
import Multa from "./Screen/multaAdmin";
import AcervoCliente from "./Screen/AcervoCliente";
import Atualizar from "./Screen/atualizarCadastro";
import Livro from "./Screen/cadastroLivro";
import ConsultaAcervo from "./Screen/consultaAcervo";
import Reservas from "./Screen/reservas";
import Cadastro from "./Screen/usuarioAdmin";

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = !isTokenExpired(); // Implement this function according to your authentication logic

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.path }} />
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/person" element={<Person />} />
          <Route path="/Cadastro" element={<Cadastro />} />

          <Route
            path="/Home"
            element={<PrivateRoute component={Home} path="/Home" />}
          />
          <Route
            path="/Reservas"
            element={<PrivateRoute component={Reservas} path="/Reservas" />}
          />
          <Route
            path="/Cliente"
            element={<PrivateRoute component={Cliente} path="/Cliente" />}
          />
          
          <Route
            path="/Multa"
            element={<PrivateRoute component={Multa} path="/Multa" />}
          />
          <Route
            path="/AcervoCliente"
            element={
              <PrivateRoute component={AcervoCliente} path="/AcervoCliente" />
            }
          />
          <Route
            path="/Atualizar"
            element={<PrivateRoute component={Atualizar} path="/Atualizar" />}
          />
          <Route
            path="/Livro"
            element={<PrivateRoute component={Livro} path="/Livro" />}
          />
          <Route
            path="/ConsultaAcervo"
            element={
              <PrivateRoute component={ConsultaAcervo} path="/ConsultaAcervo" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
