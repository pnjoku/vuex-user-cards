<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h4>{{ user.name }}</h4>
        <p>UserName: {{ user.username }}</p>
        <p>Company: {{ user.company.name }}</p>
        <p>Company Catch Phrase: "{{ user.company.catchPhrase }}"</p>
        <router-link
          :to="`/users/${user.id}`"
          class="button is-rounded is-light"
        >
          <strong>More Details</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserListItem",
  props: ["user"],
};
</script>
<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 250px;
}
</style>
