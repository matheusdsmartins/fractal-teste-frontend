<template>
<div class="beers">
  <h1>Cervejas</h1>
  <p>Total de cervejas: {{beers.length}}</p>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tagline</th>
        <th></th>
  </tr>
  </thead>
    <tbody>
      <tr v-for="beer in beers">
        <td>{{beer.name}}</td>
        <td>{{beer.tagline}}</td>
        <td><router-link class="btn btn-sm btn-primary" :to="{ name:'Beer', params: { id: beer.id } }"><span class="glyphicon glyphicon-search">Ver</span></router-link></td>
  </tr>
  </tbody>
  </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'beers',
    data () {
      return {
        beers: [],
        erros: []
      }
    },
    created () {
      axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        this.beers = response.data
      })
      .catch(e => {
        this.erros.push(e)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
