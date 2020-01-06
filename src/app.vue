<template>
  <div id="app">
    <Shipment></Shipment>
  </div>
</template>

<script>
import Shipment from './components/Shipment.vue'

export default {
  name: 'app',
  components: {
    Shipment
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
