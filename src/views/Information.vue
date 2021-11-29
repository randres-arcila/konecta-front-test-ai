<template>
  <div class="information">
    <div class="information__container">
      <h1 class="information__tittle">
        Information About: <br> 
        <h1 class="information__namePokemon">{{ this.$route.params.id }}</h1>
      </h1>
      <div class="information__card">
        <div class="information__container-image" v-if="information != null">
          <img
            class="information__image"
            :src="information.sprites.front_default"
          />
        </div>
        <div class="information-stats">
          <h2>Stats</h2>
          <h3 class="information__feature">Hp: {{ hp }}</h3>
          <h3 class="information__feature">Attack: {{ attack }}</h3>
          <h3 class="information__feature">Defence: {{ defence }}</h3>
          <h3 class="information__feature">
            Special Attack: {{ specialAttack }}
          </h3>
          <h3 class="information__feature">
            Special Defence: {{ specialDefence }}
          </h3>
          <h3 class="information__feature">Speed: {{ speed }}</h3>
        </div>
        <div class="information__type">
          Hola
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      information: null,
      hp: null,
      attack: null,
      defence: null,
      specialAttack: null,
      specialDefence: null,
      speed: null,
    };
  },

  async created() {
    await this.isGood();
    this.information = this.$store.state.pokemons.character;

    this.hp = this.information.stats[0].base_stat;
    this.attack = this.information.stats[1].base_stat;
    this.defence = this.information.stats[2].base_stat;
    this.specialAttack = this.information.stats[3].base_stat;
    this.specialDefence = this.information.stats[4].base_stat;
    this.speed = this.information.stats[5].base_stat;
  },

  methods: {
    async isGood() {
      let isGood = await this.$store.dispatch(
        "pokemons/getCharacterByName",
        this.$route.params.id
      );
      console.log(isGood.data);
      if (isGood.data == "Not Found") {
        this.$router.push("/404");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.information {
  min-height: 100%;
  background: url("~@/assets/Images/wp3537004.jpg") no-repeat center center fixed;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;

  &__card {
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    background-color: rgb(33, 37, 41);
    width: 40rem;
    height: 30rem;
    border-radius: 10px;
    //align-content: center;
    animation-name: stretch;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  &__tittle {
    color: #fff;
    text-transform: capitalize;
    margin: 1rem;
  }
  &__namePokemon{
    margin: 0rem;
    color: #000;
  }
  &__container-image{
    background-color: #fff;
    border-radius: 8px;
    margin: 0.5rem;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__stats {
    display: grid;
  }
  &__feature {
    justify-self: left;
  }
}

@keyframes stretch {
  0% {
    transform: scale(0.3);
    opacity: 70%;
  }
  90% {
    transform: scale(1.15);
    opacity: 80%;
  }
  95% {
    transform: scale(1.1);
    opacity: 95%;
  }
  100% {
    transform: scale(1);
    opacity: 100%;
  }
}
</style>