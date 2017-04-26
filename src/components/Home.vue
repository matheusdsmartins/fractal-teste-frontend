<template>
<div class="home">
  <h1>Cervejas</h1>
  <p>{{msg}}</p>
</div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Olá, confira nossas cervejas.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
