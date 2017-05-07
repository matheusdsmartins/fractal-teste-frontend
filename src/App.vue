<template>
<div id="app" class="container-fluid">
  <div class="row">
    <header class="col-2 col-lg-1">
      <b-navbar toggleable type="inverse" class="flex-column full-height">
        <router-link :to="{ name:'Beers' }"><icon name="beer"></icon><br><span>Cervejas</span></router-link>
      </b-navbar>
    </header>
    <div class="col-9 col-xl-10 content">
        <div class="search-wrapper">
          <b-input-group>
            <b-form-input v-model="search" type="search" placeholder="Procurar..."></b-form-input>
            <b-input-group-button>
              <router-link class="btn btn-primary btn-md" :to="{ name: 'Beers', query: { s: search }}"><icon name="search"></icon></router-link>
            </b-input-group-button>
          </b-input-group>
        </div>
        <div class="clearfix"></div>
        <router-view></router-view>
        <footer>
          <span><em>Desenvolvido por Matheus de S. Martins</em></span>
        </footer>
    </div>
  </div>
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
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i|Raleway');
  
  $pallete_a: #F6F0A4;
  $pallete_b: #EFE337;
  $nav_color: #341E13;
  
  $body_font: 'Merriweather';
  $heading_font: 'Raleway';
  
  .container-fluid {
    padding: 0!important;
    background-color: $pallete_a;
  }
  button {
     cursor: pointer;
  }
  #app {
    font-family: $heading_font, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    .fa-icon {
      width: auto;
      height: 1em;
    }
    
    h1.title {
      font-family: $heading_font;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 56px;
      margin-bottom: 20px;
      text-transform: uppercase;
      border-bottom: 2px solid rgba(0,0,0,0.7);      
    }

    .full-height {
      height: 100%;
      padding: 40px 0;
    }

    * {
      box-sizing: border-box;
    }

    .content {
      padding-top: 40px;
      min-height: 98vh;
      * {
        color: rgba(0,0,0,0.7);
      }
    }

    .navbar {
      background-color: $nav_color;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
      .fa-icon {
        width: 48px;
        height: 48px;
      }
      a {
        color: #EFE337;
        text-decoration: none;
        font-size: 48px;
        line-height: 0;        
        span {
          font-size: 14px;
          text-transform: uppercase;
          font-weight: bold;
        } 
      }      
    }
    
    .search-wrapper {
      width: 50%;
      max-width: 400px;
      min-width: 210px;
      float: right;
    }

    footer {
      padding: 20px;
      text-align: center;
      clear: both;
    }
    
    /* Overrides */    
    .table {
      font-family: $body_font;
      background-color: rgba(0,0,0,0.1);
      thead {
        background-color: #373624;
        th {
          font-family: $heading_font;
          border-color: #373624;
          color: $pallete_a;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      }
      td {
        border-color: rgba(0,0,0,0.5);
      }
      .btn-primary {
        box-shadow: 1px 1px 1px #666;
      }
    }
    
    .btn-primary {
      background-color: $pallete_b;
      border-color: $pallete_b;
    }
    
    .btn-info {
      background-color: #373624;
      border-color: #373624;
      font-weight: bold;
      color: $pallete_a;
    }
    
    input {
      font-family: $body_font;
    }
    
    .pagination {
      .btn-primary {
        background-color: #5b593b;
        border-color: #5b593b;
        color: $pallete_a;
      }
      button {
        font-family: $heading_font;
      }      
    }

  }
</style>
