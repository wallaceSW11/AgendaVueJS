<template>
  <div>
      <p>Menu -> <router-link :to="{ name: 'agenda'}">Agenda</router-link> -> 1Cadastro</p>
    <br>  
    
    
    <v-form v-model="valid">
        <v-container>
        <v-layout>
            <v-flex
            xs12
            md4
            >
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Horário"
                required
            ></v-text-field>
            </v-flex>

            <v-flex
            xs12
            md4
            >
            <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Barber"
                required
            ></v-text-field>
            </v-flex>

            <v-flex
            xs12
            md4
            >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Cliente"
                required
            ></v-text-field>
            </v-flex>
        </v-layout>
        </v-container>
    </v-form>
  </div>
</template>


<script>
  export default {     

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>