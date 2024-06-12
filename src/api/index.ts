import axios from "axios"
import type { PokemonsListResponse, PokemonDataResponse } from "../types"

const pokemonClient = axios.create({ baseURL: "https://pokeapi.co/api/v2/" })

export const fetchPokemons = ({ limit }: { limit: number }) => {
  const queryParams = limit !== undefined ? `?limit=${limit}` : ""

  return pokemonClient<PokemonsListResponse>(`pokemon${queryParams}`)
}

export const getPokemonData = ({ url }: { url: string }) =>
  pokemonClient<PokemonDataResponse>(url)
