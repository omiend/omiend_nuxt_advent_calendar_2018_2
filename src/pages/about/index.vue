<template>
  <section class="container">
    <div>
      <nuxt-link to="/">to top</nuxt-link>
      <h1 class="title">{{title}}</h1>
      <p>mounted_time : {{mounted_time}}</p>
      <p>async_data_time : {{async_data_time}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: "default from data()",
      mounted_time: "default from data()",
      async_data_time: "default from data()"
    }
  },
  mounted () {
    this.title = "title from mounted"
    this.mounted_time = new Date()
  },
  asyncData (context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "title from asyncData",
          async_data_time: new Date()
        })
      }, 5000);
    }).then((res) => {
      return res
    })
  }
}
</script>
