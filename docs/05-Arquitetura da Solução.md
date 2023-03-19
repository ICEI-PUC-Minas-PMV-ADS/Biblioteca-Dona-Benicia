# Arquitetura da Solução

O primeiro passo para solucionar os problemas definidos na etapa anterior delevantamento de Requisitos é a Arquitetura de Software. Dessa forma, o projeto arquitetural irá ligar os problemas à sua solução por meio da identificação dos componentes que farão parte do sistema bem como a definição das interfaces de comunicação entre eles. O Diagrama de Componentes abaixo representa, de forma alto nível, o projeto arquitetural do sistema de gerenciamento de bibliotecas.

![Diagrama de Componentes](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/diagramaDeComponentes.png)

Foi decidido utilizar o padrão de projeto MVC para o desenvolvimento dosistema, pois desta maneira poderemos organizar o código em três camadas bem definidas e isoladas, tornando-o muito mais facilmente reutilizável e escalável. Além disso, a separação do código em módulos isolados torna a manutenção do sistema muito mais simples, pois em aplicações que seguem este padrão o desenvolvimento e os testes podem ser realizados paralelamente e de maneira isolada entre as camadas. Mesmo que o desenvolvimento do sistema se torne um pouco mais complicado, devido à necessidade de se organizar o código corretamente entre os módulos de Modelo, Visão e Controle, acreditamos que utilizar o padrão MVC vai facilitar significativamente a cooperação entre os membros da equipe durante a fase de implementação. Uma representação desse modelo pode ser vista a seguir.

![MVC](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/mvc.png)

Já a Arquitetura de Repositório (Blackboard) mostrou ser um Padrão Arquitetural estático adequado uma vez que existirá um banco de dados único contemplando várias informações referentes às obras escritas por funcionários da biblioteca mas, acessados por todos os usuários da mesma. Ou seja, consistem em uma aplicação na qual os dados são gerados por um subsistema e usados por outros. Além disso, devido o número de consultas ao repositório, busca por obras, ser maior do que o número de escritas no mesmo referente aos cadastros de obras, esse padrão de compartilhamento de dados tende a ser muito eficiente.  Similarmente ao compartilhamento do banco de dados de obras, existe também o banco de dados que armazena as informações dos usuários cadastrados. Esse
banco é acessado pelo subsistemas: Cadastro de Usuários e Empréstimo de Obras uma vez que é necessário buscar pelo usuário sempre que o mesmo solicitar alguma obra da biblioteca emprestada. Dessa forma, tem-se uma adaptação do padrão arquitetural para englobar dois repositórios compartilhados entre os subsistemas do sistema de gestão de biblioteca.

![Repositório](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/mvc2.png)

Por fim, o padrão arquitetural Dutos e Filtros será utilizado para modelar a arquitetura do subsistema responsável pela Geração de Relatórios, funcionalidade disponível apenas para os funcionários da biblioteca. O padrão arquitetural Dutos e Filtros é ideal para esse subsistema uma vez que trata-se de uma aplicação de processamento de dados, “filtragem” dos dados que irão compor os relatórios. De forma simplificada, os dados de entrada se movem pelos dutos, enquanto os filtros são responsáveis por transformar os dados até que os mesmos sejam convertidos em dados de saída. Dessa forma, o diagrama abaixo ilustra o funcionamento do subsistema cujas entradas são as obras do acervo e os usuários e a saída é um Relatório de informando a média de obras emprestadas para cada tipo de usuário da biblioteca.

![Dutos](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/dutos.png)

Após definir o Modelo de Arquitetura do sistema, a próxima fase do projeto de software envolve o Modelo de Projeto que consiste em um projeto mais detalhado voltado à modelagem orientada a objetos. O desenvolvimento orientado a objetos idealiza um processo que considera objetos em todas as fases, iniciando pela Análise orientada a objeto que consiste em pensar nos objetos do sistema no momento do levantamento de requisitos junto ao cliente, conforme descrito na seção anterior. Após a análise ocorre o Projeto orientado a objeto que trata da transcrição do problema identificado na fase anterior em uma solução referente ao domínio do problema. Por fim, ocorre a transição do projeto para a Programação orientada a objeto que consiste em codificar a solução em uma linguagem de
programação orientada a objeto conforme será mostrado na seção seguinte.

