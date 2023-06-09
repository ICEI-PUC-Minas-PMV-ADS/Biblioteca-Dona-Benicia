import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


import ConsultaAcervo from '../../src/Screen/consultaAcervo';

describe('ConsultaAcervo', () => {
  it('should render the page correctly', () => {
    render(
      <BrowserRouter>
        <ConsultaAcervo />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('DIGITE O TERMO PARA A PESQUISA:')).toBeInTheDocument();
    // Adicione mais asserções para verificar a renderização correta da página
    // ...
  });

  it('should perform a search by title', async () => {
    render(
      <BrowserRouter>
        <ConsultaAcervo />
      </BrowserRouter>
    );

    const searchTermInput = screen.getByLabelText('DIGITE O TERMO PARA A PESQUISA:');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    fireEvent.change(searchTermInput, { target: { value: 'Meu Título' } });
    fireEvent.click(searchButton);

    // Adicione asserções para verificar se a pesquisa por título foi realizada corretamente
    // ...
  });

  it('should perform a search by author', async () => {
    render(
      <BrowserRouter>
        <ConsultaAcervo />
      </BrowserRouter>
    );

    const searchTermInput = screen.getByLabelText('DIGITE O TERMO PARA A PESQUISA:');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    fireEvent.change(searchTermInput, { target: { value: 'Nome do Autor' } });
    fireEvent.click(searchButton);

    // Adicione asserções para verificar se a pesquisa por autor foi realizada corretamente
    // ...
  });

  it('should display a message when no results are found', async () => {
    render(
      <BrowserRouter>
        <ConsultaAcervo />
      </BrowserRouter>
    );

    const searchTermInput = screen.getByLabelText('DIGITE O TERMO PARA A PESQUISA:');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    fireEvent.change(searchTermInput, { target: { value: 'Termo de Pesquisa sem Resultados' } });
    fireEvent.click(searchButton);

    expect(screen.getByText('Não foi possível localizar.')).toBeInTheDocument();
  });
});
