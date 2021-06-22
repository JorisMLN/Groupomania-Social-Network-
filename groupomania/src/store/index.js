import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: "",
    token: "",
    email: "",
    lastname: "",
    firstname: "",
    job: "",
    website: "",
    hobbies: ""
  },
  getters: {
  },
  mutations: {
    addId(state, userId){
      state.userId = userId
    },
    addToken(state, token){
      state.token = token
    }
    // addInfo(state){

    // }
  },
  actions: {
  },
  modules: {
  }
})
