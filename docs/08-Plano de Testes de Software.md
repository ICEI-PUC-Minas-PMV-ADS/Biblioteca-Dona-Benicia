# Plano de Testes de Software

# Teste de Usabilidade - Requisito RF-001

## Objetivo

O objetivo deste teste de usabilidade é avaliar a facilidade de uso do formulário de cadastro de usuários do sistema, levando em consideração os critérios de usabilidade, tais como clareza, simplicidade e eficiência.

## Pré-requisitos

- Acesso ao sistema;
- Navegador web compatível.

## Tarefas

1. Acessar o formulário de cadastro de usuários no sistema;
2. Preencher os campos de cadastro com informações fictícias;
3. Submeter o formulário de cadastro;
4. Verificar se uma mensagem de sucesso é exibida após a submissão do formulário;
5. Realizar uma busca pelo usuário cadastrado anteriormente;
6. Verificar se as informações do usuário são exibidas corretamente;
7. Atualizar as informações do usuário cadastrado anteriormente;
8. Verificar se as informações foram atualizadas corretamente;
9. Remover o usuário cadastrado anteriormente;
10. Verificar se uma mensagem de confirmação é exibida antes de remover o usuário.

## Critérios de avaliação

- Clareza na apresentação das informações;
- Facilidade de compreensão do formulário de cadastro;
- Facilidade de navegação pelo sistema;
- Facilidade de execução das tarefas.

## Resultados esperados

Espera-se que o sistema apresente um formulário de cadastro de usuário claro e de fácil compreensão, com campos de entrada bem definidos e rótulos legíveis. Além disso, o sistema deve permitir uma navegação fácil e intuitiva, com a capacidade de realizar as tarefas de cadastro, busca, atualização e remoção de usuários de forma eficiente e sem complicações.

## Observações

- Este teste de usabilidade é uma avaliação preliminar do sistema, não considerando ainda a integração com o banco de dados;
- Os dados inseridos no formulário de cadastro não serão armazenados no banco de dados.

## Conclusão

Após a realização do teste de usabilidade, conclui-se que o sistema apresenta um formulário de cadastro claro e bem definido, com campos de entrada legíveis e uma navegação intuitiva. As tarefas de cadastro, busca, atualização e remoção de usuários foram realizadas com facilidade e sem complicações. Recomenda-se que o sistema seja integrado com o banco de dados para uma avaliação completa.

# Teste de Usabilidade - Requisito RF-002

## Objetivo

O objetivo deste teste de usabilidade é avaliar a facilidade de uso do sistema de gerenciamento de obras, levando em consideração os critérios de usabilidade, tais como clareza, simplicidade e eficiência.

## Pré-requisitos

- Acesso ao sistema;
- Navegador web compatível.

## Tarefas

1. Acessar o link "Inclusão de obra" e verificar se o formulário de cadastro de obra é de fácil compreensão e preenchimento.
2. Acessar o link "Catalogação" e verificar se a busca de obras é clara e eficiente.
3. Acessar o link "Consulta ao Acervo" e verificar se a busca de obras é clara e eficiente.
4. Acessar o link "Registro empréstimo / devolução" e verificar se o formulário de registro é de fácil compreensão e preenchimento.
5. Acessar o link "Emissão de multa" e verificar se o formulário de emissão de multa é de fácil compreensão e preenchimento.
6. Acessar o link "Cadastro de usuário" e verificar se o formulário de cadastro de usuário é de fácil compreensão e preenchimento.
7. Acessar o link "Bloqueio e desbloqueio de usuário" e verificar se o formulário de bloqueio e desbloqueio de usuário é de fácil compreensão e preenchimento.

## Critérios de avaliação

- Clareza na apresentação das informações;
- Facilidade de compreensão dos formulários;
- Facilidade de navegação pelo sistema;
- Facilidade de execução das tarefas.

## Resultados esperados

Espera-se que o sistema apresente uma interface clara e de fácil compreensão, com formulários bem definidos e links de navegação intuitivos. Além disso, o sistema deve permitir uma navegação fácil e eficiente pelos links de Inclusão de obra, Catalogação, Consulta ao Acervo, Registro empréstimo / devolução, Emissão de multa, Cadastro de usuário e Bloqueio e desbloqueio de usuário.

## Observações

- Este teste de usabilidade é uma avaliação preliminar do sistema, não considerando ainda a integração com o banco de dados;
- Os dados inseridos nos formulários não serão armazenados no banco de dados.

## Conclusão

Após a realização do teste de usabilidade, conclui-se que o sistema apresenta uma interface clara e bem definida, com links de navegação intuitivos e formulários de fácil compreensão. As tarefas de Inclusão de obra, Catalogação, Consulta ao Acervo, Registro empréstimo / devolução, Emissão de multa, Cadastro de usuário e Bloqueio e desbloqueio de usuário foram realizadas com facilidade e sem complicações. Recomenda-se que o sistema seja integrado com o banco de dados para uma avaliação completa.


# Plano de Teste - Consulta ao Acervo

## Visão Geral
O objetivo deste plano de teste é verificar o correto funcionamento da página "Consulta ao Acervo" do sistema Biblioteca Dona Benícia. Serão realizados testes para garantir que a página seja renderizada corretamente, que as buscas por título e autor retornem resultados corretos, e que a mensagem de ausência de resultados seja exibida quando apropriado.

## Configuração de Teste
- Dispositivo: Desktop com Windows 10
- Navegador: Google Chrome versão 92.0

## Casos de Teste
### 1. Renderização da Página
#### Descrição
Verificar se a página "Consulta ao Acervo" é renderizada corretamente.

#### Passos de Teste
1. Acessar a página "Consulta ao Acervo".
2. Verificar se o cabeçalho da página está visível.
3. Verificar se o campo de pesquisa por título está visível.
4. Verificar se o campo de pesquisa por autor está visível.
5. Verificar se o botão de busca está visível.
6. Verificar se a lista de resultados está visível.

#### Critérios de Sucesso
Todos os elementos mencionados nos passos de teste devem estar visíveis e a página deve ser renderizada corretamente.

### 2. Busca por Título
#### Descrição
Verificar se a busca por título retorna os resultados corretos.

#### Passos de Teste
1. Acessar a página "Consulta ao Acervo".
2. Digitar um título válido no campo de pesquisa por título.
3. Clicar no botão de busca.
4. Verificar se a lista de resultados exibe os itens correspondentes ao título pesquisado.

#### Critérios de Sucesso
A lista de resultados deve conter apenas os itens cujos títulos correspondam à pesquisa realizada.

### 3. Busca por Autor
#### Descrição
Verificar se a busca por autor retorna os resultados corretos.

#### Passos de Teste
1. Acessar a página "Consulta ao Acervo".
2. Digitar um autor válido no campo de pesquisa por autor.
3. Clicar no botão de busca.
4. Verificar se a lista de resultados exibe os itens correspondentes ao autor pesquisado.

#### Critérios de Sucesso
A lista de resultados deve conter apenas os itens cujos autores correspondam à pesquisa realizada.

### 4. Mensagem de Ausência de Resultados
#### Descrição
Verificar se é exibida a mensagem adequada quando nenhuma resultado é encontrado.

#### Passos de Teste
1. Acessar a página "Consulta ao Acervo".
2. Realizar uma busca que não retorne nenhum resultado.
3. Verificar se a mensagem "Não foi possível localizar resultados" é exibida.

#### Critérios de Sucesso
A mensagem de ausência de resultados deve ser exibida corretamente quando nenhuma resultado é encontrado.

