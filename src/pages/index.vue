<template>
  <section class="container">
    <div>
      <nuxt-link to="/about">to about</nuxt-link>
      <h1 class="title">{{title}}</h1>
      <p>mounted_time : {{mounted_time}}</p>
      <p>{{counter}}</p>
      <p>{{click_date}}</p>
      <button @click="increment()">カウントアップ</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: "default from data()",
      mounted_time: "default from data()"
    }
  },
  mounted () {
    this.title = "title from mounted"
    this.mounted_time = new Date()
  },
  computed: {
    counter() { return this.$store.state.counter },
    click_date() { return this.$store.state.click_date }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment_action', { click_date: new Date })
    }
  }
}
</script>
