import axios from "axios";
const url = process.env.VUE_APP_API_POKEMON;

export default{
    namespaced: true,

    state: {
        character: null,
        characters: null,
    },
    mutations: {
        setCharacters(state, characters){
            state.characters = characters;
        },
        setCharacter(state, character){
            state.character = character;
        },
    },
    actions: {
        async getCharacters({ commit }) {
          let response = await axios.get(
             url + 'pokemon?limit=50'
          );
          if(response.status == 200){
            commit("setCharacters", response.data);
          } else {
              console.log("algo salio mal");
          }
        },

        async getCharacter({ commit }, information) {
            let response = await axios.get(
               information
            );
            if(response.status == 200){
              commit("setCharacter", response.data);
            } else {
                console.log("algo salio mal");
            }
          },

          async getCharacterByName({ commit }, name) {
            let response = await axios.get(
                url + 'pokemon/' + name
            );
            if(response.status == 200){
              commit("setCharacter", response.data);
            } else {
                console.log("algo salio mal");
            }
          },
      },
    modules: {}
};