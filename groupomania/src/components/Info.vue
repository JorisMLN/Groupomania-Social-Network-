<template>
  <div class="info">
    <h2>{{ msg }} {{ $store.state.userId }}</h2>
    <article>
      <div class="listInfo" v-for="item in list" :key="item">{{ item }}</div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

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
    let user_json = localStorage.getItem("user");
    let user = JSON.parse(user_json);
    console.log(user.userId, user.token);
    this.$store.commit("addId", user.userId);
    this.$store.commit("addToken", user.token);

    axios
      .get("http://localhost:3000/api/user/info/"+user.userId)
      .then((response) => {
        console.log(response.data);
        this.list = response.data;
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 500px;
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
