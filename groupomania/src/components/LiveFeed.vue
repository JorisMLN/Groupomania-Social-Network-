<template>
  <div class="LiveFeed">
    <div class="LiveFeed__post" v-for="item in list" :key="item">
      <!-- {{ item }} -->
      <h2>{{ item.firstname }} {{ item.lastname }}</h2>
      <p>{{ item.text }}</p>
      <button>Like</button> : {{ item.likes }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import jwt_decode from "jwt-decode";
import checkToken from '@/services/checkToken.js';

export default {
  name: "LiveFeed",
  props: {
    list: {
      type: Array,
    },
  },

  computed: {
    ...mapState(["token"]),
  },

  created() {
    // checkToken
    let token = checkToken.getUserToken(this.$store);
    if (token) {
      // request for all posts
      axios
        .request({
          method: "get",
          baseURL: "http://localhost:3000/api/posts",
          headers: {
            Authorization: "Bearer: " + this.$store.state.token,
          },
        })
        .then((response) => {
          this.list = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          // this.error.push(e);
          console.log(e);
        });
    } else {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LiveFeed {
  display: flex;
  // flex-direction: column-reverse;
  flex-direction: column;
  height: 75%;
  width: 50%;
  border: 3px solid #42b983;
  border-radius: 5px;
  overflow-y: scroll;
  scrollbar-color: #2c3e50 #42b983;
  scrollbar-width: thin;
  &__post {
    width: 99%;
    border: 1px solid #2c3e50;
    margin: 4px;
    h2 {
      font-size: 20px;
    }
  }
}
</style>
