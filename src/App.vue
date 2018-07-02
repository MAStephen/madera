<template>
  <div id="app">
    <div>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo left">{{titre}}</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><i class="small material-icons">insert_chart</i></li>
              <li><a href="#">{{menu_1}}</a></li>
              <li><i class="small material-icons">dashboard</i></li>
              <li><a href="#">{{menu_2}}</a></li>
              <li><i class="small material-icons">date_range</i></li>
              <li><a href="#">{{menu_3}}</a></li>
              <li><i class="small material-icons">contacts</i></li>
              <li><a href="#">{{menu_4}}</a></li>
            </ul>
          </div>
        </nav>
      </div>

  <router-view/>

      <footer class="page-footer blue-grey">
        <div class="footer-copyright">
          <div class="container"> <p>© 2018 Copyright 
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titre: 'MADERA',
      menu_1: 'Les démarches',
      menu_2: 'Nos idées',
      menu_3: 'RDV',
      menu_4: 'Nous'
    } 
  }
     
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: auto;
  padding: 0px;
  width: 1550px;
}

nav{
  background-color: #607d8b;
  margin: auto;
  width: 1550px;
  padding: 0px;
}

</style>
