# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Beatriz Castilho tem 24 anos, é estudante na área de TI, atualmente atua como desenvolvedor back-end em uma empresa full stack. Gosta muito de conhecer nova pessoas e realizar novas amizades, atualmente está pensando em realizar alguma outra formação em sua área. Seus hobbies são sair com os amigos para festas e viagens e praticar esportes e academia.

Jhonatan Rodrigues é sócio de uma empresa de Telecom, responsável pelo atendimento ao cliente e visitas técnicas, dando auxílio aos técnicos e tirando dúvidas de seus clientes, atualmente ele está em meio a sua faculdade de Tecnologia em Redes de Computadores para se especializar ainda mais em sua área de atuação. Jhonatan como um amante da natureza tem como seu hobbie principal realizar trilhas, acampar e visitar praias com seus amigos, além de é claro jogar em seu tempo de sobra.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Beatriz Castilho    |Organizar minhas atividades do dia a dia (RF-02 e 11)          |Aproveitar melhor meu tempo e desenvolver mais atividades          |
|Beatriz Castilho    |Ter uma agenda pessoal com minhas atividades e desenvolver uma rotina (RF-01 e 02)| Ter mais disciplina e disposição durante meu dia |
|Beatriz Castilho    |Visualizar minhas atividades passadas e meu tempo gasto durante a semana (RF-03)|Me organizar melhor para minhas próximas atividades e aproveitar melhor meu tempo|
|Jhonatan Rodrigues  |Um software que me auxilie a ver as atividades da minha equipe (RF-01 e 02)|Melhorar o aproveitamento de tempo e o rendimento da minha equipe|
|Jhonatan Rodrigues  |Uma tela de Login que me encaminhe até a página principal do site (RF-04)|Obter segurança e organização para o acesso do site|
|Jhonatan Rodrigues  |Ter um menu onde eu possa retornar a tela de Login (RF-06 e 10)|Facilidade e organização dentro do site|
|Jhonatan Rodrigues  |Poder editar ou excluir uma atividade já criada em minha agenda (RF-05)|Para alterar informações durante o desenvolvimento de alguma atividade da equipe|
|Beatriz Castilho    |Poder filtrar a minha agenda por mês semana ou dia (RF-07, 08 e 09)|Para ter um melhor modo de visualizar minhas atividades|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve apresentar na página principal uma agenda padrão, com dia, mês e ano | ALTA  | 
|RF-02| O site deve permitir que seu usuário possa criar e gerenciar atividades em um determinado horário na agenda | ALTA  |
|RF-03| O site deve permitir ao usuário visualizar suas atividades passadas em sua agenda | MÉDIA |
|RF-04| O site deve ter uma tela de login que encaminhe o usuário até a tela principal | MÉDIA  |
|RF-05| O site deve permitir que o usuário possa editar e excluir uma atividade já criada na agenda | MÉDIA |
|RF-06| O site deve ter um menu de usuário | MÉDIA |
|RF-07| O site deve permitir que o usuário visualize a agenda filtrada por mês | BAIXA |
|RF-08| O site deve permitir que o usuário visualize a agenda filtrada por semana | BAIXA |
|RF-09| O site deve permitir que o usuário visualize a agenda filtrada por dia | BAIXA |
|RF-10| O site deve permitir que o usuário possa retornar até a tela de login | BAIXA |
|RF-11| O site deve permitir separar as atividades por horário | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) |  ALTA  | 
|RNF-02| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA  | 
|RNF-03| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  |  MÉDIA | 
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA  | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022 |
|RE-02| O aplicativo deve limitar-se às tecnologias básicas da Web no Front-End                                |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho                                           |
