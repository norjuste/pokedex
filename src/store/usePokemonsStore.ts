import { defineStore } from "pinia"
import { ref } from "vue"
import { fetchPokemons, getPokemonData } from "../api"
import type { PokemonListItem } from "../types"

export const usePokemonsStore = defineStore("pokemons", () => {
  const POKEMONS_LIST_LIMIT = 10
  const pokemons = ref<PokemonListItem[]>([])

  const init = async () => {
    const { data } = await fetchPokemons({ limit: POKEMONS_LIST_LIMIT })

    const pokemonsData = await Promise.all(
      data.results.map(async ({ url }) => (await getPokemonData({ url })).data)
    )

    const formattedData = pokemonsData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      isFavourite: false,
    }))

    pokemons.value = formattedData
  }

  const setFavouritePokemon = ({ id }: { id: number }) => {
    pokemons.value = pokemons.value.map((pokemon) => {
      pokemon.isFavourite = pokemon.id === id ? !pokemon.isFavourite : false
      return pokemon
    })
  }

  return { pokemons, init, setFavouritePokemon }
})
