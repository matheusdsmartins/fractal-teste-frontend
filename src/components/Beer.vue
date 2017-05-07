<template>
<div class="beer">
  <h1 class="title">Cervejas</h1>
  <div v-if="!loading">
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
  <p v-else><icon name="spinner" spin></icon></p>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'beer',
    data () {
      return {
        loading: true
      }
    },
    created () {
      this.getBeer(this.$route.params.id)
    },
    computed: mapState({
      beer: state => state.beers[0]
    }),
    methods: {
      getBeer (id) {
        let path = `/${id}`
        this.$store.dispatch('fetchBeers', path).then(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .table td:nth-child(3) {
    width: 70%;
  }
  .beer {
    &__img {
      text-align: center;
      img {
        max-width: 10%;
        height: auto;
        margin-bottom: 10px;
      }
    }
  }
</style>
