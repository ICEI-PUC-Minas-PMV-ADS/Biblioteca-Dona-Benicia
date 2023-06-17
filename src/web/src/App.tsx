import Home from "./Screen/Home";
import Login from "./Screen/login";
import LoginAdmin from "./Screen/loginAdmin";
import Livro from "./Screen/cadastroLivro";
import Person from "./Screen/usuario";
import ConsultaAcervo from "./Screen/consultaAcervo";
import Atualizar from "./Screen/atualizarCadastro";
import Cliente from "./Screen/menuCliente";
import AcervoCliente from "./Screen/AcervoCliente";
import EmprestimoAdmin from "./Screen/EmprestimoAdmin"
import Multa from "./Screen/multaAdmin"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/Cliente" />} />
          <Route path="/Cliente" element={<Cliente />} />
          <Route path="/EmprestimoAdmin" element={<EmprestimoAdmin />} />
          <Route path="/Multa" element={<Multa />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin/Login" element={<LoginAdmin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AcervoCliente" element={<AcervoCliente />} />
          <Route path="/Atualizar" element={<Atualizar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Livro" element={<Livro />} />
          <Route path="/Person" element={<Person />} />
          <Route path="/ConsultaAcervo" element={<ConsultaAcervo />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
