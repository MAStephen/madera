<template>
  <div class="card">
    <div class="card-image">
      <img :src="image_path(image)">
      <span class="card-title">{{ title }}</span>
    </div>
    <div class="card-content">
      <p>{{ text }}</p>
    </div>
    <div class="card-action">
      <a href="#">{{title_link || "En savoir plus"}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['text', 'title', 'image', 'basepath', 'title_link'],
  data () {
    return {
    }
  },

  methods: {
    image_path (icon) {
      return require('../assets/' + this.basepath + '/' + icon)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
