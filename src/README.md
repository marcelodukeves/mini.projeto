# Pokédex TypeScript Lite

Projeto desenvolvido em Node.js e TypeScript para consultar informações de Pokémon através da PokeAPI.

## 🎯 Objetivo

Criar uma aplicação de terminal capaz de buscar Pokémon na PokeAPI, organizar os dados em um catálogo e salvar os Pokémon em um arquivo JSON.

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- PokeAPI
- JSON
- Fetch API
- Git e GitHub

## 📋 Funcionalidades

- Buscar Pokémon pelo nome ou ID.
- Consultar dados na PokeAPI.
- Mostrar nome, ID, tipos, altura e peso.
- Adicionar Pokémon ao catálogo.
- Impedir Pokémon duplicados.
- Listar Pokémon cadastrados.
- Remover Pokémon do catálogo.
- Verificar se um Pokémon está cadastrado.
- Salvar o catálogo no arquivo `pc_box.json`.
- Carregar Pokémon salvos anteriormente.
- Tratar erros quando o Pokémon não é encontrado.

## 📁 Estrutura do projeto

```text
src/
├── controllers/
│   └── TerminalController.ts
│
├── models/
│   ├── Pokemon.ts
│   └── CustomErrors.ts
│
├── services/
│   ├── PokeApiService.ts
│   └── BoxService.ts
│
├── util/
│   └── textFormatters.ts
│
└── main.ts

pc_box.json
package.json
tsconfig.json
```

## ⚙️ Pré-requisitos

Para executar o projeto é necessário ter instalado:

- Node.js
- npm
- Git

## 📥 Instalação

1. Clone o projeto:

```bash
git clone https://github.com/marcelodukeves/mini.projeto.git
```

2. Entre na pasta do projeto:

```bash
cd mini.projeto
```

3. Instale as dependências:

```bash
npm install
```

## ▶️ Execução
   Comando         | Descrição                                    |
 | --------------- | -------------------------------------------- |
 | `npm run dev`   | Executa o projeto em modo de desenvolvimento |
 | `npm run build` | Compila o TypeScript                         |
 | `npm start`     | Executa o projeto compilado                  |

## 🔎 Exemplo

Ao executar o projeto, a aplicação consulta a PokeAPI e apresenta informações do Pokémon:

```text
=== Pokémon encontrado ===

ID: 25
Nome: pikachu
Tipos: electric
Altura: 4
Peso: 60
```

O projeto também demonstra a adição, remoção e verificação de Pokémon no catálogo.

## 📚 Conceitos utilizados

- TypeScript com modo strict
- Interfaces
- Classes e métodos
- Encapsulamento com `private`
- Funções tipadas
- Arrays e objetos
- `map()`
- `find()`
- `filter()`
- `some()`
- Promises
- async/await
- try/catch
- Fetch API
- JSON
- Leitura e escrita de arquivos
- Consumo de API externa
- Programação Orientada a Objetos

## 🌐 API utilizada

O projeto utiliza a [PokeAPI](https://pokeapi.co/) para consultar os dados dos Pokémon.

## 💾 Persistência

Os Pokémon cadastrados são armazenados no arquivo:

```text
pc_box.json
```

O programa pode carregar os Pokémon salvos anteriormente e salvar novas alterações no catálogo.

## 🌿 GitFlow

O projeto utiliza branches para organizar o desenvolvimento:
 | Branch         | Descrição                                       |
 | -------------- | ----------------------------------------------- |
 | `main`         | Versão principal do projeto                     |
 | `develop`      | Branch de desenvolvimento                        |
 | `feat/pokedex` | Desenvolvimento das funcionalidades da Pokédex |
 | `docs/readme`  | Documentação do projeto                          |

## 🧪 Testes

Foram realizados testes de:

- Consulta de Pokémon existente.
- Consulta de Pokémon inexistente.
- Adição de Pokémon.
- Tentativa de adicionar Pokémon duplicado.
- Listagem do catálogo.
- Remoção de Pokémon.
- Verificação de Pokémon cadastrado.
- Salvamento no arquivo `pc_box.json`.
- Carregamento dos Pokémon salvos.
- Compilação do projeto com TypeScript.

Para verificar a compilação:

```bash
npm run build
```

Para executar os testes manuais:

```bash
npm run dev
```

## 📌 Kanban

Link do quadro Kanban:

> [Quadro Kanban — Pokédex TypeScript Lite](https://github.com/users/marcelodukeves/projects/2/views/1)

## 👨‍💻 Projeto

Projeto acadêmico desenvolvido para praticar Node.js, TypeScript, consumo de APIs, programação orientada a objetos, manipulação de arquivos JSON e utilização do Git/GitHub.