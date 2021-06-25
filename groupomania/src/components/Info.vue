<template>
  <div class="info">
    <h2>{{ msg }}</h2>
    <article>
      <div class="listInfo" v-for="item in list" :key="item">{{ item }}</div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import jwt_decode from "jwt-decode";
// import checkToken from '@/components/checkToken.vue';

export default {
  name: "Info",
  props: {
    msg: String,
    list: {
      type: Array,
    },
  },

  computed: {
    ...mapState({
      userId: "userId",
      token: "token",
    }),
  },

  created() {

    // let token = checkToken.getUserToken();
    // if(token){
    //   let user = JSON.parse(localStorage.getItem("user"));
    //   let userId = user.userId;
    //   axios
    //     .get("http://localhost:3000/api/user/info/" + userId)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.list = response.data;
    //     })
    //     .catch((e) => {
    //       this.error.push(e);
    //     });
    // }
    // checkToken
    let decodedToken = getDecodedToken();
    console.log(decodedToken.exp);
    console.log(Date.now());
    if (decodedToken.exp > Date.now()) {
      window.location = "http://localhost:8080/#/";
      localStorage.clear();
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = user.userId;
      axios
        .get("http://localhost:3000/api/user/info/" + userId)
        .then((response) => {
          console.log(response.data);
          this.list = response.data;
          console.log(response.data.firstname);
          this.$store.commit("addFirstname", response.data.firstname);
          console.log(response.data.lastname);
          this.$store.commit("addLastname", response.data.lastname);
        })
        .catch((e) => {
          this.error.push(e);
        });
    }
  },
};

// functions
function getDecodedToken() {
  let token = getTokenFromLocalStorage();
  return jwt_decode(token);
}

function getTokenFromLocalStorage() {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (!user) {
    window.location = "http://localhost:8080/#/";
    localStorage.clear();
  } else {
    let userToken = user.token;
    console.log(userToken);
    return userToken;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 95%;
  width: 300px;
  border: 1px solid #2c3e50;
  h1 {
    height: 10%;
  }
  article {
    height: 80%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .listInfo {
      height: 10%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      font-size: 20px;
      color: #2c3e50;
    }
  }
}
</style>
