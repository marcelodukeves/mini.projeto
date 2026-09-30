import { PokeApiService } from "../services/PokeApiService";
import { CatalogoPokemon } from "../services/BoxService";

export class TerminalController {

  private api = new PokeApiService();
  private catalogo = new CatalogoPokemon();

  async executar(): Promise<void> {

    const pikachu = await this.api.buscarPokemon("pikachu");
    const charmander = await this.api.buscarPokemon("charmander");

    if (pikachu) {
      console.log(
        "Pikachu adicionado:",
        this.catalogo.adicionar(pikachu)
      );
    }

    if (charmander) {
      console.log(
        "Charmander adicionado:",
        this.catalogo.adicionar(charmander)
      );
    }

    if (pikachu) {
      console.log(
        "Tentando adicionar Pikachu novamente:",
        this.catalogo.adicionar(pikachu)
      );
    }

    console.log("Pokémon no catálogo:");
    console.log(this.catalogo.listar());

    console.log(
      "Removendo Charmander:",
      this.catalogo.remover(4)
    );

    console.log("Catálogo após remover Charmander:");
    console.log(this.catalogo.listar());

    console.log(
      "Tentando remover Pokémon inexistente:",
      this.catalogo.remover(999)
    );
  }
}