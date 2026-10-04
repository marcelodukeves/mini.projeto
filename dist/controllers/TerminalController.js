"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalController = void 0;
const PokeApiService_1 = require("../services/PokeApiService");
const BoxService_1 = require("../services/BoxService");
const CustomErrors_1 = require("../models/CustomErrors");
const textFormatters_1 = require("../util/textFormatters");
class TerminalController {
    api = new PokeApiService_1.PokeApiService();
    catalogo = new BoxService_1.CatalogoPokemon();
    async executar() {
        try {
            // Carrega os Pokémon salvos no arquivo JSON
            await this.catalogo.carregar();
            const pikachu = await this.api.buscarPokemon("pikachu");
            const charmander = await this.api.buscarPokemon("charmander");
            console.log("=== Pokémon encontrado ===");
            console.log((0, textFormatters_1.formatarPokemon)(pikachu));
            console.log("Pikachu adicionado:", this.catalogo.adicionar(pikachu));
            console.log("Charmander adicionado:", this.catalogo.adicionar(charmander));
            console.log("Tentando adicionar Pikachu novamente:", this.catalogo.adicionar(pikachu));
            console.log("=== Pokémon no catálogo ===");
            console.log(this.catalogo.listar());
            console.log("Removendo Charmander:", this.catalogo.remover(4));
            console.log("=== Catálogo após remover Charmander ===");
            console.log(this.catalogo.listar());
            console.log("Pikachu está no catálogo:", this.catalogo.temPokemon(25));
            console.log("Charmander está no catálogo:", this.catalogo.temPokemon(4));
            // Salva o catálogo no arquivo JSON
            await this.catalogo.salvar();
            console.log("Catálogo salvo no pc_box.json!");
            // Teste de Pokémon inexistente
            const pokemonInexistente = await this.api.buscarPokemon("pokemonxyz");
            console.log(pokemonInexistente);
        }
        catch (erro) {
            if (erro instanceof CustomErrors_1.PokemonNaoEncontradoError) {
                console.log(`Erro: ${erro.message}`);
                return;
            }
            console.log("Ocorreu um erro inesperado.");
        }
    }
}
exports.TerminalController = TerminalController;
