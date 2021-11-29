<template>
  <div class="navbar"  @click="goToPath('Home')">
      <img
        src="@/assets/Images/poke.png"
        alt="logo"
        class="navbar__logo"
      />
      <h2 class="navbar__tittle">PokeDex</h2>
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
  display: flex;
  background-color: #ebf5fd;
  font-family: "Montserrat", "Helvetica", sans-serif;
  z-index: 1;
  &__logo {
    height: 3rem;
    width: auto;
    align-self: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    cursor: pointer;
  }
  &__tittle{
    cursor: pointer;
  }
}
</style>