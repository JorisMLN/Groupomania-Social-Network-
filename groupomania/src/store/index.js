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
    // userIdAndToken(state){
    //   return `${state.userId} ${state.token}`
    // }
    userIdAndToken(state){
      return `${state.userId} ${state.token}`
    }
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
