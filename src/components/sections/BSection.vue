<template>
  <section>
    <p>BSection</p>
    <BDiv/>
  </section>
</template>

<script>
import BDiv from '~/components/parts/BDiv.vue'
export default {
  components: {
    BDiv
  }
}
</script>

<style>
  section {
    border: 1px solid #000000;
  }
</style>
