import Home from "./Screen/Home";
import Login from "./Screen/login";
import Livro from "./Screen/cadastroLivro";
import Person from "./Screen/usuario";
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
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Livro" element={<Livro />} />
          <Route path="/Person" element={<Person />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
