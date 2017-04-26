<template>
  <div id="app" class="container">
   <header>
     <b-navbar toggleable type="inverse" variant="success">
       <router-link class="navbar-brand" :to="{ name:'Home' }">Cervejaria</router-link>
       <b-nav is-nav-bar class="ml-auto">
         <b-nav-item right-alignment><router-link :to="{ name:'Beers' }">Cervejas</router-link></b-nav-item>
       </b-nav>
     </b-navbar>
   </header>
    <img src="./assets/logo.png">
      <div class="row">
         <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
}
</style>
