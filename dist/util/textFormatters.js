"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarPokemon = formatarPokemon;
function formatarPokemon(pokemon) {
    return `
ID: ${pokemon.id}
Nome: ${pokemon.nome}
Tipos: ${pokemon.tipos.join(", ")}
Altura: ${pokemon.altura}
Peso: ${pokemon.peso}
`;
}
