# Projeto Crud

# Instalando o projeto:

Clone o repositório em sua máquina ou baixe o zip e baixe as suas dependências com npm i dentro da pasta src e posteriormente na pasta backend

# Tecnologias utilizadas:
*Reactjs
<br>
*Sequelize (para conexão com o banco)
<br>
*Postgreesql
<br>
*Bootstrap
<br>
*Axios para requisição API
<br>
# Iniciando o projeto:
Antes de rodar o banco, verifique se o arquivo db.config.js está de acordo o db selecionado, nesse caso tanto a senha quanto o nome do banco precisam já estarem criados no pgAdmin.
<br>
![1](https://user-images.githubusercontent.com/68347193/181038042-f7ce8f01-8fd7-42af-8277-f841d15788e5.PNG)
<br>
Para iniciar a conexão com o banco, abra a pasta backend e rode o comando node server.js, o resultado apresentado deve ser o seguinte:
<br>
![2](https://user-images.githubusercontent.com/68347193/181038050-dcc86f37-b006-4c45-ba79-e58f1b02ff82.PNG)
<br>
Já em outro terminal abra a pasta src do projeto e execute o npm start para iniciar o projeto.

# Por fim..

O projeto será iniciado no localhost http://localhost:8080, certifique-se que nenhuma outra aplicação está na porta em questão

# Sugestão de melhoria futura ao projeto:
- Estudar a utilização do knex para consulta, tendo que vista que utilizei sequelize para tal função por nunca ter trabalhado com nenhuma aplicação full-stack;
- Realizar a verificação se o cnpj em questão já estava criado no Db




