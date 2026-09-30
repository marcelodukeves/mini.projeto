"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeApiService = void 0;
const CustomErrors_1 = require("../models/CustomErrors");
class PokeApiService {
    async buscarPokemon(nomeOuId) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`);
            if (!resposta.ok) {
                throw new CustomErrors_1.PokemonNaoEncontradoError(nomeOuId);
            }
            const dados = await resposta.json();
            const pokemon = {
                id: dados.id,
                nome: dados.name,
                tipos: dados.types.map((item) => item.type.name),
                altura: dados.height,
                peso: dados.weight
            };
            return pokemon;
        }
        catch (erro) {
            if (erro instanceof CustomErrors_1.PokemonNaoEncontradoError) {
                throw erro;
            }
            console.log("Erro ao consultar a PokeAPI.");
            throw erro;
        }
    }
}
exports.PokeApiService = PokeApiService;
