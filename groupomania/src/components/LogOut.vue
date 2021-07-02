<template>
  <div class="LogOut">
    <button @click="logOut">{{ msgLog }}</button>
    <button @click="unSub">{{ msgUnsub }}</button>
  </div>
</template>

<script>
import axios from "axios";
import checkToken from "@/services/checkToken.js";

export default {
  name: "LogOut",
  props: {
    msgLog: String,
    msgUnsub: String,
  },
  methods: {
    logOut: function () {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
    unSub: function () {
      window.confirm("Voulez-vous vraiment supprimer votre compte?");
      if (confirm("Press a button!")) {
        let token = checkToken.getUserToken(this.$store);
        let userId = token.userId;
        if (token) {
          // request for delete the acount
          axios
            .request({
              method: "delete",
              baseURL: "http://localhost:3000/api/user/unsub/" + userId,
              headers: {
                Authorization: "Bearer: " + this.$store.state.token,
              },
            })
            .then((response) => {
              console.log(response.data);
              console.log("Utilisateur supprimé !");
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          localStorage.clear();
          this.$store.commit("cleanStore");
          window.location = "http://localhost:8080/#/";
        }
      } else {
        console.log("You pressed Cancel!");
      }
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LogOut {
  // margin-top: -8px;
  button {
    border: 1px solid #2c3e50;
    color: #42b983;
    width: 100px;
    padding: 2px;
    text-decoration: none;
  }
}
</style>
