<script setup lang="ts">
import PokemonListItem from "./PokemonListItem.vue"
import { usePokemonsStore } from "../store/usePokemonsStore"

const store = usePokemonsStore()
</script>

<template>
  <div class="list">
    <PokemonListItem
      v-for="pokemon in store.pokemons"
      :pokemon
      :key="pokemon.id"
    />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 20px;
  justify-items: stretch;
  max-width: 800px;
  margin: 0 auto;
}
</style>
