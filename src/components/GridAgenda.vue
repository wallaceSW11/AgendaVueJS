<template>
  <div class="background">
    <titulo titulo="Agenda"/>
   <!-- Tabela principal - Agenda - mostra os clientes e horários -->
    
    <v-container grid-list-md text-xs-center>
    <v-data-table
    :headers="headers"
    :items="agendas"
    class="elevation-1"
    hide-actions
  >    
  <!-- <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon> -->
    <template v-slot:items="props">
      <td width="10px">{{ props.item.horario }}</td>      
      <td class="text-xs-center">{{ props.item.cliente1}}</td>      
      <td class="text-xs-left"> <router-link :to="{name: 'cadastroAgenda', params: {id: props.item.id}}"><v-icon small class="mr-2">edit</v-icon> </router-link>                                
                                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                                <v-icon small class="mr-2" @click="abrirTelaRecebimento()"> attach_money</v-icon></td>      
      <td class="text-xs-center">{{ props.item.cliente2 }}</td>      
      <td><v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                               <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                               <v-icon small class="mr-2" @click="abrirTelaRecebimento()">attach_money</v-icon></td>
    </template>
  </v-data-table> 
    </v-container>   
    
    <!-- Card para cadastro ou edição da agenda -->
    <v-dialog v-model="dialog" max-width="800px" persistent >
        <v-card>          
          <v-toolbar color="blue darken-3" dark height="40px">
            <v-toolbar-title>Cadastro agenda</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-md text-xs-center>
           
            <v-layout row wrap>
              <!-- primeira linha -->              
                <v-flex xs2>
                  <v-text-field v-model="editedItem.data" label="Data"></v-text-field>
                </v-flex>  
                <v-flex xs1>
                  <v-text-field v-model="editedItem.horario" label="Horário"></v-text-field>
                </v-flex>
                <v-flex xs9>
                  <v-text-field v-model="editedItem.barbeiro" label="Barbeiro"></v-text-field>
                </v-flex>
              <!--segunda linha   -->
                <v-flex xs2>
                  <v-text-field v-model="editedItem.cdcliente" label="Código Cliente"></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field v-model="editedItem.cliente1" label="Cliente"></v-text-field>
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
        </v-card>
      </v-dialog>



  
    <!-- Card para cadastro ou edição do recebimento-->
     <!-- max-width="800px" -->
    <v-dialog v-model="dialog2" >
        <v-card>          
          <v-toolbar color="primary darken-3" dark height="40px">
            <v-toolbar-title>Recebimento</v-toolbar-title>
          </v-toolbar>           

          <v-container grid-list-md text-xs-center>
            <v-layout row wrap> 
              <v-flex xs12>
                <v-data-table :headers="headersRecebimento" :items="recebimentos" class="elevation-1" hide-actions>
                 <template v-slot:no-data>
                   Não existem dados para visualizar
                  </template>                 
                 
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.formaPagamento }}</td>
                    <td width="10px">{{ props.item.valor | valorMonetario }}</td>
                    <td width="100px">
                      <v-icon small class="mr-2" @click="editarFormaPagamento(props.item)">edit</v-icon>
                      <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                    </td>
                  </template>                  

                  <template v-slot:footer>
                    <tr>
                      <!-- class="text-xs-left" -->
                    <td class="text-xs-left" colspan="3">                            
                            <v-btn small fab color="blue" @click="addRecebimento">
                      <v-icon dark>add</v-icon>
                    </v-btn>
                    </td>
                    </tr>
                    <tr>
                      <td class="text-xs-left">Total:</td>
                    <td>{{valorTotalRecebimento | valorMonetario}}</td>
                    <td></td>
                    </tr>
                  </template>
                </v-data-table>
              </v-flex>                      
            </v-layout>
          </v-container> 

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="blue " @click="gravarRecebimento">Gravar</v-btn>
            <v-btn color="blue darken-1" flat @click="finalizarAgenda()">Finalizar</v-btn>            
            <v-btn color="blue darken-1" flat @click="fecharTelaRecebimento">Cancelar</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

<!-- add recebimento -->
<v-dialog v-model="dlgTelaRecebimento" max-width="500px">
        <v-card>          
          <v-toolbar color="blue darken-3" dark height="40px">
            <v-toolbar-title>Forma de pagamento e valor</v-toolbar-title>
          </v-toolbar>           

          <v-container grid-list-md text-xs-center>
            <v-layout row wrap> 
              <v-flex xs8>
               <v-select
                  label="Forma de pagamento"
                  :items="formasdepagamento"
                  v-model="formadepagamentoselecionada"  
                  menu-props="offsetY"   
                  required             
                ></v-select>
                </v-flex>
              <v-flex xs4>
                <v-text-field
                  label="Valor"
                  v-model="valorInformado"                  
                  required>
                  </v-text-field>  
              </v-flex>  
                            
            </v-layout>
          </v-container> 

          <v-card-actions>           
            <v-spacer></v-spacer>
            <!-- <v-btn color="blue " @click="addValorRecebimento">OK</v-btn>             -->
            <v-btn color="blue " @click="gravarValorRecebimento(formadepagamentoselecionada, valorInformado)">OK</v-btn>            
            <v-btn color="blue darken-1" flat @click="fecharTelaAddRecebimento">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  <!-- <v-btn color="blue " @click="calcularTotalRecebimento">Click Here</v-btn> -->

  </div>
</template>




<script>

