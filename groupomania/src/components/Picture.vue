<template>
  <div class="Pic">
    <h2>{{ msg }}</h2>
    <fieldset>
      <legend>Photo de Profil</legend>
      <input type="file" @change="photoFile($event)" />
      <br />
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import checkToken from "@/services/checkToken.js";

export default {
  name: "Picture",
  props: {
    msg: String,
  },

  methods: {
    photoFile: function () {
      let token = checkToken.getUserToken(this.$store);
      let userId = token.userId;
      if (token) {
        console.log(this.form);
        // request for delete the acount
        axios
          .put("http://localhost:3000/api/user/photo/" + userId, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer: " + this.$store.state.token,
            },
            // data: JSON.stringify({ post: this.form }),
          })
          .then((response) => {
            console.log(response.data);
            console.log("Photo modifiée !");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.clearStoreAndStorage();
      }
    },

    clearStoreAndStorage() {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Pic {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 20%;
  border: 1px solid #2c3e50;
  h2 {
    height: 4%;
    font-size: 18px;
  }
  fieldset {
    color: #42b983;
  }
}

@media screen and (max-width: 430px) {
  .Pic {
    flex-direction: column;
    width: 90%;
    height: 15%;
  }
}
</style>
