<template>
  <div class="background">
    <titulo titulo="Agenda - Produto" />
    <v-form v-model="valid">
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="gravarAgendaProduto()">OK</v-btn>
            <v-btn outline color="secondary" flat @click="close()">Cancelar</v-btn>
           
          </v-card-actions>
    </v-form>
  </div>
</template>


<script>
import Titulo from "@/components/Titulo";

export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  components: {
    titulo: Titulo
  },
  methods: {
    gravarAgendaProduto() {
      this.$router.push({name: 'agenda'})
    }
  }
};
</script>