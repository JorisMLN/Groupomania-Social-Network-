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
    hobbies: "",
    picture: ""
  },
  getters: {
  },
  mutations: {
    addId(state, userId){
      state.userId = userId
    },
    addToken(state, token){
      state.token = token
    },
    addFirstname(state, firstname){
      state.firstname = firstname
    },
    addLastname(state, lastname){
      state.lastname = lastname
    },
    addEmail(state, email){
      state.email = email
    },
    addJob(state, job){
      state.job = job
    },
    addHobbies(state, hobbies){
      state.hobbies = hobbies
    },
    addWebsite(state, website){
      state.website = website
    },
    addPicture(state, picture){
      state.picture = picture
    },
    cleanStore(state){
      Object.keys(state).forEach(keys => {
        state[keys] = "";
      });
    }
  },
  actions: {

  },
  modules: {
  }
})
