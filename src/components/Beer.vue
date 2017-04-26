<template>
<div class="beer">
  <h1>Cervejas</h1>
  <div class="beer__img">
    <img :src="beer[0].image_url">
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tagline</th>
        <th>Descrição</th>
  </tr>
  </thead>
    <tbody>
      <tr>
        <td>{{beer[0].name}}</td>
        <td>{{beer[0].tagline}}</td>
        <td>{{beer[0].description}}</td>
  </tr>
  </tbody>
  </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'beer',
    data () {
      return {
        beer: [],
        erros: []
      }
    },
    created () {
      var url = `https://api.punkapi.com/v2/beers/${this.$route.params.id}`
      axios.get(url)
      .then(response => {
        this.beer = response.data
      })
      .catch(e => {
        this.erros.push(e)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .beer {
    &__img {
      text-align: center;
      img {
        width: 20%;
        height: auto;
      }
    }
  }
</style>
