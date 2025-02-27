# 🍽️ AlleFood Backend

🚀 Este é o **Back-end** do desafio final do curso **Explorer** da **Rocketseat**!

---

## 🛠️ Tecnologias Utilizadas
O **Back-end** foi desenvolvido utilizando **Node.js** e conta com as seguintes bibliotecas e ferramentas:

- 📦 **Knex** - Query builder para facilitar interações com o banco de dados
- 📂 **Multer** - Gerenciamento de uploads de arquivos
- 🔐 **Crypto** - Geração de valores criptográficos seguros
- 🛤️ **Path** - Manipulação de caminhos de arquivos e diretórios
- 🔑 **BcryptJS** - Hashing de senhas para segurança
- 🔑 **JsonWebToken (JWT)** - Autenticação baseada em tokens
- 📄 **FS (File System)** - Manipulação de arquivos no servidor
- 🚀 **Express** - Framework minimalista para Node.js
- 🛠️ **DotEnv** - Gerenciamento de variáveis de ambiente
- 🌍 **Cors** - Configuração de acessos e segurança de requisições

---

## 🏗️ Organização do Projeto
O **AlleFood Backend** segue uma estrutura modular para facilitar a manutenção e escalabilidade:

### 🗄️ **Banco de Dados**
- Utiliza **SQLite** como banco de dados.
- **Knex** é utilizado para facilitar futuras migrações para outros bancos de dados.

### 📜 **Migrations**
- Responsáveis por criar, atualizar ou remover tabelas do banco de dados de forma organizada.

### 🏗️ **Controllers**
- São responsáveis por **orquestrar** a lógica do sistema, unindo **serviços** e **regras de negócio**.

### 🗃️ **Repositories**
- Contêm as funções que interagem diretamente com o banco de dados, como **criação, alteração e busca de registros**.

### 🛡️ **Middlewares**
- Realizam **verificações e validações essenciais** antes que as requisições sejam processadas.

### 🔧 **Utils**
- Conjunto de **funções reutilizáveis** utilizadas em diferentes partes do projeto.

### 🔌 **Providers**
- Fornecem **serviços auxiliares** fundamentais para o funcionamento do sistema.

### 🌍 **Routes**
- Responsáveis por **capturar as requisições** do cliente e encaminhá-las para os devidos controladores.

---

## 📌 Considerações Finais
O **AlleFood Backend** foi projetado para ser **modular, escalável e seguro**. Caso tenha sugestões de melhoria ou encontre algum problema, fique à vontade para contribuir! 🚀🔥

