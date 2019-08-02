<template>
  <div>
    <h2>Componente Filho 3 </h2>
    <p>{{propDoPai}}</p>
    <v-text-field label="Digite" v-model="msg" @keyup.enter="enviarParaPai" name="esseinput"></v-text-field>
    <v-btn @click="enviarParaPai">Enviar texto</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    propDoPai: String
  },
  data:() => ({
    msg: '',
    horario: '11:11',
    amostrar: true
  }),
  methods: {
    enviarParaPai(){
      this.amostrar = true,
      console.log('amostrar filho: ' + this.amostrar),
      this.$emit('evento-do-filho', {minhaMsg: this.msg, meuHorario: this.horario, visualizar: this.amostrar}),
      this.msg = ''      
    }
  }   
}
</script>