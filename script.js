const BASE_URL_API_POKEMON = "https://pokeapi.co/api/v2/pokemon/"

async function iniciarProcesso() {
    const idPokemon = document.getElementById("idPokemon").value
    const pokemon = await buscarPokemon(idPokemon)

    document.getElementById("imagemPokemon").src = pokemon.sprites.front_default
    document.getElementById("nomePokemon").innerText = pokemon.name
}

async function buscarPokemon(idPokemon){
    const response = await fetch(BASE_URL_API_POKEMON + idPokemon)
    const pokemon = await response.json()
    
    return pokemon
}

