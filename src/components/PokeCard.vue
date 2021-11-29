<template>
  <div class="poke-card" v-if="information != null">
    <router-link
      class="router"
      :to="{ name: 'Information', params: { id: information.name } }"
    >
      <div class="poke-card__header">
        <h2 class="poke-card__id"># {{ information.id }}</h2>
      </div>

      <div class="poke-card__container-image" :style="styleTypes(0)">
        <img
          class="poke-card__image"
          :src="information.sprites.front_default"
        />
      </div>

      <div class="poke-card__content">
        <h2 class="poke-card__name">
          {{ data.name }}
        </h2>
        <div
          class="poke-card__container-buttons"
          v-for="(type, index) in information.types"
          :key="index"
        >
          <button class="poke-card__type" :style="styleTypes(index)">
            {{ information.types[index].type.name }}
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "PokeCard",
  props: {
    data: Object,
    numberPage: null,
  },

  data() {
    return {
      information: null,
      notification_type: null,
      typePokemon: null,
      typesList: [],
    };
  },

  async created() {
    await this.$store.dispatch("pokemons/getCharacter", this.data.url);
    this.information = await this.$store.state.pokemons.character;
    this.types();
  },

  watch: {
    async numberPage() {
      await this.$store.dispatch("pokemons/getCharacter", this.data.url);
      this.information = await this.$store.state.pokemons.character;
      this.typesList.splice(0, this.typesList.length);
      this.types();
    },
  },

  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
/*-------------------- Card --------------------*/
.poke-card {
  width: 20rem;
  height: 23rem;
  padding: 0.8rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: box-shadow 0.5s;
  background-color: rgb(236, 235, 235);
  margin: 1rem;
  overflow: hidden;

  &__container-buttons {
    display: inline-block;
    margin-right: 1rem;
  }
}
.poke-card:hover {
  box-shadow: 0 0 50px rgba(21, 200, 255, 1);
}

/*-------------------- image --------------------*/
.poke-card__container-image {
  height: 80%;
  border-radius: 8px;
  transition: height 0.5s, background-color 1.5s;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}
.poke-card__container-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s, transform 0.5s;
}
.poke-card:hover .poke-card__container-image {
  height: 16rem;
  background-color: var(--color);
}

.poke-card:hover .poke-card__container-image img {
  transform: scale(1.3);
}

/* -------------------- content --------------------*/
.poke-card__content {
  position: relative;
  height: 3rem;
  padding: 0.5rem;
  transition: height 0.5s;
}
.poke-card:hover .poke-card__content {
  height: 5rem;
}
.poke-card__type {
  height: 2rem;
  width: 6rem;
  margin: 0;
  padding: 0;
  background-color: var(--color);
  color: var(--text-color);
  opacity: 0;
  -webkit-transform: translateY(45px);
  transform: translateY(45px);
  transition: opacity 0.3s, transform 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  border-radius: 8px;
  border-color: transparent;
}
.poke-card:hover .poke-card__type {
  opacity: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.poke-card__header {
  display: grid;
  justify-content: left;
}
.poke-card__id {
  color: rgb(167, 167, 167);
  margin: 0rem;
  margin-bottom: 0.3rem;
  text-decoration: none;
}

.poke-card__name {
  margin: 0;
  padding: 0 0 10px 0;
  color: #1a293b;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
}

.router {
  color: white;
  text-decoration: none;
}

.prueba:hover {
  height: 16rem;
  background-color: #000;
}
</style>