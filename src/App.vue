<template>
  <div id="app" class="container">
   <header>
     <b-navbar toggleable type="inverse" variant="success">
       <router-link class="navbar-brand" :to="{ name:'Home' }">Cervejaria</router-link>
       <b-nav is-nav-bar class="ml-auto">
         <router-link :to="{ name: 'Beers' }" class="nav-link" right-alignment>Cervejas</router-link>
         <b-input-group>
           <b-form-input v-model="search" type="search" placeholder="Procurar..."></b-form-input>
           <b-input-group-button slot="right">            
            <router-link class="btn btn-primary btn-md" :to="{ name: 'Beers', query: { s: search }}"><icon name="search"></icon></router-link>
           </b-input-group-button>
         </b-input-group>
       </b-nav>
     </b-navbar>
   </header>
   <img src="./assets/logo.png">
   <div class="row">
      <div class="col-12">
       <router-view></router-view>
      </div>
   </div>
   <footer>
     Desenvolvido por Matheus de S. Martins
   </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  
  .navbar {
    a {
      color: white;
      text-decoration: none;
    }
  }
  
  footer {
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    background-color: #ededed;
  }
  
}
</style>
