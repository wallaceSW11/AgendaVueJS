<template>
  <div>
    <p>Menu -> Agenda</p>
    <br>
    

  <v-data-table
    :headers="headers"
    :items="agendas"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td width="10px">{{ props.item.horario }}</td>
      <td class="text-xs-center"><router-link :to="{ name: 'cadastroagenda', props: {horariomarcado: '10:00'} }"> {{ props.item.cliente1 }}</router-link></td>
      <td class="text-xs-center"><router-link :to="{ name: 'cadastroagenda' }">{{ props.item.cliente2 }}</router-link></td>      
    </template>
  </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
            text: 'Barber_2', 
            align: 'center',
            value: 'barbeiro2',
            sortable: false
          },          
        ],
        agendas: [
          {
            horario: '10:00',            
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
        ]
      }
    },    
  } 
</script>

<style>
a:link {
  text-decoration: none;
}
</style>
