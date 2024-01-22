import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentClassIndex: 1
    },
    mutations: {
        SET_CLASS_INDEX(state, newIndex) {
            state.currentClassIndex = newIndex;
        }
    },
    actions: {
        changeClassIndex({ commit, state }) {
            let newIndex = state.currentClassIndex >= 5 ? 1 : state.currentClassIndex + 1;
            commit('SET_CLASS_INDEX', newIndex);
        }
    }
});
