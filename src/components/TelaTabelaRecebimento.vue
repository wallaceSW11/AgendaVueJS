<template>
  <v-dialog v-model="mostrar" max-width="800px">
    <v-card>
      <v-toolbar color="blue darken-3" dark height="40px">
        <v-toolbar-title>Recebimento</v-toolbar-title>
      </v-toolbar>      

      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            
            <v-data-table :headers="headers" :items="recebimentos" class="elevation-1" hide-actions>
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.descricao }}</td>
                <td width="10px">{{ props.item.valor}}</td>
                <td width="100px">
                  <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                  <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                </td>
              </template>

              <template v-slot:footer>
                <td class="text-xs-left">Total:</td>
                <td>{{valorTotalRecebimento}}</td>
                <td></td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="gravar">Gravar</v-btn>
        <v-btn color="blue darken-1" flat @click="fechar">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- <v-flex xs12>
  <v-data-table :headers="headers" :items="recebimentos" class="elevation-1" hide-actions>
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.descricao }}</td>
      <td width="10px">{{ props.item.valor}}</td>
      <td width="100px">
        <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
        <v-icon small @click="deleteItem(props.item)">delete</v-icon>
      </td>
    </template>

    <template v-slot:footer>
      <td class="text-xs-left">Total:</td>
      <td>{{valorTotalRecebimento}}</td>
      <td></td>
    </template>
  </v-data-table>
  </v-flex>-->
</template>

<script>
export default {
  // props: {
  //   'mostrar' : Boolean
  // },
  
  data: () => ({
     //dialog2: 'mostrar',
     mostrar: false,     
    headers: [
      {
        text: "Descrição",
        align: "left",
        sortable: false,
        value: "descricao"
      },
      {
        text: "Valor",
        align: "rigth",
        value: "barbeiro1",
        sortable: false
      },
      {
        text: "+",
        align: "center",
        value: "barbeiro1",
        sortable: false
      }
    ],
    recebimentos: [
      {
        descricao: "Dinheiro",
        valor: "55,00"
      }
    ],
    valorTotalRecebimento: "55,00"
  }),
  methods: {
    retornarExibicao() {
      this.$emit('mostrarfilho', this.mostrar)
    },
    gravar() {
      this.close();
    },
    fechar() {
      this.close();
    }
  }
};
</script>
