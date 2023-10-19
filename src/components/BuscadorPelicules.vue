<script setup>
import Pelicula from "./Pelicula.vue";
</script>

<script>
export default {
  props: ['data'],
  data: () => ({
    busqueda: "",
  }),
  watch: {
    busqueda: {
      handler: function () {
        fetch(
          "https://api.themoviedb.org/3/search/movie?api_key=dbd6ee16566e0886c836fac7975ce6da&query=" +
            this.busqueda
        )
          .then((response) => response.json())
          .then((data) => {
            this.$emit('data', data.results);
          });
      },
      deep: true,
    },
  },
  methods: {},
};
</script>

<template>
  <v-toolbar dense floating class="grey-lighten-5 mb-3" rounded="xl">
    <v-text-field v-model="busqueda"></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>
