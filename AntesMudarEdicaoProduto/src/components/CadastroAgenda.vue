<template>     
    <div class="background" >
          <titulo titulo="Cadastro agenda"/>

          <!-- <span class="title">Cadastro agenda</span>
          <v-divider></v-divider>          -->

          <v-container grid-list-md text-xs-center>           
            <v-layout row wrap>
              <!-- primeira linha -->              
                <v-flex xs2>
                  <v-text-field label="Data" v-model="this.agendas[0].data"></v-text-field>
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
            <v-btn dark color="primary " @click="gravarAgenda">Gravar</v-btn>
            <v-btn outline color="primary darken-1" flat @click="abrirTelaRecebimento()">Recebimento</v-btn>
            <v-btn color="primary darken-1" flat @click="close">Cancelar</v-btn>
          </v-card-actions>
    
    
    </div>              
</template>


<script>

import TabelaProduto from '@/components/TabelaProdutoServico'
import Panel from '@/components/Panel'
import Titulo from '@/components/Titulo'

export default {
  props: [
    'id'
  ],  
  data: () => ({
    agendas: [
            {
              id: '1',
              data: '02/07/2019',            
              horario: '10:00',  
              barbeiro: 'Barber_1',
              cdcliente: '01',          
              cliente1: 'Wallzin da Silva',            
              cliente2: '*** Vago ***',
            },          
            {
              id: '2',
              horario: '10:30',            
              cliente1: '*** Vago ***',            
              cliente2: 'Pedrim da Silva Sauro',            
            },
            {
              id: '3',
              horario: '11:00',            
              cliente1: '*** Vago ***',            
              cliente2: '*** Vago ***',            
            },
            {
              id: '4',
              horario: '11:30',            
              cliente1: '*** Vago ***',            
              cliente2: '*** Vago ***',            
            }          
          ],
      }),
  components: {
    'tabela-produto': TabelaProduto,
    'panel-produto': Panel,
    'titulo': Titulo,
  },
  methods: {
    gravarAgenda(){
      this.$router.push({name:'agenda'})

    },
    abrirTelaRecebimento(){

    },
    close() {

    }   
    
  }
}
</script>

<style>
.title{
  margin-top: 10px;
  margin-left: 10px;
}
</style>


