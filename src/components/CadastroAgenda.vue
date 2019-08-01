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
                <v-flex xs12>
                  <!-- :items="produtos"  -->
                <v-data-table :headers="headers" class="elevation-1" hide-actions>
                  <tabela-produto/>
      
      <!-- <template v-slot:items="props">
        <td width="10px">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.nome}}</td>
        <td width="10px">{{ props.item.qtitem }}</td>
        <td width="10px">{{ props.item.vlunitario }}</td>
        <td width="10px">{{ props.item.vlitem }}</td>
        <td width="100px">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template> -->

      <template v-slot:footer>
        <tr>
          <td class="text-xs-left" colspan="6">
            <v-btn outline small fab color="primary" @click="addProduto()">
              <v-icon dark>add</v-icon>
            </v-btn>            
          </td>
        </tr>
        <tr>
          <td>Totais:</td>
          <td></td>
          <td>{{quantidadeTotalAgenda}}</td>
          <td></td>
          <td>{{valorTotalAgenda}}</td>
          <td></td>
        </tr>
      </template>
    </v-data-table>
  </v-flex>
                
                
                
                
                <!-- <tabela-produto/> -->
                
                   
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
      
      headers: [
      {
        text: "Código",
        align: "left",
        sortable: false,
        value: "codigo"
      },
      {
        text: "Descrição",
        align: "left",
        value: "barbeiro1",
        sortable: false
      },
      {
        text: "Qt. Item",
        align: "center",
        value: "barbeiro1",
        sortable: false
      },
      {
        text: "Vl. Unitário",
        align: "center",
        value: "barbeiro2",
        sortable: false
      },
      {
        text: "Vl. Item",
        align: "center",
        value: "barbeiro1",
        sortable: false
      },
      {
        text: "",
        align: "center",
        value: "barbeiro1",
        sortable: false
      }
      ]}),
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


