<script>
export default {
  props: ["data"],
};
</script>

<template>
  <v-dialog width="1000">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="v-btn v-btn--block v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated bg-blue-lighten-2"
        text="Open Dialog"
      >
        Informació
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="text-center text-h5 font-weight-bold">
          {{ data.title }}
        </v-card-title>
        <v-card-text class="text-center font-weight-bold">
          Release date: {{ data.release_date }}
        </v-card-text>
        <v-img
          height="500"
          :src="'https://image.tmdb.org/t/p/w500' + data.backdrop_path"
          cover
          style="border-top: black"
        >
        </v-img>
        <v-card-text class="text-center"> {{ data.overview }} </v-card-text>
        <v-card-text> </v-card-text>

        <v-spacer></v-spacer>
        <v-container align="center" justify="center">
          <v-sheet class="ma-2">
            <v-btn
              text="tornar"
              class=""
              block
              @click="isActive.value = false"
            ></v-btn>
          </v-sheet>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>
