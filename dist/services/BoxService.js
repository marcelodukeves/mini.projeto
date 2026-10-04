"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoPokemon = void 0;
const promises_1 = require("node:fs/promises");
class CatalogoPokemon {
    pokemons = [];
    arquivo = "pc_box.json";
    adicionar(pokemon) {
        const existe = this.pokemons.find((item) => item.id === pokemon.id);
        if (existe) {
            return false;
        }
        this.pokemons.push(pokemon);
        return true;
    }
    listar() {
        return this.pokemons;
    }
    remover(id) {
        const quantidadeAntes = this.pokemons.length;
        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
        return this.pokemons.length < quantidadeAntes;
    }
    temPokemon(id) {
        return this.pokemons.some((pokemon) => pokemon.id === id);
    }
    async salvar() {
        const dados = JSON.stringify(this.pokemons, null, 2);
        await (0, promises_1.writeFile)(this.arquivo, dados, "utf-8");
    }
    async carregar() {
        try {
            const dados = await (0, promises_1.readFile)(this.arquivo, "utf-8");
            const pokemons = JSON.parse(dados);
            if (!Array.isArray(pokemons)) {
                console.log("O pc_box.json não contém uma lista válida.");
                return;
            }
            this.pokemons = pokemons;
        }
        catch (erro) {
            console.log("Não foi possível carregar o pc_box.json.");
        }
    }
}
exports.CatalogoPokemon = CatalogoPokemon;
