# Introdução

O projeto faz parte do Projeto de Desenvolvimento de um Sistema Sociotécnico Inovador e se propõe adesenvolver um sistema de apoio à gestão da Biblioteca Dona Benícia da Escola Estadual Ari da Franca. O desenvolvimento desse software baseia-se na descrição previamente fornecida que segue. 

“O sistema deve dar apoio à gestão de uma biblioteca escolar. Os títulos da biblioteca podem ser livros, periódicos e outros. Cada título tem um número de exemplares, um período máximo de empréstimo e uma descrição. Um título só pode ser emprestado a leitores cadastrados, que pagarão multas se ultrapassarem o período de empréstimo. Professores cadastrados podem pedir reservas de determinados títulos, para que sejam consultados apenas na biblioteca durante a oferta de determinada disciplina. O produto deve permitir o tratamento de perdas e dar apoio ao controle de assinaturas de periódicos.” 

O modelo de processo adotado no projeto é o modelo Cascata. A escolha desse modelo ocorreu devido ao mesmo ser melhor aplicável a sistema cujos requisitos são bem definidos e pelo fato de exigir uma documentação mais rígida e completa, ideal nesse caso, já que se trata de um trabalho acadêmico. Além disso, uma vantagem adicional de se utilizar esse modelo é o fato de que o desenvolvimento do software se deu ao longo da disciplina de Engenharia de Software cuja ementa segue o modelo cascata. Dessa forma, na medida com que as aulas avançavam, as tarefas desenvolvidas acompanhavam o conteúdo estudado. 

Dessa forma, todas as etapas envolvidas no processo de desenvolvimento do software serão descritas na ordem com que são mencionadas no diagrama do modelo Cascata, representado a seguir.

---imagem cascata


Seguindo o modelo definido acima, a estruturação do documento se dá em seções nas quais em cada uma será apresentado os resultados do desenvolvimento de cada uma das atividades que compõem o modelo Cascata.

Na seção seguinte, está definido o cronograma com as atividades para desenvolvimento do projeto e os responsáveis pelas mesmas. 

Nas seções subsequentes, são apresentados os seguintes documentos: 

Um documento de especificação de requisitos, incluindo: Diagramas de Casos de Uso e descrição dos cenários de casos de uso. 

Um documento de projeto arquitetural, incluindo um Diagrama de Componentes. 

Um documento de projeto detalhado, incluindo: Diagrama de Classes, Diagrama de Sequência, Diagrama de Comunicação e Diagrama de Atividades, todos eles diagramas definidos na UML. 
 

## Cronograma

Conforme mencionado anteriormente, as atividades envolvidas no processo de desenvolvimento do software seguem o modelo Cascata. Dessa forma, as tarefas envolvidas em cada uma das etapas serão tratadas como issues no GitHub.

Esse repositório, além de permitir o compartilhamento do código do sistema desenvolvido, possui um mecanismo muito eficiente para montar um cronograma de atividades com seus respectivos deadlines, responsáveis, dentre outros utilitários tais como tags que possibilitam caracterizar as tarefas e inserção de peso para que as tarefas mais importantes sejam priorizadas. Sendo assim, as issues criadas no GitLab compuseram o cronograma que foi seguido ao longo de todo o desenvolvimento.

Tal cronograma é apresentado de maneira simplificada na tabela abaixo que conta não só com uma breve descrição da tarefa como também com o prazo da mesma e os responsáveis.

--- imagem cronograma


## Requisitos

Baseando-se nos requisitos que foram levantados de diversos potenciais usuários do sistema, foi possível assimilar uma lista de funcionalidades a serem desenvolvidas e estimar o esforço de trabalho que será realizado. Considerando um tempo de pouco mais de três meses para o desenvolvimento do sistema, que é o prazo acordado, foi possível organizar um cronograma de trabalho que engloba todas essas atividades e mostra que, mesmo considerando que a equipe não vai se dedicar exclusivamente ao projeto, é viável entregar o sistema no prazo, desde que haja comprometimento dos membros em dedicar um tempo considerável ao desenvolvimento.

Quanto à viabilidade técnica do projeto, baseando-se nos requisitos levantados não foi verificado nenhum desafio do ponto de vista tecnológico que possa comprometer o desenvolvimento do sistema, visto que não há nenhuma funcionalidade excepcionalmente complexa que vá demandar o uso de técnicas muito avançadas e difíceis de serem aplicadas. Os integrantes do grupo estão plenamente preparados para implementar as funcionalidades levantadas, pois todas estas se encontram dentro das capacidades técnicas da equipe. Por isso, foi concluído que o projeto é também perfeitamente viável do ponto de vista tecnológico.

Também não foram verificados outros requisitos externos que pudessem comprometer o desenvolvimento do sistema, como necessidade de integração com
outros sistemas, que não existe porque o sistema foi pensado para, a princípio, funcionar independentemente de quaisquer outras aplicações. Por isso, após as
análises descritas acima foi possível concluir que o desenvolvimento deste projeto é perfeitamente viável.

