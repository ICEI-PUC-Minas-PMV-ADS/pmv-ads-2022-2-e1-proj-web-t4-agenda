# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|     Caso de teste     | CT-01 – Página de login                                                                                                                                                                                          |
| :-------------------: |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF-04 - Uma tela de Login que encaminhe o usuário até a página principal do site.                                                                                                                                |
|   Objetivo do Teste   | Verificar se a página está direcionando o usuário para os serviços corretos.                                                                                                                                     |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-agenda/src/index.html <br> 3) Visualizar a página de login <br> 4) Clicar no botão de Login |
|  Critérios de Êxito   | Ao clicar no link o usuário deve ser direcionado para a página correta.                                                                                                                                          |

|     Caso de teste     | CT-02 – Teste nos filtros de mês / semana / dia                                                                                                                                          |
| :-------------------: |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF - 07 - 08 - 09 - Poder filtrar na agenda por mês semana ou dia                                                                                                                        |
|   Objetivo do Teste   | Verificar se os filtros estão funcionando de forma adequada.                                                                                                                             |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-agenda/src/home.html e clicar nos filtros de mês, semana e dia <br> |
|  Critérios de Êxito   | Verificar se os filtros estão aplicando as configurações corretas.                                                                                                                       |

|     Caso de teste     | CT-03 – Criação de tarefas                                                                                                                                                                                                                                |
| :-------------------: |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF-02 - O site deve permitir que seu usuário possa criar e gerenciar atividades em um determinado horário na agenda                                                                                                                                       |
|   Objetivo do Teste   | Verificar se a criação de tarefas está funcionando corretamente.                                                                                                                                                                                          |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-agenda/src/home.html <br> 3) Clicar em algum horário ou dia na agenda <br> 4) Preencher os campos e salvar corretamente |
|  Critérios de Êxito   | Após preencher as informações a tarefa deverá estar criada no dia e horário selecionado                                                                                                                                                                   |

|     Caso de teste     | CT-04 – Menu de usuário                                                                                                                                                                                                                                  |
| :-------------------: |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF-06 - 10 - Ter um menu onde o usuário possa retornar a tela de Login.                                                                                                                                                                                  |
|   Objetivo do Teste   | Verificar se o botão está retornando a tela de login.                                                                                                                                                                                                    |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-agenda/src/home.html <br> 3) Acessar o menu de usuário no canto superior esquerdo <br> 4) Selecionar a opção sair <br> |
|  Critérios de Êxito   | Após realizar o passo a passo o usuário deverá retornar a pagina de Login                                                                                                                                                                                |

|     Caso de teste     | CT-05 – Verificar atividades passadas                                                                                                                                                                                    |
| :-------------------: |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF-03 - O site deve permitir ao usuário visualizar suas atividades passadas em sua agenda                                                                                                                                |
|   Objetivo do Teste   | Verificar se o usuário consegue verificar suas atividades passadas                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-agenda/src/home.html <br> 3) Clicar nas setas no topo superior esquerdo da agenda <br> |
|  Critérios de Êxito   | Ao clicar nas setas devera voltar ou avançar os dias da agenda                                                                                                                                                           |
