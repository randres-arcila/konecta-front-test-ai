<template>
  <div class="information" v-if="notFound == 'notFound'">
    <h1 class="information__tittle">
      Information About {{ this.$route.params.id }}
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
      notFound: this.$store.state.pokemons.notFound,
    };
  },

  async created() {
    await this.$store.dispatch(
      "pokemons/getCharacterByName",
      this.$route.params.id
    );
    this.information = this.$store.state.pokemons.character;

    this.hp = this.information.stats[0].base_stat;
    this.attack = this.information.stats[1].base_stat;
    this.defence = this.information.stats[2].base_stat;
    this.specialAttack = this.information.stats[3].base_stat;
    this.specialDefence = this.information.stats[4].base_stat;
    this.speed = this.information.stats[5].base_stat;
  },
};
</script>

<style lang="scss" scoped>
.information {
  display: grid;
  justify-content: center;
  &__card {
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    background-color: rgb(33, 37, 41);
    width: 35rem;
    height: 20rem;
    border-radius: 10px;
    align-content: center;
  }
  &__tittle {
    text-transform: capitalize;
  }
  &__image {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
  &__stats{
      display: grid;
  }
  &__feature{
      justify-self: left;
  }
}
</style>