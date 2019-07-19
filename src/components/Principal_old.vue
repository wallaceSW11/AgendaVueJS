<template>
<v-app id="inspire">
    
  <v-toolbar dark color="primary" 
  app
  fixed
  :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
    <v-toolbar-side-icon @click.stop="mini = !mini"></v-toolbar-side-icon>
    <v-toolbar-title>BarberShop</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>1Novo</v-btn>
      <v-btn flat>Localizar</v-btn>
      <v-btn flat>Sobre</v-btn>
    </v-toolbar-items>
  </v-toolbar>


 <v-navigation-drawer 
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    :mini-variant.sync="mini"
    stateless
    hide-overlay 
          
  >  
            <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>schedule</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Agenda</v-list-tile-title>
                </v-list-tile>
                

                  <v-list-group
                    prepend-icon="account_circle"
                    value="true"
                  >
                    <template v-slot:activator>
                      <v-list-tile>
                        <v-list-tile-title>Cadastro</v-list-tile-title>
                      </v-list-tile>
                    </template>          
                    
                    
                    
                    <v-list-group
                      no-action
                      sub-group
                      value="true"
                    >
                      <template v-slot:activator>
                        <v-list-tile>
                          <v-list-tile-title>Pessoa</v-list-tile-title>
                        </v-list-tile>
                      </template>

                      <v-list-tile
                        v-for="(cadastro, i) in cadastros"
                        :key="i"
                        @click="e"
                      >
                        <v-list-tile-title v-text="cadastro[0]"></v-list-tile-title>
                        <v-list-tile-action>
                          <v-icon v-text="cadastro[1]"></v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list-group>  


                    <v-list-group
                      no-action
                      sub-group
                      value="true"
                    >
                      <template v-slot:activator>
                        <v-list-tile>
                          <v-list-tile-title>Pagamento</v-list-tile-title>
                        </v-list-tile>
                      </template>

                      <v-list-tile
                        v-for="(pagamento, i) in pagamentos"
                        :key="i"
                        @click="e"
                      >
                        <v-list-tile-title v-text="pagamento[0]"></v-list-tile-title>
                        <v-list-tile-action>
                          <v-icon v-text="pagamento[1]"></v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list-group>
                  </v-list-group>

              </v-list>   
  
  </v-navigation-drawer>





 <!-- não alterar daqui pra baixo -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex >
              <router-view />           
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      mini: true, 
      cadastros: [
        ['Cliente', 'people_outline'],
        ['Usuário', 'people']        
      ],
      pagamentos: [
        ['Forma', 'money'],
        ['Prazo', 'money']
      ]         
    }),
    props: {
      source: String
    }
  }
</script>