import TabelaProduto from '@/components/TabelaProdutoServico'
import Panel from '@/components/Panel'
import Titulo from '@/components/Titulo'
//import TabelaRecebimento from '@/components/TabelaRecebimento'
//import TelaTabelaRecebimento from '@/components/TelaTabelaRecebimento'

  export default {
    data: () => ({
      dialog: false,
      dialog2: false,
      dlgTelaRecebimento: false,
      formadepagamentoselecionada: '',
      valorInformado: '',
      indexFormaPagamentoSelecionada: -1,      
      headers: [
          {
            text: 'Horários',
            align: 'left',
            sortable: false,
            value: 'horario'
          },
          { 
            text: 'Barber_1', 
            align: 'center',
            value: 'barbeiro1', 
            sortable: false
          },
          { 
            text: '', 
            align: 'center',
            value: 'barbeiro1', 
            sortable: false
          },
          { 
            text: 'Barber_2', 
            align: 'center',
            value: 'barbeiro2',
            sortable: false
          },
          { 
            text: '', 
            align: 'center',
            value: 'barbeiro1', 
            sortable: false
          }          
        ],

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
            horario: '10:30',            
            cliente1: '*** Vago ***',            
            cliente2: 'Pedrim da Silva Sauro',            
          },
          {
            horario: '11:00',            
            cliente1: '*** Vago ***',            
            cliente2: '*** Vago ***',            
          },
          {
            horario: '11:30',            
            cliente1: '*** Vago ***',            
            cliente2: '*** Vago ***',            
          }          
        ],
      formasdepagamento: [
        'Dinheiro', 'Cartão Débito', 'Cartão Crédito', 'Vale'
      ],

      headersRecebimento: [
      {
        text: "Forma de pagamento",
        align: "left",
        sortable: false,
        value: "formaPagamento"
      },
      {
        text: "Valor",
        align: "rigth",
        value: "valor",
        sortable: false
      },
      {          
        text: "",
        align: "center",
        value: "vazio",
        sortable: false
      }
    ],
    recebimentos: [],
    //   {
    //     descricao: "Dinheiro",
    //     valor: "55,00"
    //   }
    // ],
    valorTotalRecebimento: "0.00",
      
      desserts: [],
      editedIndex: -1,
      editedItem: {
        horario: '',
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      formaPagamentoEdicao: {
        formaPagamento: '',
        valor: ''
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo cadastro' : 'Editar cadastro'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    // created () {
    //   this.initialize()
    // },

    methods: {
      editItem (item) {
        this.editedIndex = this.agendas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      abrirTelaRecebimento() {       
        this.dialog = false,
        this.dialog2 = true
      },
      

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Confirma a exclusão da agenda selecionada?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      gravarAgenda() {
        this.close()
      },
      gravarRecebimento() {
        this.dialog2 = false
      },
      fecharTelaRecebimento() {
        this.dialog2 = false
      },
      finalizarAgenda() {
        this.dialog = false,
        this.dialog2 = false
      },
      addRecebimento(){
        this.dlgTelaRecebimento = true
      },
      addValorRecebimento(){
        this.recebimentos.push( {formaPagamento: this.formadepagamentoselecionada, valor: this.valorInformado}),
        this.formadepagamentoselecionada = '',
        this.valorInformado = '',
        this.dlgTelaRecebimento = false,
        this.calcularTotalRecebimento()
      },

      editarFormaPagamento(item){
        this.indexFormaPagamentoSelecionada = this.recebimentos.indexOf(item),        
        //this.formaPagamentoEdicao = Object.assign({}, item)
        this.formadepagamentoselecionada = item.formaPagamento,
        this.valorInformado = item.valor,
        this.dlgTelaRecebimento = true
      },


      gravarValorRecebimento(){
        if (this.indexFormaPagamentoSelecionada > -1) {
          this.recebimentos[this.indexFormaPagamentoSelecionada].formaPagamento = this.formadepagamentoselecionada,
          this.recebimentos[this.indexFormaPagamentoSelecionada].valor = this.valorInformado
          //Object.assign(this.recebimentos[this.indexFormaPagamentoSelecionada], this.formaPagamentoEdicao)  
        } else {
          this.recebimentos.push( {formaPagamento: this.formadepagamentoselecionada, valor: this.valorInformado})
        }
        
        this.formadepagamentoselecionada = '',
        this.valorInformado = '',
        this.dlgTelaRecebimento = false,
        this.calcularTotalRecebimento()
      },
      fecharTelaAddRecebimento(){
        this.dlgTelaRecebimento = false
      },
      calcularTotalRecebimento() {        
        var totalRec = 0.00;        

        for (var i=0; i < this.recebimentos.length; i++)
        { 
         totalRec += Number(this.recebimentos[i].valor.replace(",","."))
        }
        this.valorTotalRecebimento = totalRec
      }    
    },
    filters: {
      valorMonetario(valor){        
        const val = Number(valor.toString().replace(",", "."));
          if (!val) return '0,00';
          
          const valueString = val.toFixed(2).replace(".", ",");
          return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      // valorMonetario(valor){
      //   return valor.toString().replace(".",",")
      // }
    },

    components: {
      'tabela-produto': TabelaProduto,
      'panel-produto': Panel,
      'titulo': Titulo,
     // 'tabela-recebimento': TabelaRecebimento,
      // eslint-disable-next-line
     // 'tela-tabela-recebimento': TelaTabelaRecebimento
    }
  }
</script>