<template>
<div class="beers">
  <h1>Cervejas</h1>
  <div v-if="!loading">
    <div v-if="items > 0">
      <p>Total de cervejas: {{items}}</p>
      <p class="test">Oi</p>
      <b-form-select v-model="perPageItems" 
                   :options="options"
                   class="mb-3"
      ></b-form-select>
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
            <td><router-link class="btn btn-sm btn-primary" :to="{ name:'Beer', params: { id: beer.id } }"><span class="glyphicon glyphicon-search"><icon name="eye"></icon></span></router-link></td>
          </tr>
        </tbody>
      </table>
      <b-pagination v-if="!$route.query.s" size="md" :total-rows="100" variant="primary" secondary-variant="info" v-model="pagedInt" :per-page="perPageItems"></b-pagination>
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
        pagedInt: (this.$route.params.paged) ? parseInt(this.$route.params.paged) : 1,
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
      if (this.$route.params.paged) {
        this.$store.dispatch('fetchBeersPaged', [this.$route.params.paged, this.$store.state.perPage]).then(() => {
          this.loading = false
        })
      } else {
        if (this.$route.query.s) {
          this.$store.dispatch('fetchBeersSearch', [this.$route.query.s, this.perPageItems]).then(() => {
            this.loading = false
          })
        } else {
          this.$store.dispatch('fetchBeers', this.perPageItems).then(() => {
            this.loading = false
          })
        }
      }
    },
    watch: {
      '$route.query.s' (newSearch) {
        if (newSearch) {
          this.$store.dispatch('fetchBeersSearch', [newSearch, this.perPageItems])
        } else {
          this.$store.dispatch('fetchBeers', this.perPageItems)
        }
      },
      '$route.params.paged' (newPage) {
        if (newPage) {
          this.$store.dispatch('fetchBeersPaged', [this.$route.params.paged, this.perPageItems])
        } else {
          this.$store.dispatch('fetchBeers', this.perPageItems)
          this.pagedInt = 1
        }
      },
      'pagedInt' (value) {
        if (value > 1) {
          this.$router.push({name: 'BeersPage', params: { paged: value }})
        } else if (value === 1) {
          this.$router.push({name: 'Beers'})
        }
      },
      'perPageItems' (value) {
        this.$store.commit('SET_PERPAGE', value)
        if (this.$route.query.s) {
          this.$store.dispatch('fetchBeersSearch', [this.$route.query.s, value])
        } else {
          switch (this.$route.name) {
            case 'Beers':
              this.$store.dispatch('fetchBeers', value)
              break
            case 'BeersPage':
              this.$store.dispatch('fetchBeersPaged', [this.$route.params.paged, value])
              break
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
