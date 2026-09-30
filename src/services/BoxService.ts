import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";
import { PokemonNaoEncontradoError } from "../models/CustomErrors";

export class PokeApiService {

  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo> {

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`
      );

      if (!resposta.ok) {
        throw new PokemonNaoEncontradoError(nomeOuId);
      }

      const dados: PokemonApiResponse = await resposta.json();

      const pokemon: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((item) => item.type.name),
        altura: dados.height,
        peso: dados.weight
      };

      return pokemon;

    } catch (erro) {

      if (erro instanceof PokemonNaoEncontradoError) {
        throw erro;
      }

      console.log("Erro ao consultar a PokeAPI.");
      throw erro;
    }
  }
}