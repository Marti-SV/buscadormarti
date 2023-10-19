<script setup>
import Pelicula from "./Pelicula.vue";
</script>

<script>
export default {
  props: ['pelicules'],
  methods: {},
};
</script>

<template>
  <v-sheet>
    <v-row justify="center">
      <v-col v-for="pelicula in pelicules" sm="6" md="4" lg="3" cols="12">
        <Pelicula :data="pelicula" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
