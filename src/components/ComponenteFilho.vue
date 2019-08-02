<template>
  <div>
    <h2>Componente Filho</h2>
    <p>Mensagem do pai: {{dados}}</p>
  </div>
</template>

<script>
export default {
  props: {
    dados: String
  }
};
</script>
