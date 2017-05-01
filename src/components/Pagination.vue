<template>
<div class="teste">
  <h1>Teste</h1>
  <p>{{msg}}</p>
</div>
</template>

<script>
  export default {
    name: 'teste',
    computed: {
      msg () {
        return this.$store.state.beers
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
