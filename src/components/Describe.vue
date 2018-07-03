<template>
  <div class="row">
    <article>
      <h1>{{ title }}</h1>
      {{ text }}
    </article>
  </div>
</template>

<script>
export default {
  name: 'Describe',
  props: ['title', 'text'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
