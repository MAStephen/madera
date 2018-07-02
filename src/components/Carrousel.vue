<template>
  <div class="carousel">
    <div v-for="image in images" :key="image.id">
      <a class="carousel-item"><img :src="path(image)"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carrousel',
  data () {
    return {
    }
  },

  props: ['basepath', 'images'],

  methods: {
    path (icon) {
      return require('../assets/' + this.basepath + '/' + icon)
    }
  },

  mounted: function () {
    var elems = document.querySelectorAll('.carousel')
    window.M.Carousel.init(elems, {
    })
  },

  update: function () {
    var elems = document.querySelectorAll('.carousel')
    window.M.Carousel.init(elems, {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
