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
README.md
## ⚙️ Instalação

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO

## 📚 Conceitos utilizados

O projeto utiliza os seguintes conceitos:

- TypeScript com modo strict
- Interfaces
- Classes e métodos
- Encapsulamento com `private`
- Funções tipadas
- Arrays e objetos
- `map()`, `find()`, `filter()` e `some()`
- Promises
- `async/await`
- `try/catch`
- Fetch API
- JSON
- Leitura e escrita de arquivos
- Consumo de API externa

## 🌐 API utilizada

O projeto utiliza a PokeAPI para consultar os dados dos Pokémon.

API:

https://pokeapi.co/

## 💾 Persistência

Os Pokémon cadastrados são armazenados no arquivo:

```text
pc_box.json
