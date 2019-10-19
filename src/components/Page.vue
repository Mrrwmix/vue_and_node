<template>
  <div>Page</div>
</template>

<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("Deactivated");
  },
  activated() {
    console.log("Activated");
  }
};
</script>