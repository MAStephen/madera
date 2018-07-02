<template>
  <div>
    <h1>Les avantages</h1>

    <bloc basepath="why/parralax" image="parallax.jpg" title="Écologie" text="Salut les petits" />
    <card basepath="why/parralax" image="parallax.jpg" title="Norme ISO" text="Nos produits répondent aux normes habitat" />

    <carrousel basepath="why/carrousel" v-bind:images="['1.png', '2.png', '3.png', '4.png', '5.png']"></carrousel>
  </div>
</template>

<script>
import Carrousel from './Carrousel.vue'
import Bloc from './Bloc.vue'
import Card from './Card.vue'

export default {
  name: 'Why',
  data () {
    return {
    }
  },

  components: {
    Carrousel,
    Bloc,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
