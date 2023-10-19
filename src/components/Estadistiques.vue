<script setup></script>

<script>
export default {
  data: () => ({
    stats: "",
  }),
  mounted() {
    fetch("http://localhost:4000/getEstadistiques")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data;
      });
  },
};
</script>

<template>
  <div>
    <h1 class="text-center text-h2 mt-5 pb-10 font-weight-medium">
      Estadístiques
    </h1>
    <v-sheet class="grid" align="center">
      <v-row justify="space-around">
        <v-card
          width="400"
          height="200"
          elevation="4"
          class="ma-5"
          align="center"
          justify="center"
        >
          <v-card-title>
            <div class="font-weight-bold ms-1 mb-2 text-truncate">
              Percentatge de respostes correctes
            </div>
          </v-card-title>
          <div class="mt-5">
            <h1 class="text-h1" style="border-top: black">
              {{ stats.porcentaje_respuestas_correctas }}%
            </h1>
          </div>
        </v-card>
        <v-card
          width="400"
          height="200"
          elevation="4"
          class="ma-5"
          align="center"
          justify="center"
        >
          <v-card-title>
            <div class="font-weight-bold ms-1 mb-2 text-truncate">
              Temps de mitja
            </div>
          </v-card-title>
          <div class="mt-5">
            <h1 class="text-h1" style="border-top: black">
              {{ stats.promedio_tiempo }}s
            </h1>
          </div>
        </v-card>
        <v-card
          width="400"
          height="200"
          elevation="4"
          class="ma-5"
          align="center"
          justify="center"
        >
          <v-card-title>
            <div class="font-weight-bold ms-1 mb-2 text-truncate">
              Total de respostes encertades
            </div>
          </v-card-title>
          <div class="mt-5">
            <h1 class="text-h1" style="border-top: black">
              {{ stats.respostes_correctas }}
            </h1>
          </div>
        </v-card>
        <v-card
          width="400"
          height="200"
          elevation="4"
          class="ma-5"
          align="center"
          justify="center"
        >
          <v-card-title>
            <div class="font-weight-bold ms-1 mb-2 text-truncate">
              Total de respostes incorrectes
            </div>
          </v-card-title>
          <div class="mt-5">
            <h1 class="text-h1" style="border-top: black">
              {{ stats.respuestas_incorrectas }}
            </h1>
          </div>
        </v-card>
        <v-card
          width="400"
          height="200"
          elevation="4"
          class="ma-5"
          align="center"
          justify="center"
        >
          <v-card-title>
            <div class="font-weight-bold ms-1 mb-2 text-truncate">
              Respostes totals
            </div>
          </v-card-title>
          <div class="mt-5">
            <h1 class="text-h1" style="border-top: black">
              {{ stats.respuestas_total }}
            </h1>
          </div>
        </v-card>
      </v-row>
      <div class="w-25">
        <v-sheet class="mr-2 mt-15">
          <v-btn block class="bg-black" height="60" @click='$router.push("/")'
            >Torna enrrera</v-btn
          >
        </v-sheet>
      </div>
    </v-sheet>
  </div>
</template>
