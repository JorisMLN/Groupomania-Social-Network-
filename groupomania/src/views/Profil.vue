<template>
  <div class="profil">
    <LogOut msgLog="Log Out" />
    <Banner />
    <div class="main">
      <Info msg="Mes Infos" unsub="Delete Account" />
      <div class="main__right">
        <PostCreation msg="Partagez avec vos collègues !" />
      </div>
    </div>
    <Footer
      beforeMsg="© 2020-2021, "
      msg="Groupomania.git, Inc."
      beforeSigned="Created by "
      signed="'Vingilot Studio ©'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Info from "@/components/Info.vue";
import PostCreation from "@/components/PostCreation.vue";
import LogOut from "@/components/LogOut.vue";
import Footer from "@/components/Footer.vue";
import checkToken from "@/services/checkToken.js";
import axios from "axios";
import urlVariable from "@/services/urlVariable.js";

export default {
  name: "Profil",
  components: {
    LogOut,
    Banner,
    Info,
    PostCreation,
    Footer,
  },

  data(){
    return{
      urlAPI: urlVariable.getUrl()
    }
  },

  created() {
    let token = checkToken.getUserToken(this.$store);
    if (token) {
      // (en cas de réouverture de la page sans logOut) gestion de l'id vers le Vuex.
      let userId = token.userId;
      console.log(userId);
      this.$store.commit("addId", userId);

      // (en cas de réouverture de la page sans logOut) gestion du token vers le Vuex.
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.token);
      this.$store.commit("addToken", user.token);

      axios
        .get(this.urlAPI + "api/user/info/" + userId, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer: " + this.$store.state.token,
          }
        })
        .then((response) => {
          console.log(response.data);
          // date to the Vuex store
          this.$store.commit("addFirstname", response.data.firstname);
          this.$store.commit("addLastname", response.data.lastname);
          this.$store.commit("addEmail", response.data.email);
          this.$store.commit("addHobbies", response.data.hobbies);
          this.$store.commit("addJob", response.data.job);
          this.$store.commit("addWebsite", response.data.website);
          this.$store.commit("addPicture", response.data.picture);
          this.picture = response.data.picture;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.profil {
  display: flex;
  flex: wrap;
  justify-content: space-around;
  flex-direction: column;
  height: 92%;
  margin: 0px;
  .main {
    display: flex;
    flex: wrap;
    justify-content: space-around;
    flex-direction: row;
    height: 45vh;
    &__right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      border: 3px solid #42b983;
      border-radius: 10px;
      width: 60%;
      height: 95%;
    }
  }
}

@media screen and (max-width: 800px) {
  .profil {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 850px;
    margin: 0px;
    .main {
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;
      height: 500px;
      &__right {
        border: 3px solid #42b983;
        border-radius: 10px;
        width: 97%;
        height: 250px;
        .PostCreation {
          height: 50px;
        }
      }
    }
  }
}
</style>
