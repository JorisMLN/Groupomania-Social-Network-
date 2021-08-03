import axios from "axios";
// import {store} from "../store/index.js";
import urlVariable from "@/services/urlVariable.js";

export default {

  signup(form){
    axios
    .post(urlVariable.getUrl() + "api/user/signup", form)
    .then((response) => {
      console.log(response.data);
      window.location = "http://localhost:8080/#/";
    })
    .catch((e) => {
      console.log(e);
    });
  },

  login(form){
    return axios
    .post(urlVariable.getUrl() + "api/user/login", form);
    // .then((response) => {
    //   console.log(response.data);
    //   localStorage.setItem("user", JSON.stringify(response.data));
    //   // data to the Vuex store
    //   store.commit("addId", response.data.userId);
    //   store.commit("addToken", response.data.token);
    //   window.location = "http://localhost:8080/#/profil";
    // })
    // .catch((e) => {
    //   console.log(e);
    // });
  },

  // getInfo(userId){
  //   axios
  //     .get(urlVariable.getUrl() + "api/user/info/" + userId, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer: " + store.state.token,
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response.data);
        // date to the Vuex store
        // store.commit("addFirstname", response.data.firstname);
        // store.commit("addLastname", response.data.lastname);
        // store.commit("addEmail", response.data.email);
        // store.commit("addHobbies", response.data.hobbies);
        // store.commit("addJob", response.data.job);
        // store.commit("addWebsite", response.data.website);
        // store.commit("addPicture", response.data.picture);
      //   this.picture = response.data.picture;
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
  // }
}