<template>
  <div>
    <div class="user_profile">
      <h3>User information:</h3>
      <ul>
        <li>
          <span>Name:</span>
          {{userName}}
        </li>
        <li>
          <span>Last name:</span>
          {{userLastname}}
        </li>
        <li>
          <span>Age:</span>
          {{userAge}}
        </li>
      </ul>
      <h3>Parents</h3>
      <ul>
        <li v-for="(value,key,index) in userParents" :key="index">
          <span>{{key.charAt(0).toUpperCase() + key.slice(1)}}:</span>
          {{value}}
        </li>
      </ul>
      <button @click="updateName">Update name</button>
      <button @click="updateLastname('Smith')">Update Lastname</button>

      <div>
        <input type="text" v-model="friendInput" />
        <button @click="addFriend">Add friend</button>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
export default {
  data() {
    return {
      friendInput: ""
    };
  },
  props: {
    userName: String,
    userLastname: String,
    userAge: Number,
    userParents: Object,
    updateLastname: Function
  },
  methods: {
    updateName() {
      this.$emit("updateName", "Francis Steve");
    },
    addFriend() {
      bus.$emit("addFriend", this.friendInput);
    }
  }
};
</script>

<style>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid slategray;
  padding: 10px 20px;
}
</style>