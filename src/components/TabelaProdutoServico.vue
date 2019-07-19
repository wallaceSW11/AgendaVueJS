<template>
  <v-flex xs12>
    <v-data-table :headers="headers" :items="produtos" class="elevation-1" hide-actions>
      <template v-slot:items="props">
        <td width="10px">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.nome}}</td>
        <td width="10px">{{ props.item.qtitem }}</td>
        <td width="10px">{{ props.item.vlunitario }}</td>
        <td width="10px">{{ props.item.vlitem }}</td>
        <td width="100px">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>

      <template v-slot:footer>
        <td>Totais:</td>
        <td></td>
        <td>{{quantidadeTotalAgenda}}</td>
        <td></td>
        <td>{{valorTotalAgenda}}</td>
        <td></td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
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
    ],
    produtos: [
      {
        codigo: "01",
        nome: "Corte máquina",
        qtitem: "1",
        vlunitario: "25,00",
        vlitem: "25,00"
      },
      {
        codigo: "02",
        nome: "Corte tesoura",
        qtitem: "1",
        vlunitario: "30,00",
        vlitem: "30,00"
      }
    ],
    valorTotalAgenda: "55,00",
    quantidadeTotalAgenda: "2"
  })
  // created () {
  //     this.initialize()
  // }
};
</script>
