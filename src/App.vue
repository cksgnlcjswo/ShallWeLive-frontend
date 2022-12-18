<template>
  <div id="app">
    <div class="app-layer">
      <the-header-navbar></the-header-navbar>
      <div id="app-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";

export default {
  name: "App",
  components: {
    TheHeaderNavbar,
  },
};
</script>

<style>
/* reset CSS */
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
ol,
ul,
il {
  list-style: none;
}
a {
  text-decoration: none !important;
  color: #b3e5fc !important;
  text-shadow: 0 0 4px #3a3a3a !important;
}

/* font */
@font-face {
  font-family: "MainTitle";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SDMiSaeng.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

/* default */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/backgroundimg2.jpg");
  background-size: cover;
}

#app .app-layer {
  background-color: rgba(0, 0, 0, 0.2);
}
#app #app-container {
  margin: auto;
  padding: 120px 0 20px 0;
  width: 90%;
  max-width: 1536px;
  min-height: 100vh;
  display: flex;
}

/* common */
#app #app-container #main-container,
#app #app-container #user-container {
  /* #app #app-container #apt-container { */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app #app-container #user-container {
  padding: 60px 80px;
}
</style>

