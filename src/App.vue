<template>
  <div id="app">
    <div>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="left slogan">{{slogan}}</a>

            <a href="#" class="brand-logo center">{{titre}}</a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="why"><i class="small material-icons left">dashboard</i>{{menu_2}}</router-link></li>
              <li><a href="#"><i class="small material-icons left">insert_chart</i>{{menu_1}}</a></li>
              <li><a href="#"><i class="small material-icons left">date_range</i>{{menu_3}}</a></li>
              <li><a href="#"><i class="small material-icons left">contacts</i>{{menu_4}}</a></li>
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
  data () {
    return {
      titre: 'MADERA',
      menu_1: 'Les démarches',
      menu_2: 'Nos idées',
      menu_3: 'Prendre un rendez-vous',
      menu_4: 'Nous',
      slogan: 'Vous êtes chez vous'
    }
  }
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

body {
  margin: auto;
  padding: 0px;
}

nav{
  background-color: #607d8b;
  margin: auto;
  padding: 0px;
}

.slogan {
  font-size: 1.5 rem;
}
</style>
