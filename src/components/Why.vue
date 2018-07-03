<template>
  <div>
    <bloc basepath="why/parralax" image="parallax.jpg" title="Nos idées" text="La seule limite votre imagination !" />

    <div class="container">
       <div class="row hide-on-med-and-down">
          <div class="col s4">
            <card basepath="why/card" image="iso.jpg" title="Qualité" text="La certification norme ISO 9001 est une garantie d'engagement du le plan de la qualité. Une entreprise certifiée ISO 9001 respecte un référentiel et est soumise à des contrôles qualité. Elle s'engage également à maintenir une amélioration continue." />
          </div>

          <div class="col s4">
            <card basepath="why/card" image="eco.png" title="Écologique" text="L’habitat de demain sera une maison passive. Mais qu’est-ce donc ? Une maison écolo qui ne consomme presque pas d’énergie. Un challenge pour nos architectes."/>
          </div>

          <div class="col s4">
            <card basepath="why/card" image="custom.png" title="Personnalisé" text="La personnalisation un critère de choix. Pas question de faire construire la même maison que « monsieur Tout-le-monde ». Après tout votre lieu de vie doit aussi refléter votre personnalité."/>
          </div>
      </div>

      <div class="row">
        <carrousel basepath="why/carrousel" v-bind:images="['1.png', '2.png', '3.png', '4.png', '5.png']"></carrousel>
      </div>

      <div class="row">
        <describe basepath="why/card" image="iso.jpg" title="Qualité" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>

      <div class="row">
        <describe basepath="why/card" image="eco.png" title="Écologique" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>

      <div class="row">
        <describe basepath="why/card" image="custom.png" title="Personnalisé" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>

    </div>

  </div>
</template>

<script>
import Carrousel from './Carrousel.vue'
import Bloc from './Bloc.vue'
import Card from './Card.vue'
import Describe from './Describe.vue'

export default {
  name: 'Why',
  data () {
    return {
    }
  },

  components: {
    Carrousel,
    Bloc,
    Card,
    Describe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
