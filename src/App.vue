<template>
  <div class="app">
    <div>
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  //height: 100vh;
  //width: 100vw;
  margin: 0rem;
}
.app {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem auto;
  grid-gap: 0px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(241, 248, 255);
  background: linear-gradient(
    90deg,
    rgba(241, 248, 255, 1) 0%,
    rgba(255, 255, 240, 1) 100%
  );
}
</style>
