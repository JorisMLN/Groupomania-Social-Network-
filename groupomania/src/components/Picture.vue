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
import urlVariable from "@/services/urlVariable.js";

export default {
  name: "Picture",
  props: {
    msg: String,
  },

  data(){
    return{
      urlAPI: urlVariable.getUrl(),
    }
  },

  methods: {
    photoFile: function ($event) {
      console.log($event.target.files);
      // import service checkToken
      let token = checkToken.getUserToken(this.$store);
      let userId = token.userId;
      if (token) {
        // request for delete the acount
        let formData = new FormData();
        formData.append("image", $event.target.files[0]);
        axios
          .put(this.urlAPI + "api/user/photo/" + userId, formData,{
            headers: {
              "Content-Type": 'multipart/form-data',
              Authorization: "Bearer: " + this.$store.state.token,
            }
          })
          .then((response) => {
            console.log(response);
            console.log("Photo modifiée !");
            window.location = "http://localhost:8080/#/profil";
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.clearStoreAndStorage();
      }
    },

    // clear data
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
    color: #398466;
    width: 40%;
  }
}

@media screen and (max-width: 740px) {
  .Pic {
    flex-direction: column;
    width: 90%;
    height: 15%;
    fieldset {
    color: #42b983;
    width: 30%;
  }
  }
}
</style>
