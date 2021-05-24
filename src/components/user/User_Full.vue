<template>
  <div v-if="user">
    <h4>Name: {{ user.name }}</h4>
    <p>UserName: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address:</p>
    <ul>
      <li>Street: {{ user.address.street }}</li>
      <li>Suite: {{ user.address.suite }}</li>
      <li>City: {{ user.address.city }}</li>
      <li>Zip Code: {{ user.address.zipcode }}</li>
      <li>
        GeoLocation: {{ user.address.geo.lat }},{{ user.address.geo.lng }}
      </li>
    </ul>
    <p>Company: {{ user.company.name }}</p>
    <p>Catch Phrase: "{{ user.company.catchPhrase }}"</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
    <p>bs: {{ user.company.bs }}</p>
    <button class="button is-rounded is-pulled-right" @click="goToHome">
      Back to All Users
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserFull",
  components: {},
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  created() {
    this.$store.dispatch("getUser", { id: this.$route.params.id });
  },
};
</script>
<style scoped>
ul {
  margin-left: 20px;
}
</style>
