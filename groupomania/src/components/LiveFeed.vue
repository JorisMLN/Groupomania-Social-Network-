<template>
  <div class="LiveFeed">
    <div class="LiveFeed__post" v-for="item in list" :key="item">
      <!-- {{ item }} -->
      {{ item.text }}<br />
      Like: {{ item.likes }} Dislikes {{ item.likes }} _id:{{ item._id }}<br />
      <br />
      sdkjfhdsfkjfhdskfjdshsdkfjhsdfkjsdhfksdfj<br />
      sdkjfhdsfkjfhdskfjdshsdkfjhsdfkjsdhfksdfj<br />
      sdkjfhdsfkjfhdskfjdshsdkfjhsdfkjsdhfksdfj<br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import { checkToken } from '@/services.checkToken.js'

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
    axios
      .request({
        method: "get",
        baseURL: "http://localhost:3000/api/posts",
        headers: {
          Authorization: "Bearer: " + this.token,
        },
      })
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LiveFeed {
  display: flex;
  flex-direction: column-reverse;
  height: 80%;
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
  }
}
</style>
