<template>
  <div class="not-found">
    <div class="not-found__col">
      <img src="@/assets/Images/poke.png" alt="logo" class="not-found__logo" />
    </div>
    <div class="not-found__col">
      <h1 class="not-found__title">404</h1>
      <h4>
        Sorry, we didn't find the Pokemon <br />
        you were looking for
      </h4>
      <button class="not-found__button" @click="goToPath('Home')">
        <strong>Go Back Home</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goToPath(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  min-height: calc(100% - 4rem);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: #828282;
  &__col {
    justify-items: center;
  }
  &__row {
    display: flex;
    flex-direction: row;
  }
  &__title {
    font-size: 100px;
    color: black;
    margin: 1rem;
  }
  &__button {
    width: auto;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 15px;
    margin: 0rem;
    color: #ffffff;
    background-color: #3899f8;
    &:hover {
      background-color: #58c8e0;
      color: #000;
    }
  }
  &__logo {
    margin: 3rem;
    width: 10rem;
    height: 10rem;
    transition-property: transform;
    transition-duration: 1s;
    animation-name: rotate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &:hover {
      animation-name: rotate;
      animation-duration: 0.4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>