## Elicitação de Requisitos

Na fase de Elicitação de Requisitos, três técnicas foram utilizadas:
  ● Entrevista,
  ● Diagrama de casos de uso;
  ● Cenários.
Para a aplicação da entrevista, em particular, definiu-se três tipos de usuários principais do sistema, nos quais se enquadram a figura dos alunos, professores e o diretor da escola.

A entrevista semi-estruturada foi realizada com o diretorda escola, dois alunos e um professor, objetivando contemplar perguntas referentes à forma com que esses usuários interagiriam com sistemas de gestão de bibliotecas. Além disso, a entrevista permitiu levantar mais requisitos além daqueles já especificados anteriormente

## Cenários
A seguir é apresentada a documentação dos Casos de Uso por meio da técnica de Cenários. Dessa forma, são apresentados os cenários referentes a cada um dos casos de uso representados no diagrama de Casos de Uso apresentado anteriormente.

Nome do Cenário (1): Gerenciar obras.
Ator: Funcionário.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Escolher uma das opções entre: Cadastro, Alteração e Exclusão.
2. Escolher o tipo de obra: obras que incluem livros, teses e dissertações ou
periódicos.
3. Entrar com as informações da obra: código único da obra, código do conjunto destas obras, código de localização do conjunto destas obras, nome, autor(es),
editora, edição, forma de aquisição e observações sobre a mesma.
4. Confirmar os dados.
5. A obra é armazenada no banco de dados da biblioteca.
Fluxo alternativo: As informações não foram preenchidas em sua integridade.
3.1 Apresentar um aviso ao funcionário  informando que alguma informação está faltando.
Pós-condição:
O cadastro é realizado com sucesso e a obra fica disponível para ser emprestada.


Nome do Cenário (2): Gerenciar usuários.
Ator: Funcionário e Usuário.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Escolher uma das opções entre: Cadastro, Alteração, Exclusão e Consulta.
2. Escolher o tipo de usuário: Professor, Aluno e Funcionário.
3. Entrar com as informações pessoais do usuário: nome, cpf, endereço, telefone e informações institucionais.
4. Confirmar os dados.
5. O usuário é armazenado no banco de dados da biblioteca.
Fluxo alternativo: As informações não foram preenchidas em sua integridade.
3.1 Apresentar um aviso ao funcionário informando que alguma informação está
faltando.
Fluxo alternativo: As informações preenchidas correspondem a um usuário já
cadastrado.
3.1 Apresentar um aviso ao funcionário informando que o usuário já está
cadastrado no sistema.
Pós-condição:
O cadastro é realizado com sucesso e o usuário pode fazer uso dos serviços da
biblioteca.

Nome do Cenário (3): Gerenciar perdas de obras.
Ator: Funcionário.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Entrar com o login do usuário.
2. Dentre as obras sob posse do usuário, selecionar a obra perdida .
3. Alterar o status da obra.
Fluxo alternativo: A obra foi perdida.
3.1 Marcar a obra como perdida.
3.2 Notificar o usuário quanto ao prazo para substituição da obra.
Fluxo alternativo: A obra perdida foi encontrada ou substituída.
3.1 Marcar a obra perdida como disponível.
Pós-condição:
Status da obra atualizado.

Nome do Cenário (4): Gerar relatórios.
Ator: Funcionário.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Escolher um tipo de relatório: Listar a média de obras emprestadas por tipo de
usuário, Listar as obras mais emprestadas, Listar as obras perdidas e Listar as
obras em atraso para devolução.
2. Confirmar escolha.
3. Gerar o relatório.
Pós-condição:
Relatório é gerado e apresentado na tela para o bibliotecário.

Nome do Cenário (5): Solicitar reserva de obra para disciplina .
Ator: Professor.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Caso de Uso “Consultar obra”.
2. Selecionar a obra que se deseja utilizar na disciplina.
3. Associar um exemplar da obra à disciplina ministrada, fornecendo o seu código.
Fluxo alternativo: A obra não existe na biblioteca.
1.1 Caso de Uso “Sugerir compra/assinatura de obra”.
Fluxo alternativo: A obra não está emprestada.
2.1 Caso de Uso “Solicitar reserva”.
Pós-condição:
Um exemplar do título fica disponível especialmente para aos alunos da disciplina.

Nome do Cenário (6): Consultar obra.
Ator: Usuário.
Pré-condição: Nenhuma.
Fluxo normal:
1. Entrar com uma das informações da obra: código do conjunto das obras, código
de localização do conjunto destas obras, nome ou autor(es).
2. Confirmar busca.
3. Buscar pela obra nas bases de dados.
4. Retornar obras que correspondem ao que foi pesquisado.
Fluxo alternativo: Nenhuma obra corresponde ao que foi pesquisado.
4.1 Apresentar um aviso ao usuário.
Pós-condição:
As obras encontradas são retornadas e apresentadas ao usuário.

