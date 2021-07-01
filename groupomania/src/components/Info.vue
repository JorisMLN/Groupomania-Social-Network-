<template>
  <div class="info">
    <h2>{{ msg }}</h2>
    <article>
      <div class="listInfo"> {{ $store.state.firstname }} </div>
      <div class="listInfo"> {{ $store.state.lastname }} </div>
      <div class="listInfo"> {{ $store.state.job }} </div>
      <div class="listInfo"> {{ $store.state.hobbies }} </div>
      <div class="listInfo"> {{ $store.state.website }} </div>
      <div class="listInfo"> {{ $store.state.email }} </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import jwt_decode from "jwt-decode";
import checkToken from '@/services/checkToken.js';

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

    let token = checkToken.getUserToken(this.$store);
    if(token){
      let userId = token.userId;
      axios
        .get("http://localhost:3000/api/user/info/" + userId)
        .then((response) => {
          console.log(response.data);
          this.$store.commit("addFirstname", response.data.firstname);
          this.$store.commit("addLastname", response.data.lastname);
          this.$store.commit("addEmail", response.data.email);
          this.$store.commit("addHobbies", response.data.hobbies);
          this.$store.commit("addJob", response.data.job);
          this.$store.commit("addWebsite", response.data.website);
        })
        .catch((e) => {
          this.error.push(e);
        });
    }
  },
};

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
      // justify-content: space-around;
      flex-direction: column;
      font-size: 20px;
      color: #2c3e50;
      align-items: flex-start;
      padding-left: 10%; 
    }
  }
}
</style>
