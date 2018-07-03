<template>
<div>
<bloc basepath="rdv" image="parallax.jpg" title="Prendre un rendez-vous" text="" />

  <div class="container">
      <div class="row">
    <form class="col s12">
      <div class="row">
      <h4>Vos coordonnées</h4>
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" required>
          <label for="first_name">Prénom</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" required>
          <label for="last_name">Nom</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Courriel</label>
        </div>

        <div class="input-field col s12">
          <input id="phone" type="tel" class="validate">
          <label for="phone">Téléphone</label>
        </div>
      </div>

      <div class="row">
        <h4>Date de rendez-vous</h4>

        <div class="input-field col s6">
          <input id="rdv" type="date" class="validate" required>
        </div>
        <div class="input-field col s6">
          <input id="rdvtime" type="time" class="validate" required>
        </div>
      </div>

      <div class="row">
    <button class="btn waves-effect waves-light" type="submit" name="action">Je valide mon rendez-vous
        <i class="material-icons left">check</i>
    </button>
      </div>

    </form>
  </div>
  </div>

</div>
</template>

<script>
import Bloc from './Bloc.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },

  components: {
    Bloc
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
