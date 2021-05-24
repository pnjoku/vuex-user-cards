<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand"></div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Dropdown />
            <a class="button is-primary" @click="toggleShowModal">
              <strong> Add User</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <AddUserModal v-show="showModal" />
</template>
<script>
import Dropdown from "./Dropdown.vue";
import AddUserModal from "./AddUserModal.vue";
export default {
  name: "Navbar",
  components: {
    Dropdown,
    AddUserModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal
        ? (this.showModal = true)
        : (this.Active = false);
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>
<style scoped></style>
