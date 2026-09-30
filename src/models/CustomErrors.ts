export class PokemonNaoEncontradoError extends Error {

  constructor(nomeOuId: string) {
    super(`Pokémon "${nomeOuId}" não encontrado.`);

    this.name = "PokemonNaoEncontradoError";
  }
}