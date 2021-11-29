<template>
  <div class="information">
    <div>
      <img
        src="@/assets/Images/BackN.png"
        alt="volver"
        class="information__back"
        @click="goToPath('Home')"
      />
    </div>
    <div class="information__container">
      <h1 class="information__tittle">
        Information About: <br />
        <h1 class="information__namePokemon">{{ this.$route.params.id }}</h1>
      </h1>
      <div class="information__card">
        <div class="information__container-image" v-if="information != null">
          <img
            class="information__image"
            :src="information.sprites.front_default"
          />
        </div>
        <div class="information__stats">
          <h2 class="information__stats-tittle">Stats</h2>
          <h3 class="information__feature">Hp:</h3>
          <h3 class="information__value">{{ hp }}</h3>
          <h3 class="information__feature">Attack:</h3>
          <h3 class="information__value">{{ attack }}</h3>
          <h3 class="information__feature">Defence:</h3>
          <h3 class="information__value">{{ defence }}</h3>
          <h3 class="information__feature">Special Attack:</h3>
          <h3 class="information__value">{{ specialAttack }}</h3>
          <h3 class="information__feature">Special Defence:</h3>
          <h3 class="information__value">{{ specialDefence }}</h3>
          <h3 class="information__feature">Speed:</h3>
          <h3 class="information__value">{{ speed }}</h3>
        </div>
        <div class="information__type">
          <h2 class="information__type-tittle">Types:</h2>
          <div
            class="information__container-buttons"
            v-for="(type, index) in typesList"
            :key="index"
          >
            <button class="information__type-button" :style="styleTypes(index)">
              {{ information.types[index].type.name }}
            </button>
          </div>
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
      typesList: [],
    };
  },

  async created() {
    await this.isGood();
    this.information = this.$store.state.pokemons.character;
    await this.types();

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
      if (isGood.data == "Not Found") {
        this.$router.push("/404");
      }
    },

    types() {
      for (let i = 0; i < this.information.types.length; i++) {
        this.typesList.push(this.information.types[i].type.name);
      }
    },

    styleTypes(val) {
      switch (this.typesList[val]) {
        case "grass":
          return { "--color": "#78C850", "--text-color": "#000" };
        case "fire":
          return { "--color": "#F05030", "--text-color": "#fff" };
        case "water":
          return { "--color": "#3899F8", "--text-color": "#000" };
        case "bug":
          return { "--color": "#A8B820", "--text-color": "#000" };
        case "normal":
          return { "--color": "#A8A090", "--text-color": "#000" };
        case "poison":
          return { "--color": "#B058A0", "--text-color": "#fff" };
        case "electric":
          return { "--color": "#F8D030", "--text-color": "#000" };
        case "ground":
          return { "--color": "#E9D6A4", "--text-color": "#000" };
        case "fairy":
          return { "--color": "#E79FE7", "--text-color": "#fff" };
        case "flying":
          return { "--color": "#98A8F0", "--text-color": "#000" };
        default:
          return { "--color": "#000", "--text-color": "#fff" };
      }
    },

    goToPath(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.information {
  min-height: 100%;
  background: url("~@/assets/Images/wp3537004.jpg") no-repeat center center
    fixed;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;

  &__back{
    position: absolute;
    width: 5rem;
    height: 5rem;
    left: 2rem;
    top: 6rem;
    cursor: pointer;
  }

  &__card {
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    background-color: #1a293b;
    width: 40rem;
    height: 31rem;
    border-radius: 10px;
    padding: 1rem;
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
  &__namePokemon {
    margin: 0rem;
    color: #1a293b;
  }
  &__container-image {
    background-color: rgb(221, 221, 221);
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
    grid-template-columns: auto auto;
    align-content: center;
  }
  &__stats-tittle {
    grid-column: 1/3;
  }
  &__value {
    grid-column: 2;
    margin: 0rem;
  }
  &__feature {
    grid-column: 1;
    justify-self: left;
    margin: 0rem;
  }
  &__type {
    display: grid;
    grid-template-columns: 40% auto auto;
    grid-template-rows: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  &__type-tittle {
    grid-row: 1;
    margin: 0rem;
    justify-self: left;
  }
  &__container-buttons {
    grid-row: 1;
    display: inline-block;
    margin: 0rem;
  }
  &__type-button {
    height: 2rem;
    width: 6rem;
    margin: 0rem;
    padding: 0;
    background-color: var(--color);
    color: var(--text-color);
    border-color: transparent;
    border-radius: 8px;
  }
}

.information__back:hover{
    animation-name: back;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}

@keyframes back {
  95% {
    transform: scale(1.1);
    opacity: 95%;
  }
  100% {
    transform: scale(1);
    opacity: 100%;
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