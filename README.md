# XY inc.

<p align="center">Esta API Foi Criada Com O Intuito De Cadastrar, Listar e Listar Por proximidade todos os "POIS" Pontos De Interesses</p><br>

## :barber: Funcionalidades
 -  [x] Cadastrar Um Novo Ponto De Interesse Em Um Banco De Dados
 -  [x] Listar Todos Os Pontos De Interesse já Cadastrados
 -  [x] Listar Por proximidade O Ponto De Interesse Mais Perto, Conforme Passada a Distância Em Metros

## :vertical_traffic_light: Rotas
 - API0Docs
    - http://localhost:3333/api-docs/

#### Utilizando o [Insomnia](https://insomnia.rest/)
 - Criar Pontos de interesses
    - https://localhost:3333/pointInterest/create
 - Listar todos os pontos de interesses cadastrados
    - https://localhost:3333/pointInterest/list
 - Listar os pontos de interesses por proximidade
    - https://localhost:3333/pointInterest/listDistance

## :anchor: Pré-requisitos

 -  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). 
 Além disso é bom ter um editor bom para trabalhar com o código como [VSCode](https://code.visualstudio.com/) se preferir pode usar também o [Insomnia](https://insomnia.rest/) para as rotas (preferencial)

## :rocket: Executando API

```bash
# Clone Este Repositório
$ git clone https://github.com/FlpSlva/Xy-inc.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Xy-inc

# Execute a aplicação
$ docker-compose up 

# Instalar Todas As Dependências
$ yarn 

# Subir Migrações Pro Banco De Dados
$ yarn typeorm migration:run 

# o servidor estará rodando na porta 3333

```
## :dart: Modo De Uso

 ### Após ter Executado a aplicação se redirecione para [API-docs](http://localhost:3333/api-docs/), e siga os exemplos a seguir

 - Para criar um novo Ponto De Interesse:
  
![swagger01](https://user-images.githubusercontent.com/84188331/153774682-332930ac-b777-4a47-bd85-b5ff310af9df.gif)

 - Para Listar Todos os Pontos De Interesses Cadastrados

![2022-02-13 17-46-00](https://user-images.githubusercontent.com/84188331/153774901-9362b80e-9be5-4bf5-8fbf-2fa6f8efb94f.gif)

 - Para Listar os Pontos De Interesse por proximidade, basta indicar qual o valor em metros "dMax" e em seguida indicar os pontos "x, e y"
  
![swagger03](https://user-images.githubusercontent.com/84188331/153775068-142a328e-8d54-4c86-8f7f-a61a1ba7acb9.gif)

## :hammer_and_wrench: Técnologias Utilizadas
 - [Node.js](https://nodejs.org/en/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Express](https://expressjs.com/pt-br/)
 - [Typeorm](https://typeorm.io/#/)
 - [Postgresql](https://www.postgresql.org/)
 - [Docker](https://www.docker.com/)
 - [Tsyringe](https://www.npmjs.com/package/tsyringe)
 
 
 ## :game_die: Informações Do Banco De Dados
  #### Username
    postgres
  #### Password
    root
  ### Database
    database_xy-inc
  

