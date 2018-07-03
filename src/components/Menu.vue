<template>
<div>

  <bloc basepath="menu" image="house_draw.jpg" title="Madera" text="Pourquoi pas vous ?" />

  <div class="container">
    <div id="container_2">
      <div class="row">
      <div class="center"><h2>MADERA & VOUS</h2></div>
      <div class="col m12">
      <div class="col s6 m6">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header active"><i class="material-icons">accessibility</i>Vous</div>
            <div class="collapsible-body"><span>Chaque jour MADERA et VOUS explorons de nouvelle solution afin de trouver
              les meilleurs innovation pour vous permettre d'avoir la maison de vos rêves.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">insert_chart</i>Les démarches</div>
            <div class="collapsible-body"><span>Grace a notre rapidité d'exécution et notre outils HelpTOiMEme, vos démarches sont simplifier
            . Cela permet de débuter rapidement l'avancé des travaux.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Nos avantages</div>
            <div class="collapsible-body"><span>Profiter notre expertise en la matière.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="col s6 m6">
         <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">local_florist</i>L'écologie</div>
            <div class="collapsible-body"><span>L'écologie pour MADERA est un point essentiel. Tout nos maisons modulaire
              sont de A à Z réalisé pour nuire le moins possible a ta fôret !</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">cached</i>La transformation</div>
            <div class="collapsible-body"><span>MADERA soutient toute les proposition a la transformation vers un developpement
              durable et écologique. Chaque innovation proposé est analysé.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">group</i>Nos équipes</div>
            <div class="collapsible-body"><span>Nos équipes sont experimenté.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
        </ul>
      </div>
      </div>

      <div id="container_3" class="row">
        <div class="col s12 m6">
          <h2>PRISE DE CONTACTE</h2>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">filter_drama</i>Contacte</div>
              <div class="collapsible-body">
                <ul>
                  <li><span>Numéro de téléphone : 06.78.65.45.04</span></li>
                  <li><span>Numéro du fax : 05.67.43.23.98</span></li>
                  <li><span>Email : Madera-One@gmail.com</span></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">query_builder</i>Horaire</div>
              <div class="collapsible-body">
                <ul>
                  <li><span>Lundi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Mardi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Mercredi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Jeudi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Vendredi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Samedi : 10H-12H/14H-17H30</span></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="col s12 m6">
          <h2>PRISE DE RENDEZ-VOUS</h2>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">date_range</i>Rendez-vous</div>
              <div class="collapsible-body">
                <span>Vous pouvez prendre un rendez-vous avec l'un de nos commercial via le lien ci-dessus</span><br/><br/>
                <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Rendez-vous</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  </div>

  </div>
</template>

<script>
import Bloc from './Bloc.vue'

export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  mounted: function () {
    var elems = document.querySelectorAll('.collapsible')
    window.M.Collapsible.init(elems, {})
  },

  components: {
    Bloc
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
