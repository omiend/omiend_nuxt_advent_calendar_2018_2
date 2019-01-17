<template>
  <section>
    <p>ASection</p>
    <ADiv/>
  </section>
</template>

<script>
import ADiv from '~/components/parts/ADiv.vue'
export default {
  components: {
    ADiv
  }
}
</script>

<style>
  section {
    border: 1px solid #000000;
  }
</style>
