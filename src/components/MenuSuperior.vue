<template>
  <div>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
      <!-- <v-toolbar-side-icon @click.stop.prevent="mini = !mini"></v-toolbar-side-icon> -->
      <v-toolbar-side-icon @click.stop.prevent="toggle"></v-toolbar-side-icon>
      <v-toolbar-title>Schedule</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Novo</v-btn>
        <v-btn flat>Pesquisar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data:() => ({
        mini : true
    }),
    methods: {
        toggle(){            
            this.mini = !this.mini,            
            this.$emit('toggle-menu', {toggle: this.mini})
        }
    }
}
</script>

