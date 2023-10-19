# AlleFood Backend
Este é o Back-end do desafio final do curso Explorer do RocketSeat

## Tecnologias
O Back-end foi desenvolvido NodeJS.

E conta com as seguintes bibliotecas: 
- Knex
- Multher
- Crypto
- Path
- BcryptJS
- JsonWebToken
- Fs
- Express
- DotEnv
- Cors

## Organização:
A linguagem para o banco de dados utilizada é o SQL Lite, no entanto, foi utilizado knex para facilitar uma possível troca de linguagem posterior. 
As Migrations são aquelas que iniciarão as tabelas ou droparam as mesmas.
Os Controllers são responsáveis por "juntar" os serviços de execução, onde os dados são tratados, e a execução direta com o banco de Dados.toruies
Os Repositories são servem para ter as funções que irão ter acesso direto ao banco como criação, alteração e busca.
Os Middlewares são aqueles que farão verificações importantes antes dos dados serem coletados.
A pasta Utils é onde deixamos funções que serão utilizadas durante todo o programa. 
Os Providers fornecem serviços importantes para o funcionamento geral do sistema.
E as Routes irão capturar as requisões feitas pelo cliente e retornam as ações necessárias para as requisições. 

