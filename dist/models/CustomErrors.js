"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonNaoEncontradoError = void 0;
class PokemonNaoEncontradoError extends Error {
    constructor(nomeOuId) {
        super(`Pokémon "${nomeOuId}" não encontrado.`);
        this.name = "PokemonNaoEncontradoError";
    }
}
exports.PokemonNaoEncontradoError = PokemonNaoEncontradoError;
