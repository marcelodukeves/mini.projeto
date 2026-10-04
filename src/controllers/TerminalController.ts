import { PokeApiService } from "../services/PokeApiService";
import { CatalogoPokemon } from "../services/BoxService";
import { PokemonNaoEncontradoError } from "../models/CustomErrors";
import { formatarPokemon } from "../util/textFormatters";

export class TerminalController {

  private api = new PokeApiService();
  private catalogo = new CatalogoPokemon();

  async executar(): Promise<void> {

    try {

      // Carrega os Pokémon salvos no arquivo JSON
      await this.catalogo.carregar();

      const pikachu = await this.api.buscarPokemon("pikachu");
      const charmander = await this.api.buscarPokemon("charmander");

      console.log("=== Pokémon encontrado ===");
      console.log(formatarPokemon(pikachu));

      console.log(
        "Pikachu adicionado:",
        this.catalogo.adicionar(pikachu)
      );

      console.log(
        "Charmander adicionado:",
        this.catalogo.adicionar(charmander)
      );

      console.log(
        "Tentando adicionar Pikachu novamente:",
        this.catalogo.adicionar(pikachu)
      );

      console.log("=== Pokémon no catálogo ===");
      console.log(this.catalogo.listar());

      console.log(
        "Removendo Charmander:",
        this.catalogo.remover(4)
      );

      console.log("=== Catálogo após remover Charmander ===");
      console.log(this.catalogo.listar());

      console.log(
        "Pikachu está no catálogo:",
        this.catalogo.temPokemon(25)
      );

      console.log(
        "Charmander está no catálogo:",
        this.catalogo.temPokemon(4)
      );

      // Salva o catálogo no arquivo JSON
      await this.catalogo.salvar();

      console.log("Catálogo salvo no pc_box.json!");

      // Teste de Pokémon inexistente
      const pokemonInexistente =
        await this.api.buscarPokemon("pokemonxyz");

      console.log(pokemonInexistente);

    } catch (erro) {

      if (erro instanceof PokemonNaoEncontradoError) {
        console.log(`Erro: ${erro.message}`);
        return;
      }

      console.log("Ocorreu um erro inesperado.");
    }
  }
}