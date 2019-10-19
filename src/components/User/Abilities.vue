<template>
  <div class="user_profile">
    <h3>User profile:</h3>
    <hr />
    <slot name="other">Loading...</slot>
    <hr />
    <div>
      <slot name="main_ab"></slot>
    </div>
    <hr />
    <div>
      <slot name="notes"></slot>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abilities: ["JS", "CSS", "HTML"]
    };
  }
};
</script>

<style scoped>
li {
  color: red;
}
.user_profile {
  border: 1px solid slategray;
  padding: 10px 20px;
}
</style>