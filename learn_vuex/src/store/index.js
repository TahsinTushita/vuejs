import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colourCode: "red",
  },
  mutations: {
    increaseCounter(state, randomNum) {
      state.counter += randomNum;
    },

    decreaseCounter(state) {
      state.counter--;
    },

    setColourCode(state, newColour) {
      state.colourCode = newColour;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((res) => {
        commit("increaseCounter", res.data);
      });
    },

    decreaseCounter({ commit }) {
      commit("decreaseCounter");
    },

    setColourCode({ commit }, newColour) {
      commit("setColourCode", newColour);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
