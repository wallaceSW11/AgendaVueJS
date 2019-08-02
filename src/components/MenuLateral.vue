<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="compacto"
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

      <v-list-group
        prepend-icon="account_circle"
        value="true"
        v-model="fechadoCadastro"
        @click.stop.prevent="mini = !mini"
      >

      <!-- v-model="true"    
       -->


        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Cadastro</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-group no-action sub-group value="true" v-model="fechadoPessoa">
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

        <v-list-group no-action sub-group value="true" v-model="fechadoPagamento">
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
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    compacto: Boolean,
    fechadoCadastro: Boolean,
    fechadoPessoa: Boolean,
    fechadoPagamento: Boolean
  },
  data: () => ({
    fechado: false,
    drawer: true,
    fechadoCadastro: false,
    cadastroAtivo: false,
    cadastroPessoaAtivo: false,
    cadastroPagamentoAtivo: false,
    mini: false,
    cadastros: [
      ["Cliente", "people_outline", "cadastroCliente"],
      ["Usuário", "people", "cadastroUsuario"]
    ],
    pagamentos: [["Forma", "money"], ["Prazo", "money"]]
  }),
  watch: {
      fechadoCadastro() {
          if (this.compacto) {
              this.mini = false
          }
          console.log("Mini: " + this.mini)
          console.log("compacto: " + this.compacto)
          console.log("fechado: "+this.fechado)
           
          
      }

    // mini() {
    //   (this.cadastroAtivo = false),
    //     (this.cadastroPessoaAtivo = false),
    //     (this.cadastroPagamentoAtivo = false);
    //    console.log('passei no watch mini')
    // }
    }
  //   methods: {
  //         toggle(){
  //             this.mini = !this.mini,
  //             this.$emit('toggle-menu', {toggle: this.mini})
  //         }
  //     }
}
</script>

