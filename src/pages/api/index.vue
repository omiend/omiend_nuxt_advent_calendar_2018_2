<template>
  <section class="container">
    <ul>
      <li v-for="u in users" :key="u.parsonal_id">
        {{ u.parsonal_id }}:{{ u.parsonal_name }}
        <ul>
          <li v-for="a in u.addresses" :key="a.address_id">
            {{ a.zip_code }} {{ a.address }}
            <ul>
              <li v-for="d in a.descriptions" :key="d.title">
                {{ d.title }}
                <br/>
                {{ d.text }}
              </li>
            </ul>
          </li>
        </ul>
        <br/>
      </li>
    </ul>
  </section>
</template>

<script>
import { users } from './data/users.json'
export default {
  methods: {
    async fetch() {
      this.users = users
    }
  },
  data () {
    return {
      users: Object
    }
  },
  mounted() {
    this.fetch()
  }
}
</script>
