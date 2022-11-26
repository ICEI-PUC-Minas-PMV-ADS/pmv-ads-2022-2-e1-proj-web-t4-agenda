# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

### Resultado do teste de êxito - CT-01:
A imagem a seguir demonstra o resultado do teste deste requisito, sendo que o usuário inseriu os seus dados no formulário de login e o sistema não retornou nenhum alerta de erro, e o que encaminhou até a tela principal:

![image](https://user-images.githubusercontent.com/113395332/204091027-bdf6da3a-ad20-4326-b8dd-c6b3351b1b0b.png)



### Conclusão - CT-01:
Ao clicar em Login o usuário é encaminhado até a tela principal, sem nenhuma verificação de preenchimento.<br>
Futuramente com o uso de <i>scripts</i> mais elaborados em dada linguagem de programação, a equipe de desenvolvimento pretende aprimorar os testes de validação de usuário e senha e implementando também a criação de usuário, utilizando banco de dados.

<hr>

### Resultado do teste de êxito - CT-02:
Assim que selecionado alguma das opções, a tabela da agenda irá mudar de formato se adequando a qual foi selecionada.<br><br>
Conforme podemos visualizar nas imagens abaixo:
![image](https://user-images.githubusercontent.com/113395332/204095367-45956c73-c251-4747-89f1-9a056283d318.png)
![image](https://user-images.githubusercontent.com/113395332/204095453-16ed62a2-842c-4a42-be7a-7ce7fd720fd4.png)
![image](https://user-images.githubusercontent.com/113395332/204095525-1dddf4c1-50ee-4f33-acbc-6da76946eb58.png)

### Conclusão - CT-02:
O sistema funciona corretamente sem nenhum erro durante os testes, atendendo aos seus requisitos.

<hr>

### Resultado do teste de êxito - CT-03:
Ao clicar em qualquer horário da agenda será aberto uma aba para adicionar o nome a sua tarefa, após isso ela é registrada corretamente dentro do horário selecionado.

![image](https://user-images.githubusercontent.com/113395332/204101604-a3a7c86d-088f-4ad8-9235-f1c8ef4415da.png)

### Conclusão - CT-03:
O sistema funciona corretamente sem nenhum erro durante os testes, atendendo aos seus requisitos.<br>
Futuramente a equipe pretende adicionar mais opções como um titulo e descrição para a criação da tarefa separadamente.

<hr>

### Resultado do teste de êxito - CT-04:
Acessando o menu de usuário é possível até o momento somente retornar até a tela principal. Conforme abaixo:

![image](https://user-images.githubusercontent.com/113395332/204095587-0f67495d-b929-470c-8ce8-481febdfb4f5.png)

### Conclusão - CT-04:
O sistema funciona corretamente sem nenhum erro durante os testes, atendendo aos seus requisitos.<br>
Futuramente a equipe pretende adicionar a aba de perfil e de atividades, conforme ja são apresentadas no menu.

<hr>

### Resultado do teste de êxito - CT-05:
Ambos botões permitem que o usuário retorne e avance a data atual, conforme previsto em seu requisito.

![image](https://user-images.githubusercontent.com/113395332/204101814-d13f0310-1a8e-4cbc-8760-42cd1833472c.png)

### Conclusão - CT-04:
O sistema funciona corretamente sem nenhum erro durante os testes, atendendo aos seus requisitos.<br>
Futuramente a equipe pretende adicionar uma funcionalidade que permita o usuário selecionar uma determinada data para que seja direcionada até ela.
