export type PokemonsListResponseResultItem = {
  name: string
  url: string
}

export type PokemonsListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonsListResponseResultItem[]
}

export type PokemonDataResponse = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

export type PokemonListItem = {
  id: number
  name: string
  image: string
  isFavourite: boolean
}
