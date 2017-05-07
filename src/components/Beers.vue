<template>
<div class="beers">
  <h1 class="title">Cervejas</h1>
  <div v-if="!loading">
    <div v-if="items > 0">
      <p>Total de cervejas: {{items}}</p>
      <label class="mb-3">Items por página:</label>
      <b-form-select
         v-model="perPageItems" 
         :options="options"
         class="mb-3"
      ></b-form-select>
      <table class="table rounded">
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
            <td><router-link class="btn btn-sm btn-primary" :to="{ name:'Beer', params: { id: beer.id } }"><span class="glyphicon glyphicon-search"><icon name="eye"></icon></span></router-link></td>
          </tr>
        </tbody>
      </table>
      <hr>
      <b-pagination v-if="$route.query.s" size="md" :total-rows="items" variant="primary" secondary-variant="info" v-model="pagedInt" :per-page="perPageItems"></b-pagination>
      <b-pagination v-else size="md" :total-rows="234" variant="primary" secondary-variant="info" v-model="pagedInt" :per-page="perPageItems"></b-pagination>
    </div>
    <p v-else>Não foram encontradas cervejas.</p>
  </div>
  <p v-else><icon name="spinner" spin></icon></p>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'beers',
    data () {
      return {
        loading: true,
        pagedInt: this.$route.params.paged,
        perPageItems: this.$store.state.perPage,
        options: [
          {
            text: '25',
            value: 25
          },
          {
            text: '50',
            value: 50
          },
          {
            text: '100',
            value: 100
          }
        ]
      }
    },
    computed: {
      ...mapState({
        beers: state => state.beers,
        items: state => state.beers.length,
        perPage: state => state.perPage
      })
    },
    created () {
      let args = [
        this.$route.params.paged,
        this.$route.query.s,
        this.perPage
      ]
      this.getBeers(...args)
    },
    methods: {
      reloadBeers () {
        let args = [
          this.$route.params.paged,
          this.$route.query.s,
          this.perPage
        ]
        this.getBeers(...args)
      },
      getBeers (paged, search, perPage) {
        let query, s, pp, p
        // começar animação de carregamento
        this.loading = true
        paged = (paged && paged > 0) ? paged : 1
        p = `?page=${paged}`
        s = (search) ? `&beer_name=${search}` : ''
        pp = (perPage) ? `&per_page=${perPage}` : ''
        query = `${p}${s}${pp}`
        this.$store.dispatch('fetchBeers', query).then(() => {
          this.loading = false
        })
      }
    },
    watch: {
      '$route' () {
        this.reloadBeers()
      },
      'pagedInt' (value) {
        if (value > 1) {
          this.$router.push({name: 'BeersPage', params: { paged: value }, query: { s: this.$route.query.s }})
        } else if (value === 1) {
          this.$router.push({name: 'Beers', query: { s: this.$route.query.s }})
        }
      },
      'perPageItems' (value) {
        this.$store.commit('SET_PERPAGE', value)
        this.reloadBeers()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label {
    vertical-align: middle;
  }
</style>
