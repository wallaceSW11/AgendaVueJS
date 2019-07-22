<template>
  <v-flex xs12>
    <v-card light class="secondary white--text" height="20px">
      {{titulo}}
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['titulo']  
};
</script>

