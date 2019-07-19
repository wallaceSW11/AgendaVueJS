<template>

<v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>schedule</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Agenda</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Cadastro</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Pessoa</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(cadastro, i) in cadastros" :key="i" @click="e">
              <v-list-tile-title v-text="cadastro[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="cadastro[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Pagamento</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(pagamento, i) in pagamentos" :key="i" @click="e">
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
  props : ['fechado'],
  data: () => ({
    cadastros: [["Cliente", "people_outline"], ["Usuário", "people"]],
    pagamentos: [["Forma", "money"], ["Prazo", "money"]],
    mini : this.fechado,
    drawer: true
  }
  )}
</script>

  

