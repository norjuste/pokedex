<script setup lang="ts">
import { PokemonListItem } from "../types"
import { usePokemonsStore } from "../store/usePokemonsStore"

defineProps<{
  pokemon: PokemonListItem
}>()

const store = usePokemonsStore()
</script>

<template>
  <div class="card">
    <img class="image" :src="pokemon.image" />
    <h2 class="name">{{ pokemon.name }}</h2>
    <svg
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="star"
      @click="
        store.setFavouritePokemon({
          id: pokemon.id,
          isFavourite: !pokemon.isFavourite,
        })
      "
    >
      <polygon
        stroke="#fff"
        stroke-width="20"
        points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
        :class="{ filled: pokemon.isFavourite }"
      />
    </svg>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
}

.image {
  max-width: 150px;
}

.name {
  margin-bottom: 10px;
  color: #000;
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
}

.star {
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 40px;
  cursor: pointer;
  background-color: #fa2356;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.star:hover {
  background-color: #d21d48;
}

.star:active {
  background-color: #fa2356;
}

.star .filled {
  fill: #fff;
}
</style>
