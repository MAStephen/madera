<template>
  <div>
    <div class="parallax-container valign-wrapper">
        <div class="container">
        <div class="row">
          <div class="col s12 white-text">
            <h2 class="teal-text teal-text lighten-2">{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
  </div>
      <div class="parallax"><img :src="image_path(image)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bloc',
  props: ['image', 'basepath', 'text', 'title'],
  data () {
    return {
    }
  },

  methods: {
    image_path (icon) {
      return require('../assets/' + this.basepath + '/' + icon)
    }
  },

  mounted: function () {
    var elems = document.querySelectorAll('.parallax')
    window.M.Parallax.init(elems, {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