Nome do Cenário (7): Solicitar reserva.
Ator: Usuário.
Pré-condição: Estar logado no sistema (login e senha validados) e ter pesquisado
pela obra desejada com sucesso.
Fluxo normal:
1. Selecionar a obra que se deseja reservar.
2. Confirmar a reserva da obra.
3. A entrada do usuário na fila de espera da obra é feita com sucesso.
Pós-condição:
O usuário recebe um aviso informando que o mesmo entrou na fila de espera da obra e quando a mesma estiver disponível ele será notificado por e-mail. Após o recebimento do e-mail, o usuário terá um dia útil para realizar o empréstimo da obra antes que a mesma se torne disponível para o próximo da fila.

Nome do Cenário (8): Solicitar empréstimo.
Ator: Usuário e Funcionário.
Pré-condição: Funcionário estar logado no sistema (login e senha validados).
Fluxo normal:
1. Caso de Uso “Consultar obra”.
2. Selecionar a obra que se deseja fazer o empréstimo.
3. Confirmar empréstimo da obra.
4. Inserir a senha do bibliotecário responsável por entregar a obra.
5. Inserir o código e senha do usuário que está fazendo o empréstimo da obra.
Fluxo alternativo: A obra desejada não está disponível.
3.1 Apresentar um aviso ao usuário.
3.2 Caso de Uso “Solicitar reserva”.
Fluxo alternativo: O usuário possui débitos que devem ser quitados.
3.1 Apresentar um aviso ao usuário.
3.2 Caso de Uso “Solicitar pagamento de multa”.
Fluxo alternativo: O usuário já atingiu o limite de empréstimos. (Aluno Graduação:
5 obras e demais usuários: 7 obras)
3.1 Apresentar um aviso ao usuário informando que o empréstimo não pode ser
realizado.
Pós-condição:
O livro é emprestado com sucesso.

Nome do Cenário (9): Acompanhar fila de espera.
Ator: Usuário.
Pré-condição: Estar logado no sistema e estar na Fila de Espera de alguma obra.
Fluxo normal:
1. Acessar “Fila de Espera”.
2. Selecionar a obra que se deseja consultar a posição na fila de espera.
Engenharia de software Página 12 de 32
Pós-condição:
A posição na fila de espera é exibida na tela.

Nome do Cenário (10): Renovar empréstimo.
Ator: Usuário.
Pré-condição: Estar logado no sistema e ter um empréstimo em seu nome.
Fluxo normal:
1. Acessar “Meus Empréstimos”.
2. Selecionar a obra que se deseja renovar o empréstimo.
3. Solicitar renovação de empréstimo.
Fluxo alternativo: A obra desejada não está disponível.
3.1 Apresentar um aviso ao usuário.
3.2 Caso de Uso “Solicitar reserva”.
Fluxo alternativo: O usuário possui débitos que devem ser quitados.
3.1 Apresentar um aviso ao usuário.
3.2 Caso de Uso “Solicitar pagamento de multa”.
Pós-condição:
O empréstimo é renovado com sucesso.

Nome do Cenário (11): Sugerir compra/assinatura de obra.
Ator: Usuário.
Pré-condição: Estar logado no sistema (login e senha validados).
Fluxo normal:
1. Acessar “Sugestões para aquisição”.
2. Entrar com as informações da obra: tipo da obra (livros, periódicos, teses e
dissertações),nome, autor(es), editora, edição e observações sobre a mesma.
3. Confirmar os dados.
4. Enviar sugestões.
Pós-condição:
A sugestão é enviada com sucesso para o e-mail geral da biblioteca.

Nome do Cenário (12): Solicitar pagamento de multa
Ator: Usuário e Bibliotecário.
Pré-condição: Usuário estar logado no sistema e possuir débitos pendentes.
Fluxo normal:
1. Acessar “Solicitar pagamento”.
2. Selecionar a opção “Imprimir relatório de multa”.
3. Pagar a multa.
4. Apresentar comprovante de pagamento ao bibliotecário.
Engenharia de software Página 13 de 32
Pós-condição:
O funcionário registra o pagamento e os débitos do usuário são quitados.

Nome do Cenário (13): Informar perda de obra
Ator: Usuário.
Pré-condição: Usuário estar logado no sistema (login e senha validados).
Fluxo normal:
1. Acessar “Meus empréstimos” e selecionar o empréstimo relativo à perda.
2. Selecionar a opção “Informar perda”.
3. Preencher as informações sobre como se deu a perda.
4. Caso de Uso “Gerenciar perdas de obras”.
Pós-condição:
Um aviso na tela é exibido, notificando o usuário quanto ao prazo para substituição
da obra.


## Especificação de requisitos
REQUISITOS FUNCIONAIS:

REQUISITOS NÃO FUNCIONAIS:


## Projeto - Projeto preliminar de arquitetura

## Projeto - Design preliminar - Figma

