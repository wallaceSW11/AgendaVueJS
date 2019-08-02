<template>
  <div>
    <h2>Componente Filho 2 </h2>
    <p>Mensagem do pai: {{dados.nome}}</p>
  </div>
</template>

<script>
export default {
  props: {
    dados: {}
  }
};
</script>