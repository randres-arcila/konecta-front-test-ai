<template>
  <div class="home">
    <div class="home__pager">
      <pagination class="home__pagination" @paginationCall="pagination" />
    </div>
    <div class="home__conteiner-cards" v-if="pokemonPage != null">
      <div
        class="home__cards"
        v-for="(characters, index) in pokemonPage"
        :key="index"
      >
        <pokeCard
          class="poke-card"
          :data="characters"
          :index="index"
          :numberPage="numberPage"
        >
        </pokeCard>
      </div>
    </div>
  </div>
</template>

<script>
import pokeCard from "@/components/PokeCard";
import pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: {
    pokeCard,
    pagination,
  },

  data() {
    return {
      data: null,
      pokemonPage: [],
      numberPage: 1,
      aux: [],
      numAux: 0,
    };
  },

  async created() {
    await this.$store.dispatch("pokemons/getCharacters");
    this.data = this.$store.state.pokemons.characters.results;
    this.pokePage(1);
  },

  methods: {
    pagination(val) {
      if (val.page == ">") {
        if (this.numberPage == 5) {
          this.numberPage = 1;
          this.pokePage(this.numberPage);
        } else {
          this.numberPage = this.numberPage + 1;
          this.pokePage(this.numberPage);
        }
      } else if (val.page == "<") {
        if (this.numberPage == 1) {
          this.numberPage = 5;
          this.pokePage(this.numberPage);
        } else {
          this.numberPage = this.numberPage - 1;
          this.pokePage(this.numberPage);
        }
      } else {
        this.numberPage = val.page;
        this.pokePage(this.numberPage);
      }
    },

    async pokePage(num) {
      this.pokemonPage.splice(0, this.pokemonPage.length);
      this.numAux = 0;
      for (let i = (num - 1) * 10; i < num * 10; i++) {
        this.pokemonPage[this.numAux] = this.data[i];
        this.numAux = this.numAux + 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: url("~@/assets/Images/rotom.jpg") no-repeat center center fixed;
  background-size: cover;
  
  &__conteiner-cards {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    grid-auto-rows: auto auto;
    grid-column: 2;
    grid-row: 2;
    padding: 1rem;
    justify-items: center;
  }
  &__pager {
    z-index: 1;
    position: sticky;
    top: 4.5rem;
  }
}
</style>
