<script setup>
import LlistaPelicules from "./LlistaPelicules.vue";
import BuscadorPelicules from "./BuscadorPelicules.vue";
</script>

<script>
export default {
  components: { BuscadorPelicules },
  data: () => ({
    pelicules: "",
  }),
  methods: {
    setResultatsBuscador(dades) {
      if (dades.length !== 0) {
        this.pelicules = dades;
      }
    },
  },
};
</script>

<template>
  <v-container>
    <h1 class="text-center text-h2 pb-10 font-weight-medium">
      Buscador de Pel·lícules
    </h1>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet>
            <v-btn
              class="bg-light-green-lighten-2"
              height="65px"
              rounded="xl"
              text="Chat"
              block
              @click="$router.push('/chat/')"
            ></v-btn>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet>
            <BuscadorPelicules v-on:data="setResultatsBuscador" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <LlistaPelicules :pelicules="pelicules" />
  </v-container>
</template>
