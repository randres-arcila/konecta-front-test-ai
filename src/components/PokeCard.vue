<template>
  <div class="poke-card" v-if="information != null">
    <router-link
      class="router"
      :to="{ name: 'Information', params: { id: information.name } }"
    >
      <div class="poke-card__header">
        <h2 class="poke-card__id"># {{ information.id }}</h2>
      </div>

      <div class="poke-card__container-image">
        <img
          class="poke-card__image"
          :src="information.sprites.front_default"
        />
      </div>

      <div class="poke-card__content">
        <h2 class="poke-card__name">
          {{ data.name }}
        </h2>
        <button
          class="poke-card__type"
          :style="{
            backgroundColor: colorType(information.types[0].type.name),
          }"
        >
          {{ information.types[0].type.name }}
        </button>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "PokeCard",
  props: {
    data: Object,
  },

  data() {
    return {
      information: null,
    };
  },

  async created() {
    await this.$store.dispatch("pokemons/getCharacter", this.data.url);
    this.information = this.$store.state.pokemons.character;
    //console.log(this.information.types[0].type.name);
  },

  methods: {
    colorType(type) {
      switch (type) {
        case "grass":
          return "#48d0b1";
        case "fire":
          return "#fb6c6c";
        case "water":
          return "#76bdfe";
        case "bug":
          return "#f7786b";
        case "normal":
          return "#b1736c";
          case "poison":
          return "#B058A0";
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
  overflow: hidden;
  transition: box-shadow 0.5s;
  background-color: rgb(250, 248, 248);
}
.poke-card:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/*-------------------- image --------------------*/
.poke-card__container-image {
  height: 80%;
  overflow: hidden;
  border-radius: 8px;
  transition: height 0.5s, background-color 1.5s;
}
.poke-card__container-image img {
  width: 100%;
  height: 100%;
  //background-color: #ffffff;
  object-fit: cover;
  transform: scale(1);
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s, transform 0.5s;
}
.poke-card:hover .poke-card__container-image {
  height: 16rem;
  background-color: #00ffff;
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
  position: absolute;
  height: 2rem;
  width: 6rem;
  //left: 20px;
  //right: 20px;
  //bottom: 56px;
  margin: 0;
  padding: 0;
  color: #666c74;
  line-height: 27px;
  opacity: 0;
  -webkit-transform: translateY(45px);
  transform: translateY(45px);
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
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
  //margin: 0rem;
  margin: 0;
  padding: 0 0 10px 0;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
}

.router {
  color: white;
  text-decoration: none;
}
</style>