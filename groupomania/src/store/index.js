import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: "",
    token: ""
  },
  getters: {
    userIdAndToken(state){
      return `${state.userId}/${state.token}`
    }
  },
  mutations: {
    // addIdAndToken(state, response){
    //   state.userId = response.data.userId,
    //   state.token = reponse.data.token
    // }
  },
  actions: {
  },
  modules: {
  }
})