Durante a fase de projeto, propriamente dita, algumas atividades são desenvolvidas de forma interativa, sendo elas: Definir o contexto do sistema,
Projetar a arquitetura, Identificar os objetos principais, Desenvolver os modelos de projeto e Especificar as interfaces entre objetos.

A Definição do contexto do sistema deu-se ainda na fase de Levantamento de requisitos por meio das técnicas de Entrevista, Diagrama de Casos de Uso e Descrição de Cenários.

O Projeto da arquitetura, apresentado na seção anterior, representa o primeiro passo para a projeto do sistema, dessa forma, o uso do Diagrama de Componentes facilitou a comunicação e planejamento do projeto, bem como a utilização de alguns padrões arquiteturais.

A Identificação dos objetos principais que irão compor o sistema baseia-se na Análise Gramatical da seção de Requisitos, sobretudo nas Descrições de Cenários.

Após identificar alguns dos potenciais objetos do sistema, o Desenvolvimento dos Modelos de Projeto volta-se para a apresentação dos objetos ou classes bem como seus relacionamentos. Nessa etapa, o Diagrama de Classes foi escolhido para representar, estaticamente, a estrutura das classes e os relacionamentos entre elas.

Nesse diagrama as interfaces entre objetos não são apresentadas apesar de terem sido incorporadas ao projeto a fim de deixar os objetos mais independentes para serem desenvolvidos em paralelo, tendo em vista que as interfaces evidenciam qual é a comunicação entre dois objetos. A seguir consta uma representação simplificada do Diagrama de Classes modelado. Nesse diagrama estão representadas as principais classes implementadas com seus relacionamentos, omitindo as telas que configuram a interface com o usuário e o banco de dados.

![Exemplo de Diagrama de Interfaces](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/diagramaDeInterfaces.png)

Além disso, os diagramas de interação Diagrama de Sequência e Diagrama de Comunicação e o diagrama de de Atividades representaram, dinamicamente, a interação entre os objetos.

O Diagrama de Sequência é ideal para detalhar determinados tipos de casos de uso, sobretudo aqueles que envolvem relacionamentos do tipo <<include>> e <<extend>>. Esse diagrama enfatiza a ordem temporal das ações conforme é possível perceber na representação abaixo que detalha o caso de uso Renovar empréstimo.

Nesse diagrama foram utilizados vários componentes do diagrama, como por exemplo, a caixa ALT que consiste em duas alternativas, ou seja, ou o sistema informa para o usuário que já existe uma reserva para a obra que o mesmo deseja renovar o empréstimo ou, caso não haja reserva, a renovação é feita com sucesso. Para a primeira opção, o usuário deve devolver a obra mas o sistema lhe sugere fazer uma solicitação de reserva para que, no futuro, pegue a obra novamente.
  
![Exemplo de Diagrama de Interação](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/diagramauso2.png)
  
Uma outra forma de representar a interação entre os objetos é por meio do Diagrama de Comunicação que, ao contrário do Diagrama de Sequência mostrado
acima, não enfatiza a ordem temporal. A utilização desse diagrama se deu para modelar o caso de uso Informar Perda de Obra que envolve os atores: Usuário e
funcionário e os objetos Obra e Banco de Dados conforme pode-se observar abaixo:

[Diagrama de Sequência](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/diagrmadeComunicacao.png)
  
  
Por fim, o Diagrama de Atividades representado abaixo ilustra umafuncionalidade muito importante para os Professores que pe Solicitar reserva de obra para disciplina. Essa funcionalidade envolve uma série de atividades e mais de um estado final, isso porque a obra que o professor precisa pode não existir, nesse
caso ele pode sugerir a compra ou assinatura. Além disso, caso exista, ela pode não estar disponível, o que gera ainda mais fluxos possíveis que atingem diferentes estados finais

![Diagrama de comunicação](https://github.com/ICEI-PUC-Minas-PMV-ADS/Biblioteca-Dona-Benicia/blob/main/docs/img/diagrama5.png) 
