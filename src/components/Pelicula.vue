<script setup>
import InfoPelicula from "./InfoPelicula.vue";
</script>

<script>
export default {
  props: ["data"],
};
</script>
<template>
  <v-card class="mb-8" elevation="4">
    <v-card-title>
      <div class="font-weight-bold ms-1 mb-2 text-truncate">
        {{ data.title }}
      </div>
    </v-card-title>
    <v-img
      height="200"
      :src="'https://image.tmdb.org/t/p/w500' + data.poster_path"
      cover
      style="border-top: black"
    >
    </v-img>
    <v-container>
      <v-sheet class="ma-2">
        <InfoPelicula :data="data"/>
      </v-sheet>
    </v-container>
  </v-card>
</template>
