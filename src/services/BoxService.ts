import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export class CatalogoPokemon {

  private pokemons: PokemonResumo[] = [];

  private arquivo = "pc_box.json";

  adicionar(pokemon: PokemonResumo): boolean {
    const existe = this.pokemons.find(
      (item) => item.id === pokemon.id
    );

    if (existe) {
      return false;
    }

    this.pokemons.push(pokemon);
    return true;
  }

  listar(): PokemonResumo[] {
    return this.pokemons;
  }

  remover(id: number): boolean {
    const quantidadeAntes = this.pokemons.length;

    this.pokemons = this.pokemons.filter(
      (pokemon) => pokemon.id !== id
    );

    return this.pokemons.length < quantidadeAntes;
  }

  temPokemon(id: number): boolean {
    return this.pokemons.some(
      (pokemon) => pokemon.id === id
    );
  }

  async salvar(): Promise<void> {
    const dados = JSON.stringify(
      this.pokemons,
      null,
      2
    );

    await writeFile(
      this.arquivo,
      dados,
      "utf-8"
    );
  }

  async carregar(): Promise<void> {
    try {
      const dados = await readFile(
        this.arquivo,
        "utf-8"
      );

      const pokemons = JSON.parse(dados);

      if (!Array.isArray(pokemons)) {
        console.log(
          "O pc_box.json não contém uma lista válida."
        );
        return;
      }

      this.pokemons = pokemons;

    } catch (erro) {
      console.log(
        "Não foi possível carregar o pc_box.json."
      );
    }
  }
}