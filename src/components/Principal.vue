<template>
  <v-app id="inspire">
    <menu-superior @toggle-menu="toggleMenuLateral"/>
    <menu-lateral 
      :compacto="mini" 
      
      :fechado-pessoa="cadastroPessoaAtivo"
      :fechado-pagamento="cadastroPagamentoAtivo" />
    <!-- :fechado-cadastro="cadastroAtivo" -->
    
    <!-- <menu-lateral @toggle-menu="toggleMenuLateral"/> -->

    <!-- menu superior -->
    <!-- color="blue darken-3"   color="grey darken-3" -->
    <!-- <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
      <v-toolbar-side-icon @click.stop.prevent="mini = !mini"></v-toolbar-side-icon>
      <v-toolbar-title>Schedule</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Novo</v-btn>
        <v-btn flat>Pesquisar</v-btn>
      </v-toolbar-items>
    </v-toolbar> -->

    <!-- menu lateral - esquerdo -->

<!--  -->
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      :clipped="$vuetify.breakpoint.lgAndUp"
      width="220px"
      fixed
      app
    >
      <v-list>
        <router-link class="link" :to="{name: 'agenda'}">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>schedule</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Agenda</v-list-tile-title>
          </v-list-tile>
        </router-link>

        
         <v-list-group prepend-icon="account_circle" value="true" v-model="cadastroAtivo" @click.stop.prevent="mini = !mini">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Cadastro</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-group no-action sub-group value="true" v-model="cadastroPessoaAtivo">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Pessoa</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(cadastro, i) in cadastros" :key="i">
              <router-link class="link" :to="{name: cadastro[2]}">
                <v-list-tile-title v-text="cadastro[0]"></v-list-tile-title>
              </router-link>
              <v-spacer></v-spacer>
              <v-list-tile-action>
                <router-link class="link" :to="{name: cadastro[2]}">
                  <v-icon v-text="cadastro[1]"></v-icon>
                </router-link>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group value="true" v-model="cadastroPagamentoAtivo">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Pagamento</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(pagamento, i) in pagamentos" :key="i">
              <v-list-tile-title v-text="pagamento[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="pagamento[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
 
      </v-list>
    </v-navigation-drawer> -->

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
   // drawer: true,
    mini: true,
    cadastroAtivo: false,
    cadastroPessoaAtivo: false,
    cadastroPagamentoAtivo: false,
    cadastros: [
      ["Cliente", "people_outline", "cadastroCliente"],
      ["Usuário", "people", "cadastroUsuario"]
    ],
    pagamentos: [["Forma", "money"], ["Prazo", "money"]]
  }),  
  watch: {
    mini() {
      (this.cadastroAtivo = false),
        (this.cadastroPessoaAtivo = false),
        (this.cadastroPagamentoAtivo = false);
       console.log('passei no watch mini principal')
    }
  },
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
