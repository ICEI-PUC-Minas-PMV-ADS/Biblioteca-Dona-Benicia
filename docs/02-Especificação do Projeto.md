# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

| Clara Lima|                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|<img width="200" alt="Professora" src="https://user-images.githubusercontent.com/61097764/226141647-723e9c5e-f7e0-4eb9-9036-a12bfb0dca73.png">|**Idade:** 45 anos - **Ocupação:**  Professora |Aplicativos: Facebook, Whatsapp, Instagram.|
|**Motivações:**  Clara é apaixonada por livros e literatura, e está sempre procurando maneiras de incentivar seus alunos a lerem mais. Ela quer ter acesso fácil aos livros para poder recomendá-los para seus alunos. |**Frustrações:** Às vezes, Clara precisa reservar um livro para sua turma, mas acaba descobrindo que ele já está emprestado ou fora de estoque. Isso atrasa o processo de leitura em sua turma.|**Hobbies, História:** Clara adora ler romances e poesia nas horas vagas, e também gosta de organizar clubes de leitura com seus amigos. 

Clara cresceu em uma família de leitores e sempre teve um amor pela literatura. Ela se formou em Letras e tornou-se professora para poder compartilhar essa paixão com seus alunos. | 

| Ricardo Silva |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|<img width="180" alt="Ricardo" src="https://user-images.githubusercontent.com/61097764/226142193-98627c96-605c-4615-99ea-b0c75029f949.jpg">|**Idade:** 37  anos - **Ocupação:**  Diretor de escola |Aplicativos: Facebook, Whatsapp, Instagram, Twitter.|
|**Motivações:** Ricardo Este administrador é responsável pela gestão geral da escola, incluindo a biblioteca. Ele valoriza a capacidade de monitorar o uso da biblioteca e acessar relatórios de uso para identificar áreas de melhoria e tomar decisões informadas sobre a aquisição de novos materiais. Ele também pode usar esses dados para entender melhor as necessidades dos estudantes e professores e ajustar as políticas e procedimentos da biblioteca de acordo. |**Frustrações:** Apesar de sua dedicação, Ricardo muitas vezes se sente frustrada com a falta de recursos disponíveis para a escola. Ele sabe que sua equipe é capaz de oferecer uma educação excelente, mas muitas vezes se sente limitada pela falta de verba e de equipamentos adequados. |**Hobbies, História:** Quando estava na faculdade Ricardo sonhava em um dia fazer a diferença na vida de alguém por isso sempre procura ajudar aqueles que precisam.| 

| Ana Ferreira |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|<img width="222" alt="Ana" src="https://user-images.githubusercontent.com/61097764/226142596-fe1e2cdc-d5d2-47bf-9b1d-8c25a2a3c036.jpg">|**Idade:** 42 anos - **Ocupação:**  Bibliotecária |Aplicativos: Facebook, Whatsapp, Instagram.|
|**Motivações:** Ana é responsável por manter a biblioteca da escola organizada e atualizada. Ela é apaixonada por livros e acredita que a leitura é fundamental para o desenvolvimento dos alunos. Ela quer oferecer um ambiente acolhedor e agradável para os estudantes que frequentam a biblioteca. |**Frustrações:** Ana fica frustrada quando não consegue localizar um livro que um aluno precisa ou quando os livros são devolvidos com atraso ou em más condições. Ela também fica irritada quando os alunos fazem barulho ou não respeitam as regras da biblioteca. |**Hobbies, História:** Ana é formada em biblioteconomia e trabalha na escola há cinco anos. Ela se orgulha de ter transformado a biblioteca em um espaço moderno e agradável para os alunos. Ela está sempre em busca de novos títulos para adicionar ao acervo da biblioteca e incentivar a leitura entre os estudantes. Ana adora ler livros de ficção e não-ficção em seu tempo livre. Ela também gosta de pintar e desenhar.| 

| Miguel Rodrigues  |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|<img width="180" alt="Miguel" src="https://user-images.githubusercontent.com/61097764/226143457-280ca7ec-a198-4cd8-a737-f19bb9872dd7.jpg">|**Idade:** 17 anos - **Ocupação:**  aluno do ensino médio  |Aplicativos: Facebook, Whatsapp, Instagram.|
|**Motivações:** Miguel é um aluno do ensino médio que adora ler livros de ficção científica e fantasia. Ele quer expandir seus horizontes e descobrir novos títulos e autores. |**Frustrações:** Miguel fica frustrado quando não consegue encontrar um livro específico que está procurando. Ele também fica chateado quando os livros que ele quer estão sempre emprestados. |**Hobbies, História:** Miguel é um aluno dedicado e frequenta a biblioteca regularmente. Ele é um dos membros do clube do livro da escola e adora discutir suas leituras com outros alunos. Ele está sempre em busca de novos títulos e autores para adicionar à sua lista de leitura.| 

| Fernanda Diniz   |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|<img width="222" alt="Fernanda" src="https://user-images.githubusercontent.com/61097764/226142873-668d440f-5c8d-4bae-be82-05625cdc75c1.jpg">|**Idade:** 11 anos - **Ocupação:**  Estudante  |Aplicativos: Facebook, Whatsapp, Instagram.|
|**Motivações:** Fernanda é uma aluna do ensino fundamental que adora histórias em quadrinhos e livros ilustrados. Ela quer descobrir novas histórias e personagens interessantes. |**Frustrações:** Fernanda fica frustrada quando os livros que ela quer estão emprestados ou quando ela não consegue encontrar um livro que seja apropriado para a sua idade. |**Hobbies, História:** Fernanda é uma aluna entusiasmada que adora frequentar a biblioteca da escola. Ela participa do clube do livro da escola e adora discutir suas leituras com outros alunos. Ela está sempre em busca de novos títulos e personagens interessantes para ler e descobrir. Júlia gosta de desenhar e fazer artesanato. Ela também é uma ávida jogadora de jogos de tabuleiro.| 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
