import axios from "axios";
const url = process.env.VUE_APP_API_POKEMON;

export default {
  namespaced: true,

  state: {
    character: null,
    characters: null,
    notFound: "estaMelo",
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setCharacter(state, character) {
      state.character = character;
    },
    setNotFound(state, notFound) {
      state.notFound = notFound;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      let response = await axios.get(
        url + 'pokemon?limit=50'
      );
      if (response.status == 200) {
        commit("setCharacters", response.data);
      } else {
        console.log("algo salio mal");
      }
    },

    async getCharacter({ commit }, information) {
      let response = await axios.get(
        information
      );
      if (response.status == 200) {
        commit("setCharacter", response.data);
      } else {
        console.log("algo salio mal");
      }
    },

    async getCharacterByName({ commit }, name) {
        let response = await axios.get(
          url + 'pokemon/' + name, { validateStatus: () => true }
        );
        if (response.status == 200) {
          commit("setCharacter", response.data);
        }
        else if (response.status == 404) {
          console.log("algo salio mal");
        }
        return response;
    },
  },
  modules: {}
};