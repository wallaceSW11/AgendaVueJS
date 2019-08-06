<template>
  <v-app id="inspire">
    <menu-superior @toggle-menu="toggleMenuLateral"/>
    <menu-lateral @toggle-menu-lateral="toggleMenuLateral2" :compacto="mini" />     

    <!-- Veiw Principal -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <v-card>
              <router-view />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MenuSuperior from '@/components/MenuSuperior'
import MenuLateral from '@/components/MenuLateral'

export default {
  data: () => ({
    dialog: false,
    mini: true,
    cadastros: [
      ["Cliente", "people_outline", "cadastroCliente"],
      ["Usuário", "people", "cadastroUsuario"]
    ],
    pagamentos: [["Forma", "money"], ["Prazo", "money"]]
  }),  
  props: {
    source: String
  },
  components: {
    'menu-superior': MenuSuperior,
    'menu-lateral': MenuLateral
  },
  methods: {
    toggleMenuLateral(payload) {     
      this.mini = payload.toggle
    },
    toggleMenuLateral2(payload) {
      this.mini = payload.toggle
    }
  }

};
</script>


<style type="text/css">
a:link {
  text-decoration: none;
}
.link {
  color: black;
}
</style>
