<template>
  <div id="apt-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppApt",
};
</script>

<style scoped>
#apt-container {
  width: 100%;
  min-height: calc(100vh - 140px);
}
</style>

