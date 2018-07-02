<template>
  <div>
    <h1>Les avantages</h1>

    <carrousel basepath="why/carrousel" v-bind:images="['1.png', '2.png', '3.png', '4.png', '5.png']"></carrousel>
  </div>
</template>

<script>
import Carrousel from './Carrousel.vue'

export default {
  name: 'Why',
  data () {
    return {
    }
  },

  components: {
    Carrousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
