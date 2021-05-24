<template>
  <div class="dd">
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <button
          class="button is-info"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
          @click.prevent="toggleDropdown"
        >
          <span><strong>Sort Users</strong></span>
          <span class="icon is-small">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu2" role="menu">
        <div class="dropdown-content">
          <a
            href="#"
            @click="sort('SORT_USERS_LAST_NAME_ASC')"
            class="dropdown-item"
          >
            by Last Name ASC
          </a>
          <hr class="dropdown-divider" />
          <a
            href="#"
            @click="sort('SORT_USERS_LAST_NAME_DESC')"
            class="dropdown-item"
          >
            by Last Name DESC
          </a>
          <hr class="dropdown-divider" />
          <a
            href="#"
            @click="sort('SORT_USERS_BY_ZIP_ASC')"
            class="dropdown-item"
          >
            by Zip Code ASC
          </a>
          <hr class="dropdown-divider" />
          <a
            href="#"
            @click="sort('SORT_USERS_BY_ZIP_DESC')"
            class="dropdown-item"
          >
            by Zip Code DESC
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    sort(key) {
      this.$store.dispatch("filter", { mutation: key });
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false;
      }
    },
    toggleDropdown() {
      !this.isActive ? (this.isActive = true) : (this.Active = false);
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },
};
</script>
<style scoped>
.dd {
  margin-right: 2px;
}
</style>
