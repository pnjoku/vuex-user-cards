<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <div class="tile is-parent" v-for="user in users" :key="user.id">
        <UserListItem :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import User_List_Item from "./User_List_Item";
export default {
  name: "UserList",
  components: {
    UserListItem: User_List_Item,
  },
  computed: {
    ...mapGetters(["users"]),
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
.tile {
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
}
</style>
