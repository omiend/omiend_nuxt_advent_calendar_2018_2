<template>
  <section class="container">
    <div>
      <nuxt-link to="/">to top</nuxt-link>
      <h1 class="title">{{$store.state.title}}</h1>
      <p>mounted_time : {{$store.state.mounted_time}}</p>
      <p>async_data_time : {{$store.state.async_data_time}}</p>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('SET_MOUNTED_TIME', { time: new Date() })
    this.$store.commit('SET_TITLE', { title: "about - mounted" })
  },
  asyncData (context) {
    context.store.commit('SET_ASYNC_DATA_TIME', { time: new Date() })
    context.store.commit('SET_TITLE', { title: "about - asyncData" })
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

p {
  font-size: 0.5rem;
}
</style>
