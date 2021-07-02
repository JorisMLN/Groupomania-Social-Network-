<template>
  <div class="profil">
    <LogOut msgLog="Log Out" msgUnsub="Unsubscribe" />
    <Banner />
    <div class="main">
      <Info msg="Mes Infos" />
      <div class="main__right">
        <PostCreation msg="Partagez avec vos collègues !" />
        <!-- <LastestPosts msg="Votre derniere publication" container="le fameux post" /> -->
      </div>
    </div>
    <Footer beforeMsg="© 2020-2021, " msg="Groupomania.git, Inc." beforeSigned="Created by " signed="'Vingilot Studio ©'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Info from "@/components/Info.vue";
import PostCreation from "@/components/PostCreation.vue";
// import LastestPosts from "@/components/LastestPosts.vue";
import LogOut from "@/components/LogOut.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Profil",
  components: {
    LogOut,
    Banner,
    Info,
    PostCreation,
    // LastestPosts,
    Footer
  },
};

</script>

<style scoped lang="scss">
.profil {
  display: flex;
  flex: wrap;
  justify-content: space-around;
  flex-direction: column;
  height:92%;
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
</style>
