<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add User</p>
        <button class="delete" @click="emit" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <form id="frm" name="user-form" @submit="checkForm">
          <div class="field">
            <input
              class="input"
              name="name"
              placeholder="name"
              v-model="name"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="username"
              placeholder="username"
              v-model="username"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="email"
              placeholder="email"
              v-model="email"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="street"
              placeholder="street"
              v-model="street"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="suite"
              placeholder="suite"
              v-model="suite"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="city"
              placeholder="city"
              v-model="city"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="state"
              placeholder="state"
              v-model="state"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="zip"
              placeholder="zip"
              v-model="zipcode"
            />
          </div>
          <div class="field">
            <input class="input" name="lat" placeholder="lat" v-model="lat" />
          </div>
          <div class="field">
            <input class="input" name="lng" placeholder="lng" v-model="lng" />
          </div>
          <div class="field">
            <input
              class="input"
              name="companyName"
              placeholder="company name"
              v-model="name"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="companyCatchPhrase"
              placeholder="catch phrase"
              v-model="catchPhrase"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="companyPhone"
              placeholder="phone"
              v-model="phone"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="companyWebsite"
              placeholder="website"
              v-model="website"
            />
          </div>
          <div class="field">
            <input
              class="input"
              name="companyBs"
              placeholder="bs"
              v-model="bs"
            />
          </div>
          <input class="button is-success" type="submit" value="Submit" />
          <button class="button" @click="emit">Cancel</button>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddUserModal",
  methods: {
    checkForm(e) {
      this.emit();
      const formattedData = {
        name: this.name,
        username: this.username,
        email: this.email,
        address: {
          street: this.street,
          suite: this.suite,
          city: this.city,
          zipcode: this.zipcode,
          geo: {
            lat: this.lat ? this.lat : "-38.2386",
            lng: this.lng ? this.lng : "57.2232",
          },
        },
        phone: this.phone ? this.phone : "024-648-3804",
        website: "Prince.com",
        company: {
          name: "Prince Company LLC",
          catchPhrase: "hi",
          bs: "target end-to-end models",
        },
      };
      this.addUser(formattedData);
      e.preventDefault();
    },
    emit() {
      this.$parent.toggleShowModal();
    },
    addUser(data) {
      this.$store.dispatch("addUser", { user: data });
    },
  },
};
</script>
