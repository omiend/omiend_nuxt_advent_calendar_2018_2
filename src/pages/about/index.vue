<template>
  <section class="container">
    <div>
      <nuxt-link to="/">to top</nuxt-link>
      <h1 class="title">{{$store.state.title}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('SET_TITLE', "about - mounted")
  },
  asyncData (context) {
    context.store.commit('SET_TITLE', "about - asyncData")
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
}
</style>
