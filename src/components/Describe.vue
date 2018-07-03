<template>
  <div class="row">
    <article :id="title">
      <h1><img :src="image_path(image)"> {{ title }}</h1>
      {{ text }}
    </article>
  </div>
</template>

<script>
export default {
  name: 'Describe',
  props: ['title', 'text', 'basepath', 'image'],
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
  img {
    width: 45px;
  }
</style>
