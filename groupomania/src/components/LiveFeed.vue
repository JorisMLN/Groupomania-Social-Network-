<template>
  <div class="LiveFeed">
    <div class="LiveFeed__post" v-for="item in list" :key="item">
      <h2>{{ item.firstname }} {{ item.lastname }}</h2>
      <p>{{ item.text }}</p>
      <button v-if="item.userId == $store.state.userId || $store.state.userId == 1" @click="deletePost(item.id)">Supprimer</button> | 
      <button class="likeBtn" v-if="item.userLiked.find(user => user == $store.state.userId)" @click="likePost(item.id, $store.state.userId)">Like</button>
      <button v-else @click="likePost(item.id, $store.state.userId)">Like</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import checkToken from "@/services/checkToken.js";

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

  methods: {
    // request for delete a post
    deletePost(id) {
      console.log(id);
      let token = checkToken.getUserToken(this.$store);
      if (token) {
        axios
          .request({
            method: "delete",
            baseURL: "http://localhost:3000/api/posts/" + id,
            headers: {
              Authorization: "Bearer: " + this.$store.state.token,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("Post supprimé !");
            // window.location = "http://localhost:8080/#/feed";
            this.callAllPosts();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.clearStoreAndStorage();
      }
    },

    // request for like a post
    likePost(postId, userId) {
      let payload = { postId, userId };
      console.log(payload);
      let token = checkToken.getUserToken(this.$store);
      if (token) {
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer: " + this.token,
          },
          body: JSON.stringify({ payload }),
        };
        fetch("http://localhost:3000/api/posts/like", requestOptions)
          .then((response) => response.json())
          .then((response) => {
            console.log(response)
            this.callAllPosts();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.clearStoreAndStorage();
      }
    },

    // request for all posts
    callAllPosts() {
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
          console.log(e);
        });
    },

    // function for clear the store and the storage
    clearStoreAndStorage() {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },

  created() {
    // checkToken
    let token = checkToken.getUserToken(this.$store);
    if (token) {
      // request for all posts
      this.callAllPosts();
    } else {
      this.clearStoreAndStorage();
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
    padding-bottom: 7px;
    h2 {
      font-size: 20px;
    }
    .likeBtn {
      background-color: #008000;
    }
  }
}

@media screen and (max-width: 430px) {
  .LiveFeed {
    width: 90%;
  }
}
</style>
