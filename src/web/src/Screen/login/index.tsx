import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/livraria.png';
import {saveToken} from '../../jwt'

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'password');
    requestBody.append('username', username);
    requestBody.append('password', password);

    try {
      const response = await fetch('https://donabenicia-dev.azurewebsites.net/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody.toString(),
      });

      if (response.ok) {
        // Login bem-sucedido, redirecionar para a página inicial
        const data = await response.json();
        saveToken(data.access_token)
        console.log(data);

        navigate('/Cliente'); // Redireciona para a rota '/home'
      } else {
        // Login falhou, trate o erro apropriadamente
        setError('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      // Erro ao fazer a requisição, trate o erro apropriadamente
      setError('Ocorreu um erro ao fazer o login. Tente novamente mais tarde.');
    }
  };


  return (
    <div
    className=" min-h-screen bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}  >
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-full">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="../"
          alt="Your Company"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-4 rounded "> 
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-texto">
         Entrar
        </h2> 
        <p className="mt-10 text-center text-sm font-medium leading-6 tracking-tight text-texto">Entrar na sua conta de usuário
</p>

    <form className="space-y-6" onSubmit={handleLogin}>
      <label className="block text-sm font-medium leading-6 text-texto" >
        Username:
        </label>
        <div className="mt-2">

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
     
        <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-texto">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/Person" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    não possui cadastro?
                  </a>
                </div>
              </div>
    
        <div className="mt-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      
      {error && <p className="text-red-500">{error}</p>}
      <button className="flex w-full justify-center rounded-md bg-texto px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 type="submit">Login</button>
    </form>
    </div>
      </div>
    </div>
  );
};

export default Login;
