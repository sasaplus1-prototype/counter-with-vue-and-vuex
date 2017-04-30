import Vue from 'vue';
import Vuex from 'vuex';

/**
 * vuex patrern image is here:
 * https://vuex.vuejs.org/ja/intro.html#what-is-a-state-management-pattern
 */

Vue.use(Vuex);

/**
 * see: https://vuex.vuejs.org/ja/state.html
 */
const state = {
  count: 0,
};

/**
 * see: https://vuex.vuejs.org/ja/actions.html
 *
 * execute from vue components
 */
const actions = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
};

/**
 * see: https://vuex.vuejs.org/ja/mutations.html
 *
 * execute from actions with commit function
 *
 * mutations must be an asynchronous
 */
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

/**
 * see: https://vuex.vuejs.org/ja/getters.html
 *
 * execute from vue components when update for state
 */
const getters = {
  isOdd(state) {
    return (state.count % 2 !== 0);
  },
  isEven(state) {
    return (state.count % 2 === 0);
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
