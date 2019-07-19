<template>   
    <div>
          <!-- color="blue darken-3" -->
          <v-toolbar color="blue light white--text" height="40px">
            <v-toolbar-title>Cadastro agenda</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-md text-xs-center>
           
            <v-layout row wrap>
              <!-- primeira linha -->              
                <v-flex xs2>
                  <v-text-field label="Data"></v-text-field>
                </v-flex>  
                <v-flex xs1>
                  <v-text-field  label="Horário"></v-text-field>
                </v-flex>
                <v-flex xs9>
                  <v-text-field label="Barbeiro"></v-text-field>
                </v-flex>
              <!--segunda linha   -->
                <v-flex xs2>
                  <v-text-field label="Código Cliente"></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field label="Cliente"></v-text-field>
                </v-flex>
              <!-- terceira linha -->                
                <panel-produto titulo="Produto / Serviço"/>
                <tabela-produto/>
                
                   
            </v-layout>
          </v-container>  

    
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="blue " @click="gravarAgenda">Gravar</v-btn>
            <v-btn color="blue darken-1" flat @click="abrirTelaRecebimento()">Recebimento</v-btn>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
          </v-card-actions>
    
    
    </div>              
</template>


<script>

import TabelaProduto from '@/components/TabelaProdutoServico'
import Panel from '@/components/Panel'

export default {
  data: () => ({

  }),
  components: {
    'tabela-produto': TabelaProduto,
    'panel-produto': Panel
  },
  methods: {
    gravarAgenda(){

    },
    abrirTelaRecebimento(){

    },
    close() {

    }
  }
}
</script>
