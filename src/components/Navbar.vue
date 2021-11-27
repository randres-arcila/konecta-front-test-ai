<template>
  <div class="navbar">
      <img
        @click="goToPath('Home')"
        src="@/assets/Images/poke.png"
        alt="logo"
        class="navbar__logo"
      />
      <h2 @click="goToPath('Home')">PokeDEx</h2>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    goToPath(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 4rem;
  display: grid;
  grid-template-columns: 6% 10% auto;
  grid-template-rows: 4rem;
  background-color: #ebf5fd;
  font-family: "Montserrat", "Helvetica", sans-serif;
  z-index: 1;
  &__logo {
    grid-column: 1;
    height: 3rem;
    width: auto;
    align-self: center;
    padding: 0.9rem 2rem 0.9rem 2rem;
    cursor: pointer;
  }
}
</style>