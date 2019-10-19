<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <compUserProfile
        :userName="name"
        :userLastname="lastname"
        :userAge="age"
        :userParents="parents"
        @updateName="name = $event"
        :updateLastname="updateLastname"
      />
      <compFriends />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/Header_footer/Footer";
import compUserProfile from "./components/User/Profile";
import compFriends from "./components/User/Friends";

export default {
  data() {
    return {
      name: "Francis",
      lastname: "Jones",
      age: 25,
      parents: {
        mother: "Martha",
        father: "Mario"
      }
    };
  },
  methods: {
    updateLastname(val) {
      this.lastname = val;
    }
  },
  components: {
    "app-footer": Footer,
    compUserProfile,
    compFriends
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>