# XY inc.

<p align="center">Esta API Foi Criada Com O Intuito De Cadastrar, Listar e Listar Por Aproximidade todos os "POIS" Pontos De Interesses</p><br>

<p align="center">
    <a href="#funcionalidades">Funcionalidades</a> - 
    <a href="#rotas">Rotas</a> -
    <a href="#pré-requisitos">Pré-requisitos</a>


</p>

## Funcionalidades
 -  [x] Cadastrar Um Novo Ponto De Interesse Em Um Banco De Dados
 -  [x] Listar Todos Os Pontos De Interesse já Cadastrados
 -  [x] Listar Por Aproximidade O Ponto De Interesse Mais Perto, Conforme Passada a Distância Em Metros

## Rotas
 - API0Docs
    - http://localhost:3333/api-docs/

#### Utilizando o [Insomnia](https://insomnia.rest/)
 - Criar Pontos de interesses
    - https://localhost:3333/pointInterest/create
 - Listar todos os pontos de interesses cadastrados
    - https://localhost:3333/pointInterest/list
 - Listar os pontos de interesses por aproximidade
    - https://localhost:3333/pointInterest/listDistance

## Pré-requisitos

 -  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). 
 Além disso é bom ter um editor bom para trabalhar com o código como [VSCode](https://code.visualstudio.com/) se preferir pode usar também o [Insomnia](https://insomnia.rest/) para as rotas (preferencial)

## Rodando a API

```bash
# Clone Este Repositório
$ git clone

# Acesse a pasta do projeto no terminal/cmd
$ cd Xy-inc

# Execute a aplicação
$ docker-compose up

# o servidor estará rodando na porta 3333

```
## Modo De Uso

 ### Após ter Executado a aplicação se redirecione para [API-docs](http://localhost:3333/api-docs/), e siga os exemplos a seguir

 - Para criar um novo Ponto De Interesse:
  
![swagger01](https://user-images.githubusercontent.com/84188331/153774682-332930ac-b777-4a47-bd85-b5ff310af9df.gif)

 - Para Listar Todos os Pontos De Interesses Cadastrados

![2022-02-13 17-46-00](https://user-images.githubusercontent.com/84188331/153774901-9362b80e-9be5-4bf5-8fbf-2fa6f8efb94f.gif)

 - Para Listar os Pontos De Interesse por Aproximidade, basta indicar qual o valor em metros "dMax" e em seguida indicar os pontos "x, e y"
  
![swagger03](https://user-images.githubusercontent.com/84188331/153775068-142a328e-8d54-4c86-8f7f-a61a1ba7acb9.gif)
