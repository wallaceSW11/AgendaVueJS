<template>
  <div id="app">
    <div id="nav">
      <principal/>      
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>

import Principal from '@/components/Principal'

export default {
  components: {
    'principal': Principal
  }
}
</script>
