import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apartments: data
  },
  mutations: {

  },
  actions: {

  }
})
