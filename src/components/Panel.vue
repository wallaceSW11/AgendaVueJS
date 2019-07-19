<template>
  <v-flex xs12>
    <v-card light class="secondary white--text" height="20px">
      {{titulo}}
      <!-- class="white--text" --> 

      <!-- <v-card-title class="white--text">{{titulo}}</v-card-title> -->
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['titulo'],  
  // data: () => {   
      
  // },
  
};
</script>

