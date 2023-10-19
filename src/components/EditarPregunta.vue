<script setup></script>

<script>
export default {
  data: function () {
    return {
      data: {
        title: "",
        answers: [],
        correctIndex: null,
        poster: "",
      },
    };
  },
  mounted() {
    fetch(`http://localhost:4000/getPregunta?id=${this.$route.params.id}`, {
      method: "POST",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        this.data.title = data.title;
        this.data.answers = data.answers;
        this.data.correctIndex = parseInt(data.correctIndex) + 1;
        this.data.poster = data.poster;
      });

    document.getElementById("correctIndex").addEventListener("change", () => {
      document.getElementById("correctIndex").value > 4
        ? (document.getElementById("correctIndex").value = 4)
        : null;
      document.getElementById("correctIndex").value < 1
        ? (document.getElementById("correctIndex").value = 1)
        : null;
    });
  },
  methods: {
    cancelar() {
      this.$router.push("/");
    },
    editarPregunta() {
      fetch(
        //Eliminar primer
        `http://localhost:4000/deletePregunta?id=${this.$route.params.id}`,
        {
          method: "POST",
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          fetch(
            // Tornar a crear
            `http://localhost:4000/addPregunta?title=${
              this.data.title
            }&poster=${this.data.poster}&answers=${
              this.data.answers
            }&correctIndex=${this.data.correctIndex - 1}`,
            {
              method: "POST",
              mode: "cors",
            }
          )
            .then((response) => response.json())
            .then((data) => {
              this.$router.push("/");
            });
        });
    },
  },
};
</script>

<template>
  <div>
    <h1 class="text-center text-h2 mt-5 pb-10 font-weight-medium">
      Editar pregunta
    </h1>
    <v-sheet class="grid" align="center">
      <v-card
        class="bg-grey-lighten-2"
        width="500"
        height="600"
        elevation="4"
        align="center"
        justify="center"
      >
        <v-card-title>
          <input
            width="100px"
            class="font-weight-bold ms-1 mb-2 text-center remove-outline"
            placeholder="Títol de la pel·lícula"
            v-model="data.title"
          />
        </v-card-title>
        <v-card
          width="400"
          class="ml-2 mb-2 text-center remove-outline"
          height="300"
          elevation="4"
          align="center"
          justify="center"
        >
          <v-img :width="400" aspect-ratio="1/1" cover :src="data.poster">
            <input
              class="font-weight-bold add-question-link"
              placeholder="Afegir enllaç de la imatge"
              v-model="data.poster"
            />
          </v-img>
        </v-card>

        <v-btn height="60" class="mx-1 mt-1">
          <input
            type="number"
            class="font-weight-bold text-center remove-outline add-question-input"
            placeholder="Data 1"
            v-model="data.answers[0]"
          />
        </v-btn>
        <v-btn height="60" class="mx-1 mt-1">
          <input
            type="number"
            class="font-weight-bold text-center remove-outline add-question-input"
            placeholder="Data 2"
            v-model="data.answers[1]"
          />
        </v-btn>
        <v-btn height="60" class="mx-1 mt-1">
          <input
            type="number"
            class="font-weight-bold text-center remove-outline add-question-input"
            placeholder="Data 3"
            v-model="data.answers[2]"
          />
        </v-btn>
        <v-btn height="60" class="mx-1 mt-1">
          <input
            type="number"
            class="font-weight-bold text-center remove-outline add-question-input"
            placeholder="Data 4"
            v-model="data.answers[3]"
          />
        </v-btn>
        <v-sheet width="400">
          <v-btn height="50" class="mt-4" block>
            <input
              id="correctIndex"
              width="100"
              class="font-weight-bold text-center remove-outline add-question-correct"
              placeholder="Número de la resposta correcta"
              type="number"
              v-model="data.correctIndex"
            />
          </v-btn>
        </v-sheet>
      </v-card>
      <v-sheet width="500">
        <v-row no-gutters>
          <v-col>
            <v-sheet class="mr-2 mt-4">
              <v-btn block class="bg-white" height="60" @click="cancelar()"
                >Cancelar</v-btn
              >
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="ml-2 mt-4">
              <v-btn
                block
                class="bg-black"
                height="60"
                @click="editarPregunta()"
                >Editar pregunta</v-btn
              >
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>
  </div>
</template>
