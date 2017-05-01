<template>
<div class="beer">
  <h1>Cervejas</h1>
  <div v-if="beer">
    <div class="beer__img">
      <img :src="beer.image_url">
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
          <td>{{beer.name}}</td>
          <td>{{beer.tagline}}</td>
          <td>{{beer.description}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Desculpe não foi possível encontrar esta cerveja.</p>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'beer',
    created () {
      this.$store.dispatch('fetchBeer', this.$route.params.id)
    },
    computed: mapState({
      beer: state => state.beers[0]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .beer {
    &__img {
      text-align: center;
      img {
        width: 5%;
        height: auto;
        margin-bottom: 10px;
      }
    }
  }
</style